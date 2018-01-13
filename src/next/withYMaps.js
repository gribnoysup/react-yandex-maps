import React from 'react';
import PropTypes from 'prop-types';

import { getDisplayName } from './util/getDisplayName';

export function withYMaps(Component) {
  return class extends React.Component {
    static displayName = `withYMaps(${getDisplayName(Component)})`;

    static prpoTypes = {
      onLoad: PropTypes.func,
      onError: PropTypes.func,
    };

    static defaultProps = {
      onLoad: Function.prototype,
      onError: Function.prototype,
    };

    static contextTypes = {
      ymaps: PropTypes.object,
    };

    _isMounted = true;

    _unsubscribe = null;

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
      const { onLoad, onError, ...props } = this.props;
      return <Component {...props} ymaps={this.context.ymaps.api} />;
    }
  };
}
