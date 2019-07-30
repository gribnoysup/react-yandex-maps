import React from 'react';
import PropTypes from 'prop-types';
import { getProp, isControlledProp } from './util/props';
import withYMaps from './withYMaps';
import * as events from './util/events';
import applyRef from './util/ref';
import { withParentContext } from './Context';

export class Route extends React.Component {
  constructor() {
    super();
    this.state = { instance: null };
  }

  componentDidMount() {
    Route.mountObject(this.props.ymaps.route, this.props).then(instance =>
      this.setState({ instance })
    );
  }

  componentDidUpdate(prevProps) {
    if (this.state.instance !== null) {
      Route.updateObject(this.state.instance, prevProps, this.props);
    }
  }

  componentWillUnmount() {
    Route.unmountObject(this.state.instance, this.props);
  }

  render() {
    return null;
  }

  static mountObject(Route, props) {
    const { instanceRef, parent, _events } = events.separateEvents(props);

    const points = getProp(props, 'points');
    const params = getProp(props, 'params');

    return new Promise((resolve, reject) => {
      Route(points, params).then(instance => {
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

        Object.keys(_events).forEach(key =>
          events.addEvent(instance, key, _events[key])
        );

        resolve(instance);
      }, reject);
    });
  }

  static updateObject(instance, oldProps, newProps) {
    const { _events: newEvents, instanceRef } = events.separateEvents(newProps);
    const { _events: oldEvents, instanceRef: oldRef } = events.separateEvents(
      oldProps
    );

    if (isControlledProp(newProps, 'params')) {
      const oldOptions = getProp(oldProps, 'params');
      const newOptions = getProp(newProps, 'params');

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
  Route.propTypes = {
    /**
     * The points for draw route
     */
    points: PropTypes.arrayOf(
      PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.number),
        PropTypes.shape({
          type: PropTypes.oneOf(['wayPoint', 'viaPoint']),
          point: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.arrayOf(PropTypes.number),
          ]),
        }),
      ])
    ),

    /**
     * Route [params](https://tech.yandex.ru/maps/jsapi/doc/2.1/ref/reference/route-docpage/#route__param-params)
     */
    params: PropTypes.shape({}),

    /**
     * YMaps object ref
     */
    instanceRef: PropTypes.func,

    ymaps: PropTypes.object,
  };
}

export default withParentContext(withYMaps(Route, true, ['route']));
