import React from 'react';
import PropTypes from 'prop-types';

import { withParentContext } from '../Context';
import withYMaps from '../withYMaps';

import { BaseGeoObject } from './BaseGeoObject';

export function Polyline(props) {
  return <BaseGeoObject {...props} name="Polyline" />;
}

if (process.env.NODE_ENV !== 'production') {
  const PolylineGeometryPropTypes = PropTypes.arrayOf(
    PropTypes.arrayOf(PropTypes.number)
  );

  Polyline.propTypes = {
    /**
     * Polyline [geometry](https://tech.yandex.com/maps/doc/jsapi/2.1/ref/reference/Polyline-docpage/#param-geometry)
     */
    geometry: PolylineGeometryPropTypes,
    /**
     * Uncontrolled Polyline [geometry](https://tech.yandex.com/maps/doc/jsapi/2.1/ref/reference/Polyline-docpage/#param-geometry)
     */
    defaultGeometry: PolylineGeometryPropTypes,

    /**
     * Polyline [properties](https://tech.yandex.com/maps/doc/jsapi/2.1/ref/reference/Polyline-docpage/#param-properties)
     */
    properties: PropTypes.shape({}),
    /**
     * Uncontrolled Polyline [properties](https://tech.yandex.com/maps/doc/jsapi/2.1/ref/reference/Polyline-docpage/#param-properties)
     */
    defaultProperties: PropTypes.shape({}),

    /**
     * Polyline [options](https://tech.yandex.com/maps/doc/jsapi/2.1/ref/reference/Polyline-docpage/#param-options)
     */
    options: PropTypes.shape({}),
    /**
     * Uncontrolled Polyline [options](https://tech.yandex.com/maps/doc/jsapi/2.1/ref/reference/Polyline-docpage/#param-options)
     */
    defaultOptions: PropTypes.shape({}),
  };
}

export default withParentContext(withYMaps(Polyline, true, ['Polyline']));
