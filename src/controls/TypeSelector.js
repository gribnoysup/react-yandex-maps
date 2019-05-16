import PropTypes from 'prop-types';

import { withParentContext } from '../Context';
import withYMaps from '../withYMaps';

import { BaseControl } from './BaseControl';

export class TypeSelector extends BaseControl {
  render() {
    /**
     * Tricking `react-docgen` into thinking that this
     * is a React component (it is, but it's hard to
     * convince `react-docgen` when you have hocs 🙄)
     */
    return super.render();
  }
}

TypeSelector.defaultProps = {
  name: 'TypeSelector',
};

if (process.env.NODE_ENV !== 'production') {
  TypeSelector.propTypes = {
    /**
     * [Array of constructors for map types](https://tech.yandex.com/maps/doc/jsapi/2.1/ref/reference/control.TypeSelector-docpage/#control.TypeSelector__param-parameters.mapTypes) or keys. If the parameter is omitted, the item is added to the standard set of map types.
     */
    mapTypes: PropTypes.arrayOf(
      PropTypes.oneOf(['yandex#map', 'yandex#satellite', 'yandex#hybrid'])
    ),
    /**
     * Uncontroled [array of constructors for map types](https://tech.yandex.com/maps/doc/jsapi/2.1/ref/reference/control.TypeSelector-docpage/#control.TypeSelector__param-parameters.mapTypes) or keys. If the parameter is omitted, the item is added to the standard set of map types.
     */
    defaultMapTypes: PropTypes.arrayOf(
      PropTypes.oneOf(['yandex#map', 'yandex#satellite', 'yandex#hybrid'])
    ),

    /**
     * Control [options](https://tech.yandex.com/maps/doc/jsapi/2.1/ref/reference/control.TypeSelector-docpage/#control.TypeSelector__param-parameters.options)
     */
    options: PropTypes.shape({}),
    /**
     * Uncontrolled control [options](https://tech.yandex.com/maps/doc/jsapi/2.1/ref/reference/control.TypeSelector-docpage/#control.TypeSelector__param-parameters.options)
     */
    defaultOptions: PropTypes.shape({}),

    /**
     * Control [state](https://tech.yandex.com/maps/doc/jsapi/2.1/ref/reference/control.TypeSelector-docpage/#control.TypeSelector__param-parameters.state)
     */
    state: PropTypes.shape({}),
    /**
     * Uncontrolled control [state](https://tech.yandex.com/maps/doc/jsapi/2.1/ref/reference/control.TypeSelector-docpage/#control.TypeSelector__param-parameters.state)
     */
    defaultState: PropTypes.shape({}),
  };
}

export default withParentContext(
  withYMaps(TypeSelector, true, [`control.TypeSelector`])
);
