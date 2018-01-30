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

// TODO: Include the whole list?
const MapAddonsPropType = PropTypes.string;

const MapStatePropTypes = {
  bounds: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)),
  center: PropTypes.arrayOf(PropTypes.number),
  controls: PropTypes.arrayOf(PropTypes.string),
  behaviors: PropTypes.arrayOf(PropTypes.string),
  margin: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.number),
    PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number))
  ]),
  type: PropTypes.oneOf(['yandex#map', 'yandex#satellite', 'yandex#hybrid']),
  zoom: PropTypes.number,
};

// TODO: https://tech.yandex.com/maps/doc/jsapi/2.1/ref/reference/Map-docpage/
const MapOptionsPropTypes = {};

class Map extends React.Component {
  constructor(props) {
    super(props);

    this._mountPromise = null;
    this._isMounted = true;
    this._parentElement = null;
    this._instance = null;

    this._getRef = ref => {
      if (typeof this.props.parentElementProps.ref === 'function') {
        this.props.parentElementProps.ref(ref);
      }

      this._parentElement = ref;
    };
  }

  mountObject(Map, props = this.props) {
    if (this._isMounted) {
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
  }

  updateObject(oldProps, newProps) {
    const { _events: oldEvents } = separateEvents(oldProps);
    const { _events: newEvents } = separateEvents(newProps);

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
    if (this.props.ymaps !== null) {
      this._mountPromise = this.props.ymaps
        .loadModule('Map', this.props.addons)
        .then(Module => this.mountObject(Module));
    }
  }

  componentWillReceiveProps(newProps) {
    if (
      this._instance === null &&
      this._mountPromise === null &&
      newProps.ymaps !== null &&
      newProps.ymaps !== this.props.ymaps
    ) {
      this._mountPromise = newProps.ymaps
        .loadModule('Map', newProps.addons)
        .then(Module => this.mountObject(Module));
    }

    if (this._instance !== null) {
      this.updateObject(this.props, newProps);
    }
  }

  componentWillUnmount() {
    this._isMounted = false;
    this.unmountObject();
  }

  render() {
    const { children, parentElementProps } = this.props;
    // eslint-disable-next-line no-unused-vars
    const { ref, children: _ } = parentElementProps;

    return React.createElement(
      'div',
      Object.assign(
        { ref: this._getRef },
        // TODO: Change when microbundle supports rest-spread
        omit(parentElementProps, ['ref', 'children'])
      ),
      children
    );
  }
}

Map.propTypes = {
  // Enables addons for Map
  // https://tech.yandex.com/maps/doc/jsapi/2.1/dg/concepts/modules-docpage/#addons
  addons: PropTypes.oneOfType([
    MapAddonsPropType,
    PropTypes.arrayOf(MapAddonsPropType)
  ]),

  // Map state parameters
  // https://tech.yandex.com/maps/doc/jsapi/2.1/ref/reference/Map-docpage/#param-state
  state: PropTypes.shape(MapStatePropTypes),
  defaultState: PropTypes.shape(MapStatePropTypes),

  // TODO: https://tech.yandex.com/maps/doc/jsapi/2.1/ref/reference/Map-docpage/
  options: PropTypes.shape(MapOptionsPropTypes),
  defaultOptions: PropTypes.shape(MapOptionsPropTypes),

  // Props that will be passed to the map parentElement created by react-yandex-maps
  // https://tech.yandex.com/maps/doc/jsapi/2.1/ref/reference/Map-docpage/#param-parentElement
  parentElementProps: PropTypes.object,

  // ref prop but for YMaps object instances
  instanceRef: PropTypes.func,

  // Yandex Maps API object
  ymaps: PropTypes.object,

  children: PropTypes.node,
};

Map.defaultProps = {
  parentElementProps: {},
};

export default withYMaps(Map, true);
