import React from 'react';
import PropTypes from 'prop-types';

import { withParentContext } from '../Context';
import withYMaps from '../withYMaps';

import { BaseGeoObject } from './BaseGeoObject';

const geoObjectDangerZoneProps = {
  modifyConstructor(Constructor) {
    /**
     * The only difference between GeoObject and all the other,
     * more specific GeoObject constructors (like Placemark, Circle,
     * or Polyline) is the way in which the arguments are passed to
     * the constructor. GeoObject expects `feature` with `geometry` and
     * `properties` keys and all the other GeoObject constructors
     * expect `geometry` and `properties` as separate arguments
     *
     * We will hack around this difference with our custom constructor.
     * That way we can completely reuse GeoObject static methods.
     */
    function GeoObjectConstructor(geometry, properties, options) {
      Constructor.call(this, { geometry, properties }, options);
    }

    GeoObjectConstructor.prototype = Constructor.prototype;

    return GeoObjectConstructor;
  },
};

export function GeoObject(props) {
  return (
    <BaseGeoObject
      {...props}
      name="GeoObject"
      dangerZone={geoObjectDangerZoneProps}
    />
  );
}

if (process.env.NODE_ENV !== 'production') {
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

  GeoObject.propTypes = {
    /**
     * GeoObject [feature.geometry](https://tech.yandex.com/maps/doc/jsapi/2.1/ref/reference/GeoObject-docpage/#param-feature.geometry)
     */
    geometry: GeoObjectGeometryPropTypes,
    /**
     * Uncontrolled GeoObject [feature.geometry](https://tech.yandex.com/maps/doc/jsapi/2.1/ref/reference/GeoObject-docpage/#param-feature.geometry)
     */
    defaultGeometry: GeoObjectGeometryPropTypes,

    /**
     * GeoObject [feature.properties](https://tech.yandex.com/maps/doc/jsapi/2.1/ref/reference/GeoObject-docpage/#param-feature.properties)
     */
    properties: PropTypes.shape({}),
    /**
     * Uncontrolled GeoObject [feature.properties](https://tech.yandex.com/maps/doc/jsapi/2.1/ref/reference/GeoObject-docpage/#param-feature.properties)
     */
    defaultProperties: PropTypes.shape({}),

    /**
     * GeoObject [options](https://tech.yandex.com/maps/doc/jsapi/2.1/ref/reference/GeoObject-docpage/#param-options)
     */
    options: PropTypes.shape({}),
    /**
     * Uncontrolled GeoObject [options](https://tech.yandex.com/maps/doc/jsapi/2.1/ref/reference/GeoObject-docpage/#param-options)
     */
    defaultOptions: PropTypes.shape({}),
  };
}

export default withParentContext(withYMaps(GeoObject, true, ['GeoObject']));
