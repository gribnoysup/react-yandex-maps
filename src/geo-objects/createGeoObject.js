import React from 'react';
import PropTypes from 'prop-types';

import { GeoObject as BaseGeoObject } from './GeoObject';
import { withParentContext } from '../Context';
import withYMaps from '../withYMaps';

export function createGeoObject(name, propTypes) {
  class GeoObject extends React.Component {
    constructor() {
      super();
      this.state = { instance: null };
    }

    componentDidMount() {
      const instance = BaseGeoObject.mountObject(
        // eslint-disable-next-line react/prop-types
        this.props.ymaps[name],
        this.props
      );

      this.setState({ instance });
    }

    componentDidUpdate(prevProps) {
      if (this.state.instance !== null) {
        BaseGeoObject.updateObject(this.state.instance, prevProps, this.props);
      }
    }

    componentWillUnmount() {
      BaseGeoObject.unmountObject(this.state.instance, this.props);
    }

    render() {
      return null;
    }
  }

  GeoObject.propTypes = Object.assign(
    {
      /** ref prop but for Yandex.Maps object instances */
      instanceRef: PropTypes.func,

      /** Yandex.Maps API object */
      ymaps: PropTypes.object,

      /** Parent object (e.g, ymaps.Map or ymaps.Clusterer) */
      parent: PropTypes.object,
    },
    propTypes
  );

  GeoObject.displayName = name;

  return withParentContext(withYMaps(GeoObject, true, [name]));
}
