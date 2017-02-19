import React from 'react'
import equal from 'lodash/isEqual'

import { GeoObject as GeoObjectSymbol } from './util/symbols'
import { separateEvents, addEvent, removeEvent } from './util/events'

const { object, shape, oneOf, oneOfType, number, arrayOf, func } = React.PropTypes

export class GeoObject extends React.Component {

  static propTypes = {
    geometry: shape({
      type: oneOf(['Point', 'LineString', 'Rectangle', 'Polygon', 'Circle']).isRequired,
      coordinates: oneOfType([arrayOf(number), arrayOf(arrayOf(number))]).isRequired,
      radius: number,
    }),

    properties: object,
    options: object,

    collection: object,
    ymaps: object,

    instanceRef: func
  }

  static defaultProps = {
    instanceRef: Function.prototype
  }

  static [GeoObjectSymbol] = true

  state = { instance: null }

  mount() {
    const { collection, ymaps, events, geometry, properties, options } = separateEvents(this.props)
    const instance = new ymaps.GeoObject({geometry, properties}, options)

    Object.keys(events).forEach((key) => addEvent(events[key], key, instance))
    collection.add(instance)

    this.setState({ instance })
  }

  update(instance, prevProps = {}, newProps = {}) {
    const {
      geometry: prevGeometry, properties: prevProperties,
      options: prevOptions, events: prevEvents
    } = separateEvents(prevProps)

    const {geometry, properties, options, events} = separateEvents(newProps)

    if (!equal(geometry.coordinates, prevGeometry.coordinates)) {
      instance.geometry.setCoordinates(geometry.coordinates)
    }

    if (geometry.radius !== prevGeometry.radius) {
      instance.geometry.setRadius(geometry.radius)
    }

    if (!equal(properties, prevProperties)) {
      instance.properties.set(properties)
    }

    if (!equal(options, prevOptions)) {
      instance.options.set(options)
    }

    this.updateEvents(instance, prevEvents, events)
  }

  updateEvents(instance, prevEvents, newEvents) {
    const mergedEvents = Object.assign({}, prevEvents, newEvents)

    Object.keys(mergedEvents).forEach((key) => {
      if (prevEvents[key] !== newEvents[key]) {
        removeEvent(prevEvents[key], key, instance)
        addEvent(newEvents[key], key, instance)
      }
    })
  }

  unmount() {
    const { instance } = this.state
    const { events, collection } = separateEvents(this.props)

    if (!instance) return

    Object.keys(events).forEach((key) => removeEvent(events[key], key, instance))
    collection.remove(instance)
  }

  componentDidMount() {
    const { ymaps } = this.props
    if (ymaps) this.mount()
  }

  componentWillReceiveProps(newProps) {
    const { instance } = this.state
    if (instance) this.update(instance, this.props, newProps)
  }

  componentDidUpdate(prevProps, prevState) {
    const { instance } = this.state
    const { instanceRef } = this.props

    if (prevState.instance !== instance) {
      if (instance) {
        instanceRef(instance)
      } else {
        instanceRef(null)
      }
    }
  }

  componentWillUnmount() {
    this.unmount()
  }

  render() { return null }
}
