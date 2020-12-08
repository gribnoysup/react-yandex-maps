import React from 'react';
import PropTypes from 'prop-types';
import { getProp, isControlledProp } from './util/props';
import withYMaps from './withYMaps';
import * as events from './util/events';
import applyRef from './util/ref';
import { withParentContext } from './Context';

export class MultiRoute extends React.Component {
  constructor() {
    super();
    this.state = { instance: null };
  }

  componentDidMount() {
    const instance = MultiRoute.mountObject(
      this.props.ymaps.multiRouter.MultiRoute,
      this.props
    );

    this.setState({ instance });
  }

  componentDidUpdate(prevProps) {
    if (this.state.instance !== null) {
      MultiRoute.updateObject(this.state.instance, prevProps, this.props);
    }
  }

  componentWillUnmount() {
    MultiRoute.unmountObject(this.state.instance, this.props);
  }

  render() {
    return null;
  }

  static mountObject(MultiRoute, props) {
    const { instanceRef, parent, _events } = events.separateEvents(props);

    const referencePoints = getProp(props, 'referencePoints');
    const params = getProp(props, 'params');
    const options = getProp(props, 'options');

    const instance = new MultiRoute(
      {
        referencePoints,
        params,
      },
      options
    );

    Object.keys(_events).forEach(key =>
      events.addEvent(instance, key, _events[key])
    );

    if (
      parent &&
      parent.geoObjects &&
      typeof parent.geoObjects.add === 'function'
    ) {
      parent.geoObjects.add(instance);
    } else {
      throw new Error(`No parent found to mount ${props.name}`);
    }

    applyRef(null, instanceRef, instance);

    return instance;
  }

  static updateObject(instance, oldProps, newProps) {
    const { _events: newEvents, instanceRef } = events.separateEvents(newProps);
    const { _events: oldEvents, instanceRef: oldRef } = events.separateEvents(
      oldProps
    );

    if (isControlledProp(newProps, 'referencePoints')) {
      const oldData = getProp(oldProps, 'referencePoints');
      const newData = getProp(newProps, 'referencePoints');

      if (oldData !== newData) {
        instance.model.setReferencePoints(newData);
      }
    }

    if (isControlledProp(newProps, 'params')) {
      const oldOptions = getProp(oldProps, 'params');
      const newOptions = getProp(newProps, 'params');

      if (oldOptions !== newOptions) {
        instance.model.setParams(newOptions);
      }
    }

    if (isControlledProp(newProps, 'options')) {
      const oldOptions = getProp(oldProps, 'options');
      const newOptions = getProp(newProps, 'options');

      if (oldOptions !== newOptions) {
        instance.options.set(newOptions);
      }
    }

    events.updateEvents(instance, oldEvents, newEvents);

    applyRef(oldRef, instanceRef, instance);
  }

  static unmountObject(instance, props) {
    const { instanceRef, _events } = events.separateEvents(props);

    if (instance !== null) {
      Object.keys(_events).forEach(key =>
        events.removeEvent(instance, key, _events[key])
      );

      // Clean used ref
      applyRef(instanceRef);
    }
  }
}

if (process.env.NODE_ENV !== 'production') {
  MultiRoute.propTypes = {
    /**
     * The points for draw route
     */
    referencePoints: PropTypes.arrayOf(
      PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.number),
      ])
    ),

    /**
     * Route [params](https://tech.yandex.ru/maps/jsapi/doc/2.1/ref/reference/IMultiRouteParams-docpage/)
     */
    params: PropTypes.shape({}),

    /**
     * Route [options](https://tech.yandex.ru/maps/jsapi/doc/2.1/ref/reference/multiRouter.MultiRoute-docpage/#multiRouter.MultiRoute__param-options)
     */
    options: PropTypes.shape({}),

    /**
     * YMaps object ref
     */
    instanceRef: PropTypes.func,

    ymaps: PropTypes.object,
  };
}

export default withParentContext(
  withYMaps(MultiRoute, true, [
    'multiRouter.MultiRoute',
    'multiRouter.MultiRouteModel',
  ])
);
