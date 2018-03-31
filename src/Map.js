import React from 'react';
import PropTypes from 'prop-types';

import { withYMaps } from './withYMaps';

import {
  separateEvents,
  addEvent,
  removeEvent,
  updateEvents,
} from './util/events';

import { omit } from './util/omit';

import { getProp, isControlledProp } from './util/props';

const MapStatePropTypes = {
  bounds: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)),
  center: PropTypes.arrayOf(PropTypes.number),
  controls: PropTypes.arrayOf(PropTypes.string),
  behaviors: PropTypes.arrayOf(PropTypes.string),
  margin: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.number),
    PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)),
  ]),
  type: PropTypes.oneOf(['yandex#map', 'yandex#satellite', 'yandex#hybrid']),
  zoom: PropTypes.number,
};

// TODO: https://tech.yandex.com/maps/doc/jsapi/2.1/ref/reference/Map-docpage/
const MapOptionsPropTypes = {};

class Map extends React.Component {
  constructor(props) {
    super(props);

    this._parentElement = null;
    this._instance = null;

    this._getRef = ref => {
      this._parentElement = ref;
    };
  }

  mountObject(Map, props = this.props) {
    const { instanceRef, _events } = separateEvents(props);

    const state = getProp(props, 'state');
    const options = getProp(props, 'options');

    this._instance = new Map(this._parentElement, state, options);

    Object.keys(_events).forEach(key =>
      addEvent(this._instance, key, _events[key])
    );

    if (typeof instanceRef === 'function') {
      instanceRef(this._instance);
    }
  }

  updateObject(oldProps, newProps) {
    const { _events: oldEvents, instanceRef: oldRef } = separateEvents(
      oldProps
    );

    const { _events: newEvents, instanceRef } = separateEvents(newProps);

    if (isControlledProp(oldProps, 'state')) {
      const oldState = getProp(oldProps, 'state');
      const newState = getProp(newProps, 'state');

      if (oldState.type !== newState.type) {
        if (oldState.type !== newState.type) {
          this._instance.setType(newState.type);
        }

        if (oldState.behaviors !== newState.behaviors) {
          this._instance.behaviors.disable(oldState.behaviors || []);
          this._instance.behaviors.enable(newState.behaviors || []);
        }

        if (oldState.zoom !== newState.zoom) {
          this._instance.setZoom(newState.zoom);
        }

        if (oldState.center !== newState.center) {
          this._instance.setCenter(newState.center);
        }

        if (newState.bounds && oldState.bounds !== newState.bounds) {
          this._instance.setBounds(newState.bounds);
        }
      }

      if (isControlledProp(oldProps, 'options')) {
        const oldOptions = getProp(oldProps, 'options');
        const newOptions = getProp(newProps, 'options');

        if (oldOptions !== newOptions) {
          this._instance.options.set(newOptions);
        }
      }
    }

    updateEvents(this._instance, oldEvents, newEvents);

    // Mimic React callback ref behavior:
    // https://reactjs.org/docs/refs-and-the-dom.html#caveats-with-callback-refs
    if (oldRef !== instanceRef) {
      if (typeof oldRef === 'function') oldRef(null);
      if (typeof instanceRef === 'function') instanceRef(this._instance);
    }
  }

  unmountObject(props = this.props) {
    this._mountPromise = null;

    const { instanceRef, _events } = separateEvents(props);

    if (this._instance !== null) {
      Object.keys(_events).forEach(key =>
        removeEvent(this._instance, key, _events[key])
      );

      this._instance.destroy();
      this._instance = null;

      if (typeof instanceRef === 'function') {
        instanceRef(null);
      }
    }
  }

  componentDidMount() {
    this.mountObject(this.props.ymaps.Map);
  }

  componentDidUpdate(prevProps) {
    if (this._instance !== null) {
      this.updateObject(prevProps, this.props);
    }
  }

  componentWillUnmount() {
    this.unmountObject();
  }

  render() {
    const separatedProps = separateEvents(this.props);
    const parentElementProps = omit(separatedProps, [
      '_events',
      'state',
      'defaultState',
      'options',
      'defaultOptions',
      'instanceRef',
      'ymaps',
      'children',
    ]);

    return React.createElement(
      'div',
      Object.assign({ ref: this._getRef }, parentElementProps),
      this.props.children
    );
  }
}

Map.propTypes = {
  // Map state parameters
  // https://tech.yandex.com/maps/doc/jsapi/2.1/ref/reference/Map-docpage/#param-state
  state: PropTypes.shape(MapStatePropTypes),
  defaultState: PropTypes.shape(MapStatePropTypes),

  // TODO: https://tech.yandex.com/maps/doc/jsapi/2.1/ref/reference/Map-docpage/
  options: PropTypes.shape(MapOptionsPropTypes),
  defaultOptions: PropTypes.shape(MapOptionsPropTypes),

  // ref prop but for YMaps object instances
  instanceRef: PropTypes.func,

  // Yandex Maps API object
  ymaps: PropTypes.object,

  children: PropTypes.node,
};

export default withYMaps(Map, true, ['Map']);
