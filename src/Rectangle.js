import React from 'react';
import PropTypes from 'prop-types';

import { GeoObject } from './GeoObject';
import { withParentContext } from './Context';
import withYMaps from './withYMaps';

export class Rectangle extends React.Component {
  constructor() {
    super();
    this.state = { instance: null };
  }

  componentDidMount() {
    const instance = GeoObject.mountObject(
      this.props.ymaps.Rectangle,
      this.props
    );

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
}

const RectangleGeometryPropTypes = PropTypes.arrayOf(
  PropTypes.arrayOf(PropTypes.number)
);

const RectangleOptionsPropTypes = PropTypes.shape({});

Rectangle.propTypes = {
  // Rectangle geometry
  // https://tech.yandex.com/maps/doc/jsapi/2.1/ref/reference/Rectangle-docpage/#param-geometry
  geometry: RectangleGeometryPropTypes,
  defaultGeometry: RectangleGeometryPropTypes,

  // Rectangle properties
  // https://tech.yandex.com/maps/doc/jsapi/2.1/ref/reference/Rectangle-docpage/#param-properties
  properties: PropTypes.object,
  defaultProperties: PropTypes.object,

  // Rectangle options
  // https://tech.yandex.com/maps/doc/jsapi/2.1/ref/reference/Rectangle-docpage/#param-options
  options: RectangleOptionsPropTypes,
  defaultOptions: RectangleOptionsPropTypes,

  // ref prop but for YMaps object instances
  instanceRef: PropTypes.func,

  // Yandex Maps API object
  ymaps: PropTypes.object,

  // GeoObject parent object (e.g, ymaps.Map or ymaps.Clusterer)
  parent: PropTypes.object,
};

export default withParentContext(withYMaps(Rectangle, true, ['Rectangle']));
