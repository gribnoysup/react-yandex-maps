// TODO: hoist statics and all this HOC stuff

import React from 'react';
import PropTypes from 'prop-types';

import { getDisplayName } from './util/getDisplayName';

import { omit } from './util/omit';

export function withYMaps(Component, waitForApi = false) {
  class WithYMaps extends React.Component {
    constructor() {
      super();

      this._isMounted = true;
      this._unsubscribe = null;
    }

    componentDidMount() {
      if (this.context.ymaps.api === null) {
        this._unsubscribe = this.context.ymaps.subscribe(() => {
          if (this._isMounted === true) {
            this._unsubscribe();
            this.forceUpdate();
          }
        });

        this.context.ymaps
          .load()
          .then(api => {
            if (this._isMounted === true) {
              this.context.ymaps.update();
              this.props.onLoad(api);
            }
          })
          .catch(err => {
            if (this._isMounted === true) {
              this.props.onError(err);
            }
          });
      }
    }

    componentWillUnmount() {
      if (typeof this._unsubscribe === 'function') {
        this._unsubscribe();
      }
      this._isMounted = false;
    }

    render() {
      // eslint-disable-next-line no-unused-vars
      const { onLoad, onError } = this.props;
      const { api } = this.context.ymaps;

      const shouldRender = waitForApi === false || api !== null;

      return (
        shouldRender &&
        React.createElement(
          Component,
          Object.assign({ ymaps: api }, omit(this.props, ['onLoad', 'onError']))
        )
      );
    }
  }

  WithYMaps.displayName = `withYMaps(${getDisplayName(Component)})`;

  WithYMaps.propTypes = {
    onLoad: PropTypes.func,
    onError: PropTypes.func,
  };

  WithYMaps.defaultProps = {
    onLoad: Function.prototype,
    onError: Function.prototype,
  };

  WithYMaps.contextTypes = {
    ymaps: PropTypes.object,
  };

  return WithYMaps;
}
