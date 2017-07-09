import React from 'react';
import PropTypes from 'prop-types';

import { Control as ControlSymbol } from './util/symbols';
import { separateEvents, addEvent, removeEvent } from './util/events';

const { func, object } = PropTypes;

export class Control extends React.Component {
  static propTypes = {
    instanceRef: func,
  };

  static defaultProps = {
    instanceRef: Function.prototype,
  };

  static contextTypes = {
    ymaps: object,
    parent: object,
  };

  static [ControlSymbol] = true;

  state = { instance: null };

  mount() {
    const { type, data, options, state, events, instanceRef } = separateEvents(
      this.props
    );
    const { ymaps, parent } = this.context;

    const instance = new ymaps.control[type]({ data, options, state });

    Object.keys(events).forEach(key => addEvent(events[key], key, instance));
    parent.controls.add(instance);

    this.setState({ instance });

    if (typeof instanceRef === 'function') {
      instanceRef(instance);
    }
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
    const { parent } = this.context;
    const { instance } = this.state;
    const { events, instanceRef } = separateEvents(this.props);

    if (!instance) return;

    Object.keys(events).forEach(key => removeEvent(events[key], key, instance));
    parent.controls.remove(instance);

    if (typeof instanceRef === 'function') {
      instanceRef(null);
    }
  }

  componentDidMount() {
    this.mount();
  }

  componentWillReceiveProps(newProps) {
    const { instance } = this.state;
    if (instance !== null) this.update(instance, this.props, newProps);
  }

  componentWillUnmount() {
    this.unmount();
  }

  render() {
    return null;
  }
}
