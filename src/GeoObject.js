import React from 'react';
import PropTypes from 'prop-types';

import { GeoObject as GeoObjectSymbol } from './util/symbols';
import { separateEvents, addEvent, removeEvent } from './util/events';

const { object, shape, oneOf, oneOfType, number, arrayOf, func } = PropTypes;

export class GeoObject extends React.Component {
  static propTypes = {
    geometry: shape({
      type: oneOf(['Point', 'LineString', 'Rectangle', 'Polygon', 'Circle'])
        .isRequired,
      coordinates: oneOfType([
        arrayOf(number),
        arrayOf(arrayOf(number)),
        arrayOf(arrayOf(arrayOf(number))),
      ]).isRequired,
      radius: number,
    }),

    properties: object,
    options: object,

    instanceRef: func,
  };

  static defaultProps = {
    instanceRef: Function.prototype,
  };

  static contextTypes = {
    ymaps: object,
    parent: object,
  };

  static [GeoObjectSymbol] = true;

  state = { instance: null };

  mount() {
    const {
      events,
      geometry,
      properties,
      options,
      instanceRef,
    } = separateEvents(this.props);

    const { ymaps, parent } = this.context;

    const instance = new ymaps.GeoObject({ geometry, properties }, options);

    Object.keys(events).forEach(key => addEvent(events[key], key, instance));

    if (typeof parent.add === 'function') {
      parent.add(instance);
    } else {
      parent.geoObjects.add(instance);
    }

    this.setState({ instance });

    if (typeof instanceRef === 'function') {
      instanceRef(instance);
    }
  }

  update(instance, prevProps = {}, newProps = {}) {
    const {
      geometry: prevGeometry,
      properties: prevProperties,
      options: prevOptions,
      events: prevEvents,
    } = separateEvents(prevProps);

    const { geometry, properties, options, events } = separateEvents(newProps);

    if (geometry.coordinates !== prevGeometry.coordinates) {
      instance.geometry.setCoordinates(geometry.coordinates);
    }

    if (geometry.radius !== prevGeometry.radius) {
      instance.geometry.setRadius(geometry.radius);
    }

    if (properties !== prevProperties) {
      instance.properties.set(properties);
    }

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

    if (instance !== null) {
      Object.keys(events).forEach(key =>
        removeEvent(events[key], key, instance)
      );
      if (typeof parent.remove === 'function') {
        parent.remove(instance);
      } else {
        parent.geoObjects.remove(instance);
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
    return null;
  }
}
