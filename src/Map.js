import React from 'react';
import PropTypes from 'prop-types';

import * as events from './util/events';
import { omit } from './util/omit';
import { getProp, isControlledProp } from './util/props';
import withYMaps from './withYMaps';
import { ParentContext } from './Context';
import applyRef from './util/ref';

export class Map extends React.Component {
  constructor() {
    super();
    this.state = { instance: null };
    this._parentElement = null;
    this._getRef = ref => {
      this._parentElement = ref;
    };
  }

  componentDidMount() {
    const instance = Map.mountObject(
      this._parentElement,
      this.props.ymaps.Map,
      this.props
    );

    this.setState({ instance });
  }

  componentDidUpdate(prevProps) {
    if (this.state.instance !== null) {
      Map.updateObject(this.state.instance, prevProps, this.props);
    }
  }

  componentWillUnmount() {
    Map.unmountObject(this.state.instance, this.props);
  }

  render() {
    const parentElementStyle = Map.getParentElementSize(this.props);
    const separatedProps = events.separateEvents(this.props);

    const parentElementProps = omit(separatedProps, [
      '_events',
      'state',
      'defaultState',
      'options',
      'defaultOptions',
      'instanceRef',
      'ymaps',
      'children',
      'width',
      'height',
      'style',
      'className',
    ]);

    return (
      <ParentContext.Provider value={this.state.instance}>
        <div ref={this._getRef} {...parentElementStyle} {...parentElementProps}>
          {this.props.children}
        </div>
      </ParentContext.Provider>
    );
  }

  static getParentElementSize(props) {
    const { width, height, style, className } = props;

    if (typeof style !== 'undefined' || typeof className !== 'undefined') {
      return Object.assign({}, style && { style }, className && { className });
    }

    return { style: { width, height } };
  }

  static mountObject(parentElement, Map, props) {
    const { instanceRef, _events } = events.separateEvents(props);

    const state = getProp(props, 'state');
    const options = getProp(props, 'options');

    const instance = new Map(parentElement, state, options);

    Object.keys(_events).forEach(key =>
      events.addEvent(instance, key, _events[key])
    );

    applyRef(null, instanceRef, instance);

    return instance;
  }

  static updateObject(instance, oldProps, newProps) {
    const { _events: newEvents, instanceRef } = events.separateEvents(newProps);
    const { _events: oldEvents, instanceRef: oldRef } = events.separateEvents(
      oldProps
    );

    if (isControlledProp(newProps, 'state')) {
      const oldState = getProp(oldProps, 'state', {});
      const newState = getProp(newProps, 'state', {});

      if (oldState.type !== newState.type) {
        instance.setType(newState.type);
      }

      if (oldState.behaviors !== newState.behaviors) {
        if (oldState.behaviors) instance.behaviors.disable(oldState.behaviors);
        if (newState.behaviors) instance.behaviors.enable(newState.behaviors);
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

    if (isControlledProp(newProps, 'options')) {
      const oldOptions = getProp(oldProps, 'options');
      const newOptions = getProp(newProps, 'options', {});

      if (oldOptions !== newOptions) {
        instance.options.set(newOptions);
      }
    }

    if (
      getProp(oldProps, 'width') !== getProp(newProps, 'width') ||
      getProp(oldProps, 'height') !== getProp(newProps, 'height')
    ) {
      instance.container.fitToViewport();
    }

    events.updateEvents(instance, oldEvents, newEvents);

    applyRef(oldRef, instanceRef, instance);
  }

  static unmountObject(instance, props) {
    const { instanceRef, _events } = events.separateEvents(props);

    if (instance !== null) {
      Object.keys(_events).forEach(key =>
        events.removeEvent(instance, key, _events[key])
      );

      instance.destroy();

      // Clean used ref
      applyRef(instanceRef);
    }
  }
}

if (process.env.NODE_ENV !== 'production') {
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

  Map.propTypes = {
    /**
     * [Map state parameters](https://tech.yandex.com/maps/doc/jsapi/2.1/ref/reference/Map-docpage/#param-state)
     */
    state: PropTypes.shape(MapStatePropTypes),
    /**
     * Uncontrolled [Map state parameters](https://tech.yandex.com/maps/doc/jsapi/2.1/ref/reference/Map-docpage/#param-state)
     */
    defaultState: PropTypes.shape(MapStatePropTypes),

    /**
     * [Map options](https://tech.yandex.com/maps/doc/jsapi/2.1/ref/reference/Map-docpage/#Map__param-options)
     */
    options: PropTypes.shape(MapOptionsPropTypes),
    /**
     * Uncontrolled [Map options](https://tech.yandex.com/maps/doc/jsapi/2.1/ref/reference/Map-docpage/#Map__param-options)
     */
    defaultOptions: PropTypes.shape(MapOptionsPropTypes),

    /**
     * YMaps object ref
     */
    instanceRef: PropTypes.func,

    ymaps: PropTypes.object,

    children: PropTypes.node,

    /**
     * Yandex.Maps Map parent element should have at least
     * some size set to it, otherwise the map is rendered
     * into the container with size 0
     *
     * To avoid this we will use `width` and `height` props as default
     * way of sizing the map element, but then if we see that
     * the library user also provides `style` or `className` prop,
     * we will assume that the Map is sized by those and will
     * not use these
     */

    /**
     * Map container width
     */
    width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

    /**
     * Map container height
     */
    height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

    /**
     * Map container style
     */
    style: PropTypes.object,

    /**
     * Map container className
     */
    className: PropTypes.string,
  };
}

Map.defaultProps = {
  width: 320,
  height: 240,
};

export default withYMaps(Map, true, ['Map']);
