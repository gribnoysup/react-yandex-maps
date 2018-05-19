import React from 'react';
import PropTypes from 'prop-types';

import { GeoObject } from './GeoObject';
import { withParentContext } from './Context';
import withYMaps from './withYMaps';

export class Polyline extends React.Component {
  constructor() {
    super();
    this.state = { instance: null };
  }

  componentDidMount() {
    const instance = GeoObject.mountObject(
      this.props.ymaps.Polyline,
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

const PolylineGeometryPropTypes = PropTypes.arrayOf(
  PropTypes.arrayOf(PropTypes.number)
);

const PolylineOptionsPropTypes = PropTypes.shape({});

Polyline.propTypes = {
  // Polyline geometry
  // https://tech.yandex.com/maps/doc/jsapi/2.1/ref/reference/Polyline-docpage/#param-geometry
  geometry: PolylineGeometryPropTypes,
  defaultGeometry: PolylineGeometryPropTypes,

  // Polyline properties
  // https://tech.yandex.com/maps/doc/jsapi/2.1/ref/reference/Polyline-docpage/#param-properties
  properties: PropTypes.object,
  defaultProperties: PropTypes.object,

  // Polyline options
  // https://tech.yandex.com/maps/doc/jsapi/2.1/ref/reference/Polyline-docpage/#param-options
  options: PolylineOptionsPropTypes,
  defaultOptions: PolylineOptionsPropTypes,

  // ref prop but for YMaps object instances
  instanceRef: PropTypes.func,

  // Yandex.Maps API object
  ymaps: PropTypes.object,

  // GeoObject parent object (e.g, ymaps.Map or ymaps.Clusterer)
  parent: PropTypes.object,
};

export default withParentContext(withYMaps(Polyline, true, ['Polyline']));
