import React from 'react';

import invariant from 'invariant';

import Symbols from './util/symbols';
import { separateEvents, addEvent, removeEvent } from './util/events';

const { object, oneOfType, number, string, func } = React.PropTypes;

export class Map extends React.Component {
  static propTypes = {
    state: object,
    options: object,
    width: oneOfType([number, string]),
    height: oneOfType([number, string]),
    instanceRef: func,
  };

  static defaultProps = {
    state: {
      center: [0, 0],
      zoom: 1,
    },
    width: 400,
    height: 315,
    instanceRef: Function.prototype,
  };

  static contextTypes = {
    ymaps: object,
  };

  static [Symbols.Map] = true;

  constructor(...args) {
    super(...args);
    this.state = { instance: null };
    this.getMapNode = this.getMapNode.bind(this);
  }

  getMapNode(ref) {
    this.mapNode = ref;
  }

  mount(ymaps = this.context.ymaps) {
    const { state, options, events } = separateEvents(this.props);
    const instance = new ymaps.Map(this.mapNode, state, options);

    Object.keys(events).forEach(key => addEvent(events[key], key, instance));
    this.setState({ instance });
  }

  unmount() {
    const { instance } = this.state;
    const { events } = separateEvents(this.props);

    if (!instance) return;

    Object.keys(events).forEach(key => removeEvent(events[key], key, instance));
    instance.destroy();
  }

  update(instance, prevProps = {}, newProps = {}) {
    const {
      width: prevWidth,
      height: prevHeight,
      options: prevOptions,
      state: prevState,
      events: prevEvents,
    } = separateEvents(prevProps);

    const { width, height, options, state, events } = separateEvents(newProps);

    if (prevWidth !== width || prevHeight !== height) {
      instance.container.fitToViewport();
    }

    if (prevState.type !== state.type) {
      instance.setType(state.type);
    }

    if (prevState.behaviors !== state.behaviors) {
      instance.behaviors.disable(prevState.behaviors || []);
      instance.behaviors.enable(state.behaviors || []);
    }

    if (prevState.zoom !== state.zoom) {
      instance.setZoom(state.zoom);
    }

    if (prevState.center !== state.center) {
      instance.setCenter(state.center);
    }

    if (state.bounds && prevState.bounds !== state.bounds) {
      instance.setBounds(state.bounds);
    }

    if (prevOptions !== options) {
      instance.options.set(options);
    }

    this.updateEvents(instance, prevEvents, events);
  }

  updateEvents(instance, prevEvents, newEvents) {
    const mergedEvents = Object.assign({}, prevEvents, newEvents);

    Object.keys(mergedEvents).forEach(key => {
      if (prevEvents[key] !== newEvents[key]) {
        removeEvent(prevEvents[key], key, instance);
        addEvent(newEvents[key], key, instance);
      }
    });
  }

  renderGeoObject(child) {
    const { ymaps } = this.context;
    const { geoObjects: collection } = this.state.instance;

    return React.cloneElement(child, { ymaps, collection });
  }

  renderControl(child) {
    const { ymaps } = this.context;
    const { controls: collection } = this.state.instance;

    return React.cloneElement(child, { ymaps, collection });
  }

  get children() {
    const { children } = this.props;
    const { instance } = this.state;

    if (!instance) return null;

    return React.Children.map(children, child => {
      invariant(
        child == null ||
          child.type[Symbols.GeoObject] ||
          child.type[Symbols.Control],
        'A <Map> children should be <GeoObject> or <Control> components'
      );

      if (!child) return null;

      if (child.type[Symbols.GeoObject]) return this.renderGeoObject(child);
      if (child.type[Symbols.Control]) return this.renderControl(child);
    });
  }

  componentDidMount() {
    const { ymaps } = this.context;
    if (ymaps) this.mount();
  }

  componentDidUpdate(prevProps, prevState) {
    const { ymaps } = this.context;
    const { instance } = this.state;
    const { instanceRef } = this.props;

    if (!instance && ymaps) this.mount();
    if (instance) this.update(instance, prevProps, this.props);

    if (prevState.instance !== instance) {
      if (instance) {
        instanceRef(instance);
      } else {
        instanceRef(null);
      }
    }
  }

  componentWillUnmount() {
    this.unmount();
  }

  render() {
    const { width, height } = this.props;

    return this.context.ymaps &&
      <div style={{ width: '100%', height: '100%' }}>
        {this.children}
        <div style={{ width, height }} ref={this.getMapNode} />
      </div>;
  }
}
