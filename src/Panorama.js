import React from 'react';
import PropTypes from 'prop-types';
import { getProp, isControlledProp } from './util/props';
import { withParentContext } from './Context';
import withYMaps from './withYMaps';
import * as events from './util/events';

class Panorama extends React.Component {
  constructor() {
    super();
    this.state = { instance: null };
  }

  componentDidMount() {
    if (!this.props.ymaps.panorama.isSupported()) {
      return;
    }

    Panorama.mountObject(this.props.ymaps.panorama, this.props).then(instance =>
      this.setState({ instance })
    );
  }

  componentDidUpdate(prevProps) {
    if (this.state.instance !== null) {
      Panorama.updateObject(this.state.instance, prevProps, this.props);
    }
  }

  componentWillUnmount() {
    Panorama.unmountObject(this.state.instance, this.props);
  }

  render() {
    const parentElementStyle = Panorama.getParentElementSize(this.props);
    return <div id="player" {...parentElementStyle} />;
  }

  static getParentElementSize(props) {
    const { width, height, style, className } = props;

    if (typeof style !== 'undefined' || typeof className !== 'undefined') {
      return Object.assign({}, style && { style }, className && { className });
    }

    return { style: { width, height } };
  }

  static mountObject(panorama, props) {
    const { instanceRef, _events } = events.separateEvents(props);

    const coordinates = getProp(props, 'coordinates');
    const options = getProp(props, 'options');

    return new Promise((resolve, reject) => {
      panorama.locate(coordinates).done(
        panoramas => {
          if (panoramas.length > 0) {
            const instance = new panorama.Player(
              'player',
              panoramas[0],
              options
            );

            if (typeof instanceRef === 'function') {
              instanceRef(instance);
            }

            Object.keys(_events).forEach(key =>
              events.addEvent(instance, key, _events[key])
            );

            resolve(instance);
          }
        },
        () => {
          reject();
        }
      );
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

    events.updateEvents(instance, oldEvents, newEvents);

    // Mimic React callback ref behavior:
    // https://reactjs.org/docs/refs-and-the-dom.html#caveats-with-callback-refs
    if (oldRef !== instanceRef) {
      if (typeof oldRef === 'function') oldRef(null);
      if (typeof instanceRef === 'function') instanceRef(instance);
    }
  }

  static unmountObject(instance, props) {
    const { instanceRef, _events } = events.separateEvents(props);

    if (instance !== null) {
      Object.keys(_events).forEach(key =>
        events.removeEvent(instance, key, _events[key])
      );

      if (typeof instanceRef === 'function') {
        instanceRef(null);
      }
    }
  }
}

export default withParentContext(
  withYMaps(Panorama, true, [
    'panorama.isSupported',
    'panorama.locate',
    'panorama.createPlayer',
    'panorama.Player',
  ])
);

if (process.env.NODE_ENV !== 'production') {
  Panorama.propTypes = {
    // Yandex.Maps API object
    ymaps: PropTypes.object,
  };
}

Panorama.defaultProps = {
  width: 320,
  height: 240,
};
