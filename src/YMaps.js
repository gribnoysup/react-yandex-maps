import React from 'react';
import PropTypes from 'prop-types';

import invariant from 'invariant';

import YandexMapsApi from './util/api';

const { node, bool, shape, string, oneOf, object, func } = PropTypes;

export class YMaps extends React.Component {
  static propTypes = {
    children: node,
    onApiAvaliable: func,

    enterprise: bool,
    version: oneOf(['1.0', '1.1', '2.0', '2.1']),

    query: shape({
      lang: string,
      apiKey: string,
      coordorder: oneOf(['latlong', 'longlat']),
      load: string,
      mode: oneOf(['debug', 'release']),
      csp: bool,
      ns: string,
    }),
  };

  static defaultProps = {
    enterprise: false,
    onApiAvaliable: Function.prototype,
    version: '2.1',
  };

  static childContextTypes = {
    ymaps: object,
  };

  getChildContext() {
    return { ymaps: this.state.ymaps };
  }

  constructor(...args) {
    super(...args);
    this.state = { ymaps: null };
  }

  componentDidMount() {
    const { query, version, enterprise, onApiAvaliable } = this.props;

    YandexMapsApi.get(query, version, enterprise).then(ymaps => {
      onApiAvaliable(ymaps);
      this.setState({ ymaps });
    });
  }

  componentWillMount() {
    const { children } = this.props;

    invariant(
      children == null || React.Children.count(children) === 1,
      'A <YMaps> may have only one child element'
    );
  }

  render() {
    const { children } = this.props;
    return children ? React.Children.only(children) : null;
  }
}
