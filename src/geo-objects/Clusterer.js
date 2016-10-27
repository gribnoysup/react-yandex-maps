import React from 'react'
import isEqual from 'lodash.isequal'

import {GEO_OBJECT} from '../util/symbols'
import {EVENTS as EVENTS_MAP, separateEvents} from '../util/events'

const EVENTS = EVENTS_MAP['Clusterer']

class Clusterer extends React.Component {
  constructor(...args) {
    super(...args)
    this.state = {
      instance: null,
      isMounted: false
    }
  }

  mountInstance() {
    const {collection, api, options, events} = separateEvents(this.props)
    if (this.state.instance === null) {
      const instance = new api.Clusterer(options)
      collection.add(instance)
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
    const {options: prevOptions, events: prevEvents} = separateEvents(prevProps)
    const {options, events} = separateEvents(this.props)
    const {instance} = this.state

    if (!isEqual(options, prevOptions)) {
      instance.options.set(options)
    }

    if (!isEqual(events, prevEvents)) {
      this.removeEvents(instance, prevEvents)
      this.addEvents(instance, events)
    }
  }

  renderGeoObjects() {
    const {children, api} = this.props
    const {instance: collection, isMounted} = this.state

    if (!isMounted) return null

    return React.Children.map(children, (child) =>
      React.cloneElement(child, {api, collection})
    )
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

  componentDidUpdate(prevProps) {
    this.updateInstance(prevProps)
  }

  componentDidMount() {
    this.mountInstance()
  }

  componentWillUnmount() {
    this.unmountInstance()
  }

  render() {
    return <noscript>{this.renderGeoObjects()}</noscript>
  }
}

Clusterer[GEO_OBJECT] = true

export default Clusterer
