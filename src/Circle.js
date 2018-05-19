import React from 'react';
import PropTypes from 'prop-types';

import { GeoObject } from './GeoObject';
import { withParentContext } from './Context';
import withYMaps from './withYMaps';

export class Circle extends React.Component {
  constructor() {
    super();
    this.state = { instance: null };
  }

  componentDidMount() {
    const instance = GeoObject.mountObject(this.props.ymaps.Circle, this.props);

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

const CircleGeometryPropTypes = PropTypes.arrayOf(
  PropTypes.oneOfType([PropTypes.number, PropTypes.arrayOf(PropTypes.number)])
);

const CircleOptionsPropTypes = PropTypes.shape({});

Circle.propTypes = {
  // Circle geometry
  // https://tech.yandex.com/maps/doc/jsapi/2.1/ref/reference/Circle-docpage/#param-geometry
  geometry: CircleGeometryPropTypes,
  defaultGeometry: CircleGeometryPropTypes,

  // Circle properties
  // https://tech.yandex.com/maps/doc/jsapi/2.1/ref/reference/Circle-docpage/#param-properties
  properties: PropTypes.object,
  defaultProperties: PropTypes.object,

  // Circle options
  // https://tech.yandex.com/maps/doc/jsapi/2.1/ref/reference/Circle-docpage/#param-options
  options: CircleOptionsPropTypes,
  defaultOptions: CircleOptionsPropTypes,

  // ref prop but for YMaps object instances
  instanceRef: PropTypes.func,

  // Yandex.Maps API object
  ymaps: PropTypes.object,

  // GeoObject parent object (e.g, ymaps.Map or ymaps.Clusterer)
  parent: PropTypes.object,
};

export default withParentContext(withYMaps(Circle, true, ['Circle']));
