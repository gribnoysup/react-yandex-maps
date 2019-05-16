import PropTypes from 'prop-types';

import { withParentContext } from '../Context';
import withYMaps from '../withYMaps';

import { BaseControl } from './BaseControl';

export class ListBoxItem extends BaseControl {
  render() {
    /**
     * Tricking `react-docgen` into thinking that this
     * is a React component (it is, but it's hard to
     * convince `react-docgen` when you have hocs 🙄)
     */
    return super.render();
  }
}

ListBoxItem.defaultProps = {
  name: 'ListBoxItem',
};

if (process.env.NODE_ENV !== 'production') {
  ListBoxItem.propTypes = {
    /**
     * Control [data](https://tech.yandex.com/maps/doc/jsapi/2.1/ref/reference/control.ListBoxItem-docpage/#control.ListBoxItem__param-parameters.data)
     */
    data: PropTypes.shape({}),
    /**
     * Uncontrolled control [data](https://tech.yandex.com/maps/doc/jsapi/2.1/ref/reference/control.ListBoxItem-docpage/#control.ListBoxItem__param-parameters.data)
     */
    defaultData: PropTypes.shape({}),

    /**
     * Control [options](https://tech.yandex.com/maps/doc/jsapi/2.1/ref/reference/control.ListBoxItem-docpage/#control.ListBoxItem__param-parameters.options)
     */
    options: PropTypes.shape({}),
    /**
     * Uncontrolled control [options](https://tech.yandex.com/maps/doc/jsapi/2.1/ref/reference/control.ListBoxItem-docpage/#control.ListBoxItem__param-parameters.options)
     */
    defaultOptions: PropTypes.shape({}),

    /**
     * Control [state](https://tech.yandex.com/maps/doc/jsapi/2.1/ref/reference/control.ListBoxItem-docpage/#control.ListBoxItem__param-parameters.state)
     */
    state: PropTypes.shape({}),
    /**
     * Uncontrolled control [state](https://tech.yandex.com/maps/doc/jsapi/2.1/ref/reference/control.ListBoxItem-docpage/#control.ListBoxItem__param-parameters.state)
     */
    defaultState: PropTypes.shape({}),
  };
}

export default withParentContext(
  withYMaps(ListBoxItem, true, [`control.ListBoxItem`])
);
