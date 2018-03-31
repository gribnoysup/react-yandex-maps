import React from 'react';
import PropTypes from 'prop-types';

import { YMaps } from './YMaps';

export class YMapsProvider extends React.Component {
  constructor(props) {
    super(props);
    this.ymaps = new YMaps(this.props);
  }

  getChildContext() {
    return {
      ymaps: this.ymaps,
    };
  }

  componentDidMount() {
    if (this.props.preload === true) {
      this.ymaps.load();
    }
  }

  render() {
    return this.props.children && React.Children.only(this.props.children);
  }
}

YMapsProvider.propTypes = {
  version: PropTypes.string.isRequired,
  enterprise: PropTypes.bool,

  // Yandex.Maps API avaliable query params
  // https://tech.yandex.com/maps/doc/jsapi/2.1/dg/concepts/load-docpage/
  // Some query params will be omitted in any case because they are used
  // by the library: onload, onerror
  query: PropTypes.shape({
    lang: PropTypes.oneOf([
      'tr_TR',
      'en_US',
      'en_RU',
      'ru_RU',
      'ru_UA',
      'uk_UA',
    ]),
    apikey: PropTypes.string,
    coordorder: PropTypes.oneOf(['latlong', 'longlat']),
    load: PropTypes.string,
    mode: PropTypes.oneOf(['release', 'debug']),
    csp: PropTypes.bool,
    ns: PropTypes.string,
  }),

  children: PropTypes.node,

  // Allows provider to preload Yandex Maps API even if
  // there are no map components on the page
  preload: PropTypes.bool,
};

YMapsProvider.defaultProps = {
  version: '2.1',
  enterprise: false,
  query: {
    lang: 'ru_RU',
    load: '',
    ns: '',
  },
  preload: false,
};

YMapsProvider.childContextTypes = {
  ymaps: PropTypes.object,
};
