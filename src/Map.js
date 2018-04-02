import React from 'react';
import PropTypes from 'prop-types';

import {
  separateEvents,
  addEvent,
  removeEvent,
  updateEvents,
} from './util/events';
import { omit } from './util/omit';
import { getProp, isControlledProp } from './util/props';
import { withYMaps } from './withYMaps';
import { ParentContext } from './Context';

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
  constructor() {
    super();

    this.state = { instance: null };

    this._parentElement = null;
    this.state.instance = null;

    this._getRef = ref => {
      this._parentElement = ref;
    };
  }

  mountObject(Map, props = this.props) {
    const { instanceRef, _events } = separateEvents(props);

    const state = getProp(props, 'state');
    const options = getProp(props, 'options');

    const instance = new Map(this._parentElement, state, options);

    Object.keys(_events).forEach(key =>
      addEvent(this.state.instance, key, _events[key])
    );

    if (typeof instanceRef === 'function') {
      instanceRef(this.state.instance);
    }

    this.setState({ instance });
  }

  updateObject(instance, oldProps, newProps) {
    const { _events: newEvents, instanceRef } = separateEvents(newProps);
    const { _events: oldEvents, instanceRef: oldRef } = separateEvents(
      oldProps
    );

    if (isControlledProp(oldProps, 'state')) {
      const oldState = getProp(oldProps, 'state');
      const newState = getProp(newProps, 'state');

      if (oldState.type !== newState.type) {
        if (oldState.type !== newState.type) {
          instance.setType(newState.type);
        }

        if (oldState.behaviors !== newState.behaviors) {
          instance.behaviors.disable(oldState.behaviors || []);
          instance.behaviors.enable(newState.behaviors || []);
        }

        if (oldState.zoom !== newState.zoom) {
          instance.setZoom(newState.zoom);
        }

        if (oldState.center !== newState.center) {
          instance.setCenter(newState.center);
        }

        if (newState.bounds && oldState.bounds !== newState.bounds) {
          instance.setBounds(newState.bounds);
        }
      }

      if (isControlledProp(oldProps, 'options')) {
        const oldOptions = getProp(oldProps, 'options');
        const newOptions = getProp(newProps, 'options');

        if (oldOptions !== newOptions) {
          instance.options.set(newOptions);
        }
      }
    }

    updateEvents(instance, oldEvents, newEvents);

    // Mimic React callback ref behavior:
    // https://reactjs.org/docs/refs-and-the-dom.html#caveats-with-callback-refs
    if (oldRef !== instanceRef) {
      if (typeof oldRef === 'function') oldRef(null);
      if (typeof instanceRef === 'function') instanceRef(instance);
    }
  }

  unmountObject(props = this.props) {
    this._mountPromise = null;

    const { instanceRef, _events } = separateEvents(props);

    if (this.state.instance !== null) {
      Object.keys(_events).forEach(key =>
        removeEvent(this.state.instance, key, _events[key])
      );

      this.state.instance.destroy();

      if (typeof instanceRef === 'function') {
        instanceRef(null);
      }
    }
  }

  componentDidMount() {
    this.mountObject(this.props.ymaps.Map);
  }

  componentDidUpdate(prevProps) {
    if (this.state.instance !== null) {
      this.updateObject(this.state.instance, prevProps, this.props);
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

    return (
      <ParentContext.Provider value={this.state.instance}>
        <div ref={this._getRef} {...parentElementProps}>
          {this.props.children}
        </div>
      </ParentContext.Provider>
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
