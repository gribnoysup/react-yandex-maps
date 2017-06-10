import React from 'react';
import PropTypes from 'prop-types';

import { Control as ControlSymbol } from './util/symbols';
import { separateEvents, addEvent, removeEvent } from './util/events';

const { func } = PropTypes;

export class Control extends React.Component {
  static propTypes = {
    instanceRef: func,
  };

  static defaultProps = {
    instanceRef: Function.prototype,
  };

  static [ControlSymbol] = true;

  state = { instance: null };

  mount() {
    const {
      ymaps,
      type,
      collection,
      data,
      options,
      state,
      events,
    } = separateEvents(this.props);
    const instance = new ymaps.control[type]({ data, options, state });

    Object.keys(events).forEach(key => addEvent(events[key], key, instance));
    collection.add(instance);

    this.setState({ instance });
  }

  update(instance, prevProps = {}, newProps = {}) {
    const {
      data: prevData,
      options: prevOptions,
      state: prevState,
      events: prevEvents,
    } = separateEvents(prevProps);
    const { data, options, state, events } = separateEvents(this.props);

    if (data !== prevData) {
      instance.data.set(data);
    }

    if (options !== prevOptions) {
      instance.options.set(options);
    }

    if (state !== prevState) {
      instance.state.set(state);
    }

    this.updateEvents(instance, prevEvents, events);
  }

  updateEvents(instance, prevEvents, newEvents) {
    const mergedEvents = Object.assign({}, prevEvents, newEvents);

    Object.keys(mergedEvents).forEach(key => {
      if (prevEvents[key] !== newEvents[key]) {
        removeEvent(prevEvents[key], key, instance);
        addEvent(newEvents[key], key, instance);
      }
    });
  }

  unmount() {
    const { instance } = this.state;
    const { events, collection } = separateEvents(this.props);

    if (!instance) return;

    Object.keys(events).forEach(key => removeEvent(events[key], key, instance));
    collection.remove(instance);
  }

  componentDidMount() {
    const { ymaps } = this.props;
    if (ymaps) this.mount();
  }

  componentWillReceiveProps(newProps) {
    const { instance } = this.state;
    if (instance) this.update(instance, this.props, newProps);
  }

  componentDidUpdate(prevProps, prevState) {
    const { instance } = this.state;
    const { instanceRef } = this.props;

    if (prevState.instance !== instance) {
      if (instance) {
        instanceRef(instance);
      } else {
        instanceRef(null);
      }
    }
  }

  componentWillUnmount() {
    this.unmount();
  }

  render() {
    return null;
  }
}
