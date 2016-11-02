import React from 'react'
import isEqual from 'lodash.isequal'

import {GEO_OBJECT} from '../util/symbols'
import {EVENTS as EVENTS_MAP, separateEvents} from '../util/events'

const EVENTS = EVENTS_MAP['GeoObject']

class GeoObject extends React.Component {
  constructor(...args) {
    super(...args)
    this.state = {
      instance: null,
      isMounted: false
    }
  }

  getInstance(instance = this.state.instance) {
    const {instanceRef} = this.props
    if (typeof instanceRef === 'function') {
      instanceRef(instance)
    }
  }

  mountInstance() {
    const {collection, api, events, geometry, properties, options} = separateEvents(this.props)
    if (this.state.instance === null) {
      const instance = new api.GeoObject({geometry, properties}, options)
      collection.add(instance)
      this.addEvents(instance, events)
      this.setState({instance, isMounted: true}, () => {
        this.getInstance()
      })
    }
  }

  unmountInstance() {
    const {collection} = this.props
    const {instance} = this.state

    if (instance !== null) {
      collection.remove(instance)
      this.setState({isMounted: false}, () => {
        this.getInstance(null)
      })
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

  updateInstance(prevProps = {}) {
    const {geometry: prevGeometry, properties: prevProperties, options: prevOptions, events: prevEvents} = separateEvents(prevProps)
    const {geometry, properties, options, events} = separateEvents(this.props)
    const {instance} = this.state

    if (!isEqual(geometry.coordinates, prevGeometry.coordinates)) {
      instance.geometry.setCoordinates(geometry.coordinates)
    }

    if (geometry.radius !== geometry.radius) {
      instance.geometry.setRadius(geometry.radius)
    }

    if (!isEqual(properties, prevProperties)) {
      instance.properties.set(properties)
    }

    if (!isEqual(options, prevOptions)) {
      instance.options.set(options)
    }

    if (!isEqual(events, prevEvents)) {
      this.removeEvents(instance, prevEvents)
      this.addEvents(instance, events)
    }
  }

  componentDidMount() {
    this.mountInstance()
  }

  componentDidUpdate(prevProps) {
    this.updateInstance(prevProps)
  }

  componentWillUnmount() {
    this.unmountInstance()
  }

  render() {return null}
}

GeoObject[GEO_OBJECT] = true

export default GeoObject
