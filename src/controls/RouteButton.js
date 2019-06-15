import React from 'react';
import PropTypes from 'prop-types';

import { withParentContext } from '../Context';
import withYMaps from '../withYMaps';

import { BaseControl } from './BaseControl';

export function RouteButton(props) {
  return <BaseControl {...props} name="RouteButton" />;
}

if (process.env.NODE_ENV !== 'production') {
  RouteButton.propTypes = {
    /**
     * Control [data](https://tech.yandex.com/maps/doc/jsapi/2.1/ref/reference/control.RouteButton-docpage/#control.RouteButton__param-parameters.data)
     */
    data: PropTypes.shape({}),
    /**
     * Uncontrolled control [data](https://tech.yandex.com/maps/doc/jsapi/2.1/ref/reference/control.RouteButton-docpage/#control.RouteButton__param-parameters.data)
     */
    defaultData: PropTypes.shape({}),

    /**
     * Control [options](https://tech.yandex.com/maps/doc/jsapi/2.1/ref/reference/control.RouteButton-docpage/#control.RouteButton__param-parameters.options)
     */
    options: PropTypes.shape({}),
    /**
     * Uncontrolled control [options](https://tech.yandex.com/maps/doc/jsapi/2.1/ref/reference/control.RouteButton-docpage/#control.RouteButton__param-parameters.options)
     */
    defaultOptions: PropTypes.shape({}),

    /**
     * Control [state](https://tech.yandex.com/maps/doc/jsapi/2.1/ref/reference/control.RouteButton-docpage/#control.RouteButton__param-parameters.state)
     */
    state: PropTypes.shape({}),
    /**
     * Uncontrolled control [state](https://tech.yandex.com/maps/doc/jsapi/2.1/ref/reference/control.RouteButton-docpage/#control.RouteButton__param-parameters.state)
     */
    defaultState: PropTypes.shape({}),
  };
}

export default withParentContext(
  withYMaps(RouteButton, true, [`control.RouteButton`])
);
