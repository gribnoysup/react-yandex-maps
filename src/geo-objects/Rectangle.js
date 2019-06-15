import React from 'react';
import PropTypes from 'prop-types';

import { withParentContext } from '../Context';
import withYMaps from '../withYMaps';

import { BaseGeoObject } from './BaseGeoObject';

export function Rectangle(props) {
  return <BaseGeoObject {...props} name="Rectangle" />;
}

if (process.env.NODE_ENV !== 'production') {
  const RectangleGeometryPropTypes = PropTypes.arrayOf(
    PropTypes.arrayOf(PropTypes.number)
  );

  Rectangle.propTypes = {
    /**
     * Rectangle [geometry](https://tech.yandex.com/maps/doc/jsapi/2.1/ref/reference/Rectangle-docpage/#param-geometry)
     */
    geometry: RectangleGeometryPropTypes,
    /**
     * Uncontrolled Rectangle [geometry](https://tech.yandex.com/maps/doc/jsapi/2.1/ref/reference/Rectangle-docpage/#param-geometry)
     */
    defaultGeometry: RectangleGeometryPropTypes,

    /**
     * Rectangle [properties](https://tech.yandex.com/maps/doc/jsapi/2.1/ref/reference/Rectangle-docpage/#param-properties)
     */
    properties: PropTypes.shape({}),
    /**
     * Uncontrolled Rectangle [properties](https://tech.yandex.com/maps/doc/jsapi/2.1/ref/reference/Rectangle-docpage/#param-properties)
     */
    defaultProperties: PropTypes.shape({}),

    /**
     * Rectangle [options](https://tech.yandex.com/maps/doc/jsapi/2.1/ref/reference/Rectangle-docpage/#param-options)
     */
    options: PropTypes.shape({}),
    /**
     * Uncontrolled Rectangle [options](https://tech.yandex.com/maps/doc/jsapi/2.1/ref/reference/Rectangle-docpage/#param-options)
     */
    defaultOptions: PropTypes.shape({}),
  };
}

export default withParentContext(withYMaps(Rectangle, true, ['Rectangle']));
