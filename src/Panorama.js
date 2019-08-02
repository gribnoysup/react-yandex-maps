import React from 'react';
import PropTypes from 'prop-types';
import { getProp, isControlledProp } from './util/props';
import withYMaps from './withYMaps';
import * as events from './util/events';
import applyRef from './util/ref';
import getParentElementSize from './util/getParentElementSize';

export class Panorama extends React.Component {
  constructor() {
    super();
    this.state = { instance: null };
    this._parentElement = null;
    this._getRef = ref => {
      this._parentElement = ref;
    };
  }

  componentDidMount() {
    this._mounted = true;

    if (!this.props.ymaps.panorama.isSupported()) {
      return;
    }

    Panorama.mountObject(
      this._parentElement,
      this.props.ymaps.panorama,
      this.props
    ).then(instance => this._mounted && this.setState({ instance }));
  }

  componentDidUpdate(prevProps) {
    if (this.state.instance !== null) {
      Panorama.updateObject(this.state.instance, prevProps, this.props);
    }
  }

  componentWillUnmount() {
    this._mounted = false;
    Panorama.unmountObject(this.state.instance, this.props);
  }

  render() {
    const parentElementStyle = getParentElementSize(this.props);

    return <div ref={this._getRef} {...parentElementStyle} />;
  }

  static mountObject(parentElement, panorama, props) {
    const { instanceRef, _events } = events.separateEvents(props);

    const point = getProp(props, 'point');
    const locateOptions = getProp(props, 'locateOptions');
    const options = getProp(props, 'options');

    return new Promise((resolve, reject) => {
      panorama.locate(point, locateOptions).done(panoramas => {
        if (panoramas.length > 0) {
          const instance = new panorama.Player(
            parentElement,
            panoramas[0],
            options
          );

          applyRef(null, instanceRef, instance);

          Object.keys(_events).forEach(key =>
            events.addEvent(instance, key, _events[key])
          );

          resolve(instance);
        }
      }, reject);
    });
  }

  static updateObject(instance, oldProps, newProps) {
    const { _events: newEvents, instanceRef } = events.separateEvents(newProps);
    const { _events: oldEvents, instanceRef: oldRef } = events.separateEvents(
      oldProps
    );

    if (isControlledProp(newProps, 'options')) {
      const oldOptions = getProp(oldProps, 'options');
      const newOptions = getProp(newProps, 'options');

      if (oldOptions !== newOptions) {
        instance.options.set(newOptions);
      }
    }

    if (isControlledProp(newProps, 'point')) {
      const point = getProp(newProps, 'point');
      const oldPoint = getProp(oldProps, 'point');
      const locateOptions = getProp(newProps, 'locateOptions');

      if (point !== oldPoint) {
        instance.moveTo(point, locateOptions);
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
  const PanoramaOptionsPropTypes = {};

  Panorama.propTypes = {
    /**
     * [Panorama options](https://tech.yandex.com/maps/doc/jsapi/2.1/ref/reference/panorama.Player-docpage/#panorama.Player__param-options)
     */
    options: PropTypes.shape(PanoramaOptionsPropTypes),
    /**
     * Uncontrolled [Panorama options](https://tech.yandex.com/maps/doc/jsapi/2.1/ref/reference/panorama.Player-docpage/#panorama.Player__param-options)
     */
    defaultOptions: PropTypes.shape(PanoramaOptionsPropTypes),

    /**
     * The point for searching for nearby panoramas.
     */
    point: PropTypes.arrayOf(PropTypes.number),
    /**
     * Uncontrolled point for searching for nearby panoramas.
     */
    defaultPoint: PropTypes.arrayOf(PropTypes.number),

    /**
     * Panorama [locate options](https://tech.yandex.com/maps/doc/jsapi/2.1/ref/reference/panorama.locate-docpage/#panorama.locate__param-options)
     */
    locateOptions: PropTypes.shape({
      layer: PropTypes.oneOf(['yandex#panorama', 'yandex#airPanorama']),
    }),

    /**
     * YMaps object ref
     */
    instanceRef: PropTypes.func,

    ymaps: PropTypes.object,

    children: PropTypes.node,

    /**
     * Yandex.Maps Panorama parent element should have at least
     * some size set to it, otherwise the panorama is rendered
     * into the container with size 0
     *
     * To avoid this we will use `width` and `height` props as default
     * way of sizing the panorama element, but then if we see that
     * the library user also provides `style` or `className` prop,
     * we will assume that the panorama is sized by those and will
     * not use these
     */

    /**
     * Panorama container width
     */
    width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

    /**
     * Panorama container height
     */
    height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

    /**
     * Panorama container style
     */
    style: PropTypes.object,

    /**
     * Panorama container className
     */
    className: PropTypes.string,
  };
}

Panorama.defaultProps = {
  width: 320,
  height: 240,
};

export default withYMaps(Panorama, true, [
  'panorama.isSupported',
  'panorama.locate',
  'panorama.createPlayer',
  'panorama.Player',
]);
