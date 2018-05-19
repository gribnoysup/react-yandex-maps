import React from 'react';
import PropTypes from 'prop-types';

import { GeoObject } from './GeoObject';
import { withParentContext } from './Context';
import withYMaps from './withYMaps';

export class Polygon extends React.Component {
  constructor() {
    super();
    this.state = { instance: null };
  }

  componentDidMount() {
    const instance = GeoObject.mountObject(
      this.props.ymaps.Polygon,
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

const PolygonGeometryPropTypes = PropTypes.arrayOf(
  PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number))
);

const PolygonOptionsPropTypes = PropTypes.shape({});

Polygon.propTypes = {
  // Polygon geometry
  // https://tech.yandex.com/maps/doc/jsapi/2.1/ref/reference/Polygon-docpage/#param-geometry
  geometry: PolygonGeometryPropTypes,
  defaultGeometry: PolygonGeometryPropTypes,

  // Polygon properties
  // https://tech.yandex.com/maps/doc/jsapi/2.1/ref/reference/Polygon-docpage/#param-properties
  properties: PropTypes.object,
  defaultProperties: PropTypes.object,

  // Polygon options
  // https://tech.yandex.com/maps/doc/jsapi/2.1/ref/reference/Polygon-docpage/#param-options
  options: PolygonOptionsPropTypes,
  defaultOptions: PolygonOptionsPropTypes,

  // ref prop but for YMaps object instances
  instanceRef: PropTypes.func,

  // Yandex.Maps API object
  ymaps: PropTypes.object,

  // GeoObject parent object (e.g, ymaps.Map or ymaps.Clusterer)
  parent: PropTypes.object,
};

export default withParentContext(withYMaps(Polygon, true, ['Polygon']));
