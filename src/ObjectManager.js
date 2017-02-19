import React from 'react'
import equal from 'lodash/isEqual'

import { GeoObject as GeoObjectSymbol } from './util/symbols'
import { separateEvents, addEvent, removeEvent } from './util/events'

const { func } = React.PropTypes

export class ObjectManager extends React.Component {

  static propTypes = {
    instanceRef: func
  }

  static defaultProps = {
    instanceRef: Function.prototype
  }

  static [GeoObjectSymbol] = true

  state = { instance: null }

  mount() {
    const {collection, ymaps, features, filter, options, clusters, objects, events} = separateEvents(this.props)
    const instance = new ymaps.ObjectManager(options)

    Object.keys(events).forEach((key) => addEvent(events[key], key, instance))
    collection.add(instance)

    instance.add(features)
    instance.setFilter(filter)
    instance.clusters.options.set(clusters || {})
    instance.objects.options.set(objects || {})

    this.setState({ instance })
  }

  update(instance, prevProps = {}, newProps = {}) {
    const {
      filter: prevFilter, events: prevEvents,
      clusters: prevClusters, objects: prevObjects
    } = separateEvents(prevProps)

    const {filter, events, clusters, objects} = separateEvents(newProps)

    if (filter !== prevFilter) {
      instance.setFilter(filter)
    }

    if (!equal(clusters, prevClusters)) {
      instance.clusters.options.set(clusters || {})
    }

    if (!equal(objects, prevObjects)) {
      instance.objects.options.set(objects || {})
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
