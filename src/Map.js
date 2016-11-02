import React, {Component, PropTypes} from 'react'
import isEqual from 'lodash.isequal'

import SYMBOLS from './util/symbols'
import MapTypes from './util/types'
import api from './util/api'
import {EVENTS as EVENTS_MAP, separateEvents} from './util/events'

const EVENTS = EVENTS_MAP['Map']

export default class Map extends Component {

  static propTypes = {
    state: React.PropTypes.shape({
      center: MapTypes.coordinates,
      zoom: React.PropTypes.number,
    }),
    width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  }

  static defaultProps = {
    state: {
      center: [0, 0],
      zoom: 1,
    },
    width: 640,
    height: 480,
  }

  constructor(...args) {
    super(...args)
    this.state = { instance: null, api: null }
  }

  onApiAvaliable() {
    return new Promise((resolve, reject) => {
      const instance = api.getAPI()
      instance.ready(() => {
        this.setState({api: instance}, () => {
          const cb = this.props.onApiAvaliable
          if (typeof cb === 'function') cb(instance)
          resolve()
        })
      })
    })
  }

  mountMap() {
    const {state, events, options} = separateEvents(this.props)
    const {api} = this.state
    const instance = new api.Map(this.mapNode, state, options)
    this.addEvents(instance, events)
    this.setState({instance}, () => {
      const cb = this.props.onMapAvaliable
      if (typeof cb === 'function') cb(instance)
    })
  }

  unmountMap() {
    const {events} = separateEvents(this.props)
    const {instance} = this.state

    if (instance !== null) {
      this.removeEvents(instance, events)
      instance.destroy()
    }
  }

  updateMap(prevProps = {}) {
    const {options: prevOptions, state: prevState, events: prevEvents} = separateEvents(prevProps)
    const {options, state, events} = separateEvents(this.props)
    const {instance} = this.state

    if (!isEqual(state.center, prevState.center)) {
      instance.setCenter(state.center)
    }

    if (!isEqual(state.bounds, prevState.bounds)) {
      instance.setBounds(state.bounds)
    }

    if (state.type !== prevState.type) {
      instance.setType(state.type)
    }

    if (state.zoom !== prevState.zoom) {
      instance.setZoom(state.zoom)
    }

    if (!isEqual(options, prevOptions)) {
      instance.options.set(options)
    }

    if (!isEqual(events, prevEvents)) {
      this.removeEvents(instance, prevEvents)
      this.addEvents(instance, events)
    }
  }

  addEvents(instance, events) {
    Object.keys(events).forEach((key) => {
      if (EVENTS[key] && typeof events[key] === 'function') {
        instance.events.add(EVENTS[key], events[key])
      }
    })
  }

  removeEvents(instance, events) {
    Object.keys(events).forEach((key) => {
      if (EVENTS[key] && typeof events[key] === 'function') {
        instance.events.remove(EVENTS[key], events[key])
      }
    })
  }

  renderGeoObject(child) {
    const {api} = this.state
    const {geoObjects: collection} = this.state.instance

    return React.cloneElement(child, { api, collection })
  }

  renderControl(child) {
    const {api} = this.state
    const {controls: collection} = this.state.instance

    return React.cloneElement(child, { api, collection })
  }

  renderChildren() {
    const {children} = this.props
    const {instance} = this.state

    if (instance === null) return null

    return React.Children.map(children, (child) => {
      if (child === null) return null
      if (child.type[SYMBOLS.GEO_OBJECT]) return this.renderGeoObject(child)
      if (child.type[SYMBOLS.CONTROL]) return this.renderControl(child)
    })
  }

  componentDidMount() {
    if (api.isAvaliable()) {
      this.onApiAvaliable()
        .then(() => this.mountMap())
    } else {
      api.load(/* TODO: add options support */)
        .then(() => this.onApiAvaliable())
        .then(() => this.mountMap())
    }
  }

  componentDidUpdate(prevProps) {
    this.updateMap(prevProps)
  }

  componentWillUnmount() {
    this.unmountMap()
  }

  render() {
    const {width, height} = this.props

    return (
      <div>
        {this.renderChildren()}
        <div
          style={{width, height}}
          ref={(ref) => this.mapNode = ref}
        />
      </div>
    )
  }
}
