import React from 'react';
import PropTypes from 'prop-types';

import { separateEvents, addEvent, removeEvent } from './util/events';

import { Fragment } from './util/Fragment';

const { func, object } = PropTypes;

export class Clusterer extends React.Component {
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

  static childContextTypes = {
    parent: object,
  };

  getChildContext() {
    return { parent: this.state.instance };
  }

  state = { instance: null };

  mount() {
    const { ymaps, parent } = this.context;
    const { options, events, instanceRef } = separateEvents(this.props);
    const instance = new ymaps.Clusterer(options);

    Object.keys(events).forEach(key => addEvent(events[key], key, instance));

    if (parent.geoObjects && typeof parent.geoObjects.add === 'function') {
      parent.geoObjects.add(instance);
    } else if (parent.add && typeof parent.add === 'function') {
      parent.add(instance);
    }

    this.setState({ instance });

    if (typeof instanceRef === 'function') {
      instanceRef(instance);
    }
  }

  update(instance, prevProps = {}, newProps = {}) {
    const { options: prevOptions, events: prevEvents } = separateEvents(
      prevProps
    );
    const { options, events } = separateEvents(this.props);

    if (options !== prevOptions) {
      instance.options.set(options);
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

    if (instance !== null) {
      Object.keys(events).forEach(key =>
        removeEvent(events[key], key, instance)
      );

      if (parent.geoObjects && typeof parent.geoObjects.remove === 'function') {
        parent.geoObjects.remove(instance);
      } else if (parent.remove && typeof parent.remove === 'function') {
        parent.remove(instance);
      }
    }

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
    const { children } = this.props;
    const { instance } = this.state;

    return instance && children
      ? <Fragment>
          {children}
        </Fragment>
      : null;
  }
}
