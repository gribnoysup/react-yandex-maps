import React from 'react';
import PropTypes from 'prop-types';

import { getDisplayName as name } from './util/getDisplayName';
import { omit } from './util/omit';
import { withYMapsContext } from './Context';

export default function withYMaps(Component, waitForApi = false, modules = []) {
  class WithYMaps extends React.Component {
    constructor() {
      super();

      this.state = { loading: true };
      this._isMounted = false;
    }

    componentWillMount() {
      if (this.props.ymaps == null) {
        throw new Error(
          "Couldn't find YMaps in the context. " +
            `Make sure that <${name(Component)} /> is inside <YMapsProvider />`
        );
      }
    }

    componentDidMount() {
      this._isMounted = true;

      this.props.ymaps
        .load()
        .then(api => {
          return Promise.all(
            modules.concat(this.props.modules).map(api.loadModule)
          ).then(() => {
            if (this._isMounted === true) {
              this.setState({ loading: false }, () => {
                this.props.onLoad(api);
              });
            }
          });
        })
        .catch(err => {
          if (this._isMounted === true) {
            this.props.onError(err);
          }
        });
    }

    componentWillUnmount() {
      this._isMounted = false;
    }

    render() {
      const { ymaps } = this.props;
      const { loading } = this.state;
      const shouldRender = waitForApi === false || loading === false;
      const props = omit(this.props, ['onLoad', 'onError', 'modules', 'ymaps']);

      return shouldRender && <Component ymaps={ymaps.api} {...props} />;
    }
  }

  WithYMaps.displayName = `withYMaps(${name(Component)})`;

  WithYMaps.propTypes = {
    onLoad: PropTypes.func,
    onError: PropTypes.func,
    modules: PropTypes.arrayOf(PropTypes.string),
    ymaps: PropTypes.object,
  };

  WithYMaps.defaultProps = {
    onLoad: Function.prototype,
    onError: Function.prototype,
    modules: [],
  };

  return withYMapsContext(WithYMaps);
}
