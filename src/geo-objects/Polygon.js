import React from 'react';
import PropTypes from 'prop-types';

import { withParentContext } from '../Context';
import withYMaps from '../withYMaps';

import { BaseGeoObject } from './BaseGeoObject';

export function Polygon(props) {
  return <BaseGeoObject {...props} name="Polygon" />;
}

if (process.env.NODE_ENV !== 'production') {
  const PolygonGeometryPropTypes = PropTypes.arrayOf(
    PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number))
  );

  Polygon.propTypes = {
    /**
     * Polygon [geometry](https://tech.yandex.com/maps/doc/jsapi/2.1/ref/reference/Polygon-docpage/#param-geometry)
     */
    geometry: PolygonGeometryPropTypes,
    /**
     * Uncontrolled Polygon [geometry](https://tech.yandex.com/maps/doc/jsapi/2.1/ref/reference/Polygon-docpage/#param-geometry)
     */
    defaultGeometry: PolygonGeometryPropTypes,

    /**
     * Polygon [properties](https://tech.yandex.com/maps/doc/jsapi/2.1/ref/reference/Polygon-docpage/#param-properties)
     */
    properties: PropTypes.shape({}),
    /**
     * Uncontrolled Polygon [properties](https://tech.yandex.com/maps/doc/jsapi/2.1/ref/reference/Polygon-docpage/#param-properties)
     */
    defaultProperties: PropTypes.shape({}),

    /**
     * Polygon [options](https://tech.yandex.com/maps/doc/jsapi/2.1/ref/reference/Polygon-docpage/#param-options)
     */
    options: PropTypes.shape({}),
    /**
     * Uncontrolled Polygon [options](https://tech.yandex.com/maps/doc/jsapi/2.1/ref/reference/Polygon-docpage/#param-options)
     */
    defaultOptions: PropTypes.shape({}),
  };
}

export default withParentContext(withYMaps(Polygon, true, ['Polygon']));
