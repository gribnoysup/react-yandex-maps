import React from 'react'
import isEqual from 'lodash.isequal'

import {GEO_OBJECT} from '../util/symbols'
import {EVENTS as EVENTS_MAP, separateEvents} from '../util/events'

const EVENTS = EVENTS_MAP['ObjectManager']

class ObjectManager extends React.Component {
  constructor(...args) {
    super(...args)
    this.state = {
      instance: null,
      isMounted: false
    }
  }

  mountInstance() {
    const {collection, api, features, filter, options, clusters, objects, events} = separateEvents(this.props)
    if (this.state.instance === null) {
      const instance = new api.ObjectManager(options)
      collection.add(instance)
      instance.add(features)
      instance.setFilter(filter)
      instance.clusters.options.set(clusters || {})
      instance.objects.options.set(objects || {})
      this.addEvents(instance, events)
      this.setState({instance, isMounted: true})
    }
  }

  unmountInstance() {
    const {collection} = this.props
    const {instance} = this.state

    if (instance !== null) {
      collection.remove(instance)
      this.setState({isMounted: false})
    }
  }

  updateInstance(prevProps = {}) {
    const {filter: prevFilter, events: prevEvents, clusters: prevClusters, objects: prevObjects} = separateEvents(prevProps)
    const {filter, events, clusters, objects} = separateEvents(this.props)
    const {instance} = this.state

    if (filter !== prevFilter) {
      instance.setFilter(filter)
    }

    if (!isEqual(clusters, prevClusters)) {
      instance.clusters.options.set(clusters || {})
    }

    if (!isEqual(objects, prevObjects)) {
      instance.objects.options.set(objects || {})
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

  componentDidMount() {
    this.mountInstance()
  }

  componentDidUpdate(prevProps) {
    this.updateInstance(prevProps)
  }

  componentWillUnmount() {
    this.unmountInstance()
  }

  render() {
    return null
  }
}

ObjectManager[GEO_OBJECT] = true

export default ObjectManager
