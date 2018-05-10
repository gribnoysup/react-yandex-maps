import React from 'react';
import PropTypes from 'prop-types';

import { GeoObject } from './GeoObject';
import { withParentContext } from './Context';
import withYMaps from './withYMaps';

export class Placemark extends React.Component {
  constructor() {
    super();
    this.state = { instance: null };
  }

  componentDidMount() {
    const instance = GeoObject.mountObject(
      this.props.ymaps.Placemark,
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

const PlacemarkGeometryPropTypes = PropTypes.arrayOf(PropTypes.number);

const PlacemarkOptionsPropTypes = PropTypes.shape({});

Placemark.propTypes = {
  // Placemark geometry
  // https://tech.yandex.com/maps/doc/jsapi/2.1/ref/reference/Placemark-docpage/#param-geometry
  geometry: PlacemarkGeometryPropTypes,
  defaultGeometry: PlacemarkGeometryPropTypes,

  // Placemark properties
  // https://tech.yandex.com/maps/doc/jsapi/2.1/ref/reference/Placemark-docpage/#param-properties
  properties: PropTypes.object,
  defaultProperties: PropTypes.object,

  // Placemark options
  // https://tech.yandex.com/maps/doc/jsapi/2.1/ref/reference/Placemark-docpage/#param-options
  options: PlacemarkOptionsPropTypes,
  defaultOptions: PlacemarkOptionsPropTypes,

  // ref prop but for YMaps object instances
  instanceRef: PropTypes.func,

  // Yandex Maps API object
  ymaps: PropTypes.object,

  // GeoObject parent object (e.g, ymaps.Map or ymaps.Clusterer)
  parent: PropTypes.object,
};

export default withParentContext(withYMaps(Placemark, true, ['Placemark']));
