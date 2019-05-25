import React from 'react';
import PropTypes from 'prop-types';

import { withParentContext } from '../Context';
import withYMaps from '../withYMaps';

import { BaseGeoObject } from './BaseGeoObject';

export function Circle(props) {
  return <BaseGeoObject {...props} name="Circle" />;
}

if (process.env.NODE_ENV !== 'production') {
  const CircleGeometryPropTypes = PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.number, PropTypes.arrayOf(PropTypes.number)])
  );

  Circle.propTypes = {
    /**
     * Circle [geometry](https://tech.yandex.com/maps/doc/jsapi/2.1/ref/reference/Circle-docpage/#param-geometry)
     */
    geometry: CircleGeometryPropTypes,
    /**
     * Uncontrolled circle [geometry](https://tech.yandex.com/maps/doc/jsapi/2.1/ref/reference/Circle-docpage/#param-geometry)
     */
    defaultGeometry: CircleGeometryPropTypes,

    /**
     * Circle [properties](https://tech.yandex.com/maps/doc/jsapi/2.1/ref/reference/Circle-docpage/#param-properties)
     */
    properties: PropTypes.shape({}),
    /**
     * Uncontrolled circle [properties](https://tech.yandex.com/maps/doc/jsapi/2.1/ref/reference/Circle-docpage/#param-properties)
     */
    defaultProperties: PropTypes.shape({}),

    /**
     * Circle [options](https://tech.yandex.com/maps/doc/jsapi/2.1/ref/reference/Circle-docpage/#param-options)
     */
    options: PropTypes.shape({}),
    /**
     * Uncontrolled circle [options](https://tech.yandex.com/maps/doc/jsapi/2.1/ref/reference/Circle-docpage/#param-options)
     */
    defaultOptions: PropTypes.shape({}),
  };
}

export default withParentContext(withYMaps(Circle, true, ['Circle']));
