import React from 'react';
import PropTypes from 'prop-types';

import * as events from '../util/events';
import { getProp, isControlledProp } from '../util/props';
import { withParentContext } from '../Context';
import withYMaps from '../withYMaps';

export class BaseGeoObject extends React.Component {
  constructor() {
    super();
    this.state = { instance: null };
  }

  componentDidMount() {
    const { name, dangerZone, ymaps } = this.props;

    const instance = BaseGeoObject.mountObject(
      dangerZone && dangerZone.modifyConstructor
        ? dangerZone.modifyConstructor(ymaps[name])
        : ymaps[name],
      this.props
    );

    this.setState({ instance });
  }

  componentDidUpdate(prevProps) {
    if (this.state.instance !== null) {
      BaseGeoObject.updateObject(this.state.instance, prevProps, this.props);
    }
  }

  componentWillUnmount() {
    BaseGeoObject.unmountObject(this.state.instance, this.props);
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

    if (
      parent &&
      parent.geoObjects &&
      typeof parent.geoObjects.add === 'function'
    ) {
      parent.geoObjects.add(instance);
    } else if (parent && parent.add && typeof parent.add === 'function') {
      parent.add(instance);
    } else {
      throw new Error(`No parent found to mount ${props.name}`);
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

    if (isControlledProp(newProps, 'geometry')) {
      const oldGeometry = getProp(oldProps, 'geometry', {});
      const newGeometry = getProp(newProps, 'geometry', {});

      if (Array.isArray(newGeometry) && newGeometry !== oldGeometry) {
        if (
          // Circle geometry is a special case
          Array.isArray(newGeometry[0]) &&
          typeof newGeometry[1] === 'number'
        ) {
          instance.geometry.setCoordinates(newGeometry[0]);
          instance.geometry.setRadius(newGeometry[1]);
        } else {
          instance.geometry.setCoordinates(newGeometry);
        }
      } else if (typeof newGeometry === 'object') {
        if (newGeometry.coordinates !== oldGeometry.coordinates) {
          instance.geometry.setCoordinates(newGeometry.coordinates);
        }

        if (newGeometry.radius !== oldGeometry.radius) {
          instance.geometry.setRadius(newGeometry.radius);
        }
      }
    }

    if (isControlledProp(newProps, 'properties')) {
      const oldProperties = getProp(oldProps, 'properties');
      const newProperties = getProp(newProps, 'properties');

      if (oldProperties !== newProperties) {
        instance.properties.set(newProperties);
      }
    }

    if (isControlledProp(newProps, 'options')) {
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
    const { instanceRef, parent, _events } = events.separateEvents(props);

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

if (process.env.NODE_ENV !== 'production') {
  BaseGeoObject.propTypes = {
    /** ref prop but for Yandex.Maps object instances */
    instanceRef: PropTypes.func,

    /** Yandex.Maps API object */
    ymaps: PropTypes.object,

    /** Parent object (e.g, ymaps.Map or ymaps.Clusterer) */
    parent: PropTypes.object,

    /** GeoObject name */
    name: PropTypes.oneOf([
      'GeoObject',
      'Placemark',
      'Polyline',
      'Rectangle',
      'Polygon',
      'Circle',
    ]).isRequired,

    /**
     * Escape hatch to modofy constructor before passing it to `mountObject`
     * This is needed to unify GeoObject with other GeoObjects, use at your own risk
     */
    dangerZone: PropTypes.shape({
      modifyConstructor: PropTypes.func,
    }),
  };
}

export function createGeoObject(name, propTypes, modifyConstructor) {
  const GeoObject = props => (
    <BaseGeoObject
      name={name}
      dangerZone={modifyConstructor ? { modifyConstructor } : void 0}
      {...props}
    />
  );

  if (process.env.NODE_ENV !== 'production') {
    GeoObject.displayName = name;
    GeoObject.propTypes = propTypes;
  }

  return withParentContext(withYMaps(GeoObject, true, [name]));
}
