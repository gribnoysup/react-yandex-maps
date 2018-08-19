import React from 'react';
import PropTypes from 'prop-types';

import * as events from './util/events';
import { getProp, isControlledProp } from './util/props';
import { withParentContext } from './Context';
import withYMaps from './withYMaps';

export class GeoObject extends React.Component {
  constructor() {
    super();
    this.state = { instance: null };
  }

  componentDidMount() {
    // The only difference between GeoObject and all the other,
    // more specific GeoObject constructors (like Placemark, Circle,
    // or Polyline) is the way in which the arguments are passesd to
    // the constructor. GeoObject expects `feature` with `geometry` and
    // `properties` keys and all the other Geojbect constructors
    // expect `geometry` and `properties` as separate arguments
    //
    // We will hack around this difference with our custom constructor.
    // That way we can completely reuse GeoObject static methods.
    const YMapsGeoObjectConstructor = this.props.ymaps.GeoObject;

    function GeoObjectConstructor(geometry, properties, options) {
      YMapsGeoObjectConstructor.call(this, { geometry, properties }, options);
    }

    GeoObjectConstructor.prototype = YMapsGeoObjectConstructor.prototype;

    const instance = GeoObject.mountObject(GeoObjectConstructor, this.props);

    this.setState({ instance });
  }

  componentDidUpdate(prevProps) {
    if (this.state.instance !== null) {
      GeoObject.updateObject(this.state.instance, prevProps, this.props);
    }
  }

  componentWillUnmount() {
    GeoObject.unmountObject(this.state.instance, this.props);
  }

  render() {
    return null;
  }

  static mountObject(GeoObject, props) {
    const { instanceRef, parent, _events } = events.separateEvents(props);

    const geometry = getProp(props, 'geometry');
    const properties = getProp(props, 'properties');
    const options = getProp(props, 'options');

    const instance = new GeoObject(geometry, properties, options);

    Object.keys(_events).forEach(key =>
      events.addEvent(instance, key, _events[key])
    );

    if (parent.geoObjects && typeof parent.geoObjects.add === 'function') {
      parent.geoObjects.add(instance);
    } else if (parent.add && typeof parent.add === 'function') {
      parent.add(instance);
    } else {
      throw new Error('No parent found to mount GeoObject');
    }

    if (typeof instanceRef === 'function') {
      instanceRef(instance);
    }

    return instance;
  }

  static updateObject(instance, oldProps, newProps) {
    const { _events: newEvents, instanceRef } = events.separateEvents(newProps);
    const { _events: oldEvents, instanceRef: oldRef } = events.separateEvents(
      oldProps
    );

    if (isControlledProp(oldProps, 'geometry')) {
      const oldGeometry = getProp(oldProps, 'geometry');
      const newGeometry = getProp(newProps, 'geometry');

      if (Array.isArray(newGeometry) && newGeometry !== oldGeometry) {
        // Circle geometry is a special case
        if (
          Array.isArray(newGeometry[0]) &&
          typeof newGeometry[1] === 'number'
        ) {
          instance.geometry.setCoordinates(newGeometry[0]);
          instance.geometry.setRadius(newGeometry[1]);
        } else {
          instance.geometry.setCoordinates(newGeometry);
        }
      }

      if (typeof newGeometry === 'object') {
        if (newGeometry.coordinates !== oldGeometry.coordinates) {
          instance.geometry.setCoordinates(newGeometry.coordinates);
        }

        if (newGeometry.radius !== oldGeometry.radius) {
          instance.geometry.setRadius(newGeometry.radius);
        }
      }
    }

    if (isControlledProp(oldProps, 'properties')) {
      const oldProperties = getProp(oldProps, 'properties');
      const newProperties = getProp(newProps, 'properties');

      if (oldProperties !== newProperties) {
        instance.properties.set(newProperties);
      }
    }

    if (isControlledProp(oldProps, 'options')) {
      const oldOptions = getProp(oldProps, 'options');
      const newOptions = getProp(newProps, 'options');

      if (oldOptions !== newOptions) {
        instance.options.set(newOptions);
      }
    }

    events.updateEvents(instance, oldEvents, newEvents);

    // Mimic React callback ref behavior:
    // https://reactjs.org/docs/refs-and-the-dom.html#caveats-with-callback-refs
    if (oldRef !== instanceRef) {
      if (typeof oldRef === 'function') oldRef(null);
      if (typeof instanceRef === 'function') instanceRef(instance);
    }
  }

  static unmountObject(instance, props) {
    const { instanceRef, _events } = events.separateEvents(props);

    if (instance !== null) {
      Object.keys(_events).forEach(key =>
        events.removeEvent(instance, key, _events[key])
      );

      if (parent.geoObjects && typeof parent.geoObjects.remove === 'function') {
        parent.geoObjects.remove(instance);
      } else if (parent.remove && typeof parent.remove === 'function') {
        parent.remove(instance);
      }

      if (typeof instanceRef === 'function') {
        instanceRef(null);
      }
    }
  }
}

const GeoObjectGeometryPropTypes = PropTypes.shape({
  type: PropTypes.oneOf([
    'Point',
    'LineString',
    'Rectangle',
    'Polygon',
    'Circle',
  ]).isRequired,
  coordinates: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.number),
    PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)),
    PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number))),
  ]).isRequired,
  radius: PropTypes.number,
});

// TODO:
const GeoObjectOptionsPropTypes = PropTypes.shape({});

GeoObject.propTypes = {
  /**
   * GeoObject feature.geometry
   * https://tech.yandex.com/maps/doc/jsapi/2.1/ref/reference/GeoObject-docpage/#param-feature.geometry
   */
  geometry: GeoObjectGeometryPropTypes,
  defaultGeometry: GeoObjectGeometryPropTypes,

  /**
   * GeoObject feature.properties
   * https://tech.yandex.com/maps/doc/jsapi/2.1/ref/reference/GeoObject-docpage/#param-feature.properties
   */
  properties: PropTypes.object,
  defaultProperties: PropTypes.object,

  /**
   * GeoObject options
   * https://tech.yandex.com/maps/doc/jsapi/2.1/ref/reference/GeoObject-docpage/#param-options
   */
  options: GeoObjectOptionsPropTypes,
  defaultOptions: GeoObjectOptionsPropTypes,

  /** ref prop but for Yandex.Maps object instances */
  instanceRef: PropTypes.func,

  /** Yandex.Maps API object */
  ymaps: PropTypes.object,

  /** Parent object (e.g, ymaps.Map or ymaps.Clusterer) */
  parent: PropTypes.object,
};

export default withParentContext(withYMaps(GeoObject, true, ['GeoObject']));
