import React from 'react'
import isEqual from 'lodash.isequal'

import {CONTROL} from '../util/symbols'
import {EVENTS as EVENTS_MAP, separateEvents} from '../util/events'

const EVENTS = EVENTS_MAP['Control']

class Control extends React.Component {
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
    const {api, type, collection, data, options, state, events} = separateEvents(this.props)
    const {instance} = this.state

    if (instance === null) {
      const instance = new api.control[type]({data, options, state})
      collection.add(instance)
      this.addEvents(instance, events)
      this.setState({instance, isMounted: true}, () => {
        this.getInstance()
      })
    }
  }

  unmountInstance() {
    const {collection, events} = separateEvents(this.props)
    const {instance} = this.state

    if (instance !== null) {
      collection.remove(instance)
      this.removeEvents(instance, events)
      this.setState({isMounted: false}, () => {
        this.getInstance(null)
      })
    }
  }

  updateInstance(prevProps = {}) {
    const {data: prevData, options: prevOptions, state: prevState, events: prevEvents} = separateEvents(prevProps)
    const {data, options, state, events} = separateEvents(this.props)
    const {instance} = this.state

    if (!isEqual(data, prevData)) {
      instance.data.set(data)
    }

    if (!isEqual(options, prevOptions)) {
      instance.options.set(options)
    }

    if (!isEqual(state, prevState)) {
      instance.state.set(state)
    }

    if (!isEqual(events, prevEvents)) {
      this.removeEvents(instance, prevEvents)
      this.addEvents(instance, events)
    }
  }

  addEvents(instance, events) {
    const {type} = this.props
    Object.keys(events).forEach((key) => {
      if (EVENTS[type][key] && typeof events[key] === 'function') {
        instance.events.add(EVENTS[type][key], events[key])
      }
    })
  }

  removeEvents(instance, events) {
    const {type} = this.props
    Object.keys(events).forEach((key) => {
      if (EVENTS[type][key] && typeof events[key] === 'function') {
        instance.events.remove(EVENTS[type][key], events[key])
      }
    })
  }

  componentDidMount() {
    this.mountInstance()
  }

  componentWillUnmount() {
    this.unmountInstance()
  }

  render() { return null }
}

Control[CONTROL] = true

export default Control
