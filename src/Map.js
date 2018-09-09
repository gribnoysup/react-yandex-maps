import React from 'react';
import PropTypes from 'prop-types';

import { separateEvents, addEvent, removeEvent } from './util/events';

const { object, oneOfType, number, string, func } = PropTypes;

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

  static childContextTypes = {
    parent: object,
  };

  state = { instance: null };

  mapNode = null;

  getChildContext() {
    return { parent: this.state.instance };
  }

  getMapNode = ref => (this.mapNode = ref);

  mount(ymaps = this.context.ymaps) {
    const { state, options, events, instanceRef } = separateEvents(this.props);

    const instance = new ymaps.Map(this.mapNode, state, options);

    Object.keys(events).forEach(key => addEvent(events[key], key, instance));
    this.setState({ instance });

    if (typeof instanceRef === 'function') {
      instanceRef(instance);
    }
  }

  unmount() {
    const { instance } = this.state;
    const { events, instanceRef } = separateEvents(this.props);

    if (instance !== null) {
      Object.keys(events).forEach(key =>
        removeEvent(events[key], key, instance)
      );
      instance.destroy();
    }

    if (typeof instanceRef === 'function') {
      instanceRef(null);
    }
  }

  update(instance, prevProps = {}, newProps = {}) {
    const {
      options: prevOptions,
      state: prevState,
      events: prevEvents,
    } = separateEvents(prevProps);

    const { options, state, events } = separateEvents(newProps);

    // if (prevWidth !== width || prevHeight !== height) {
    //   instance.container.fitToViewport();
    // }

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

  componentDidMount() {
    if (this.context.ymaps) this.mount();
  }

  componentWillReceiveProps(nextProps, nextContext) {
    if (nextContext.ymaps !== null && this.state.instance === null) {
      this.mount(nextContext.ymaps);
    } else if (this.state.instance !== null) {
      this.update(this.state.instance, this.props, nextProps);
    }
  }

  componentDidUpdate(prevProps) {
    if (
      this.state.instance !== null &&
      (prevProps.width !== this.props.width ||
        prevProps.height !== this.props.height)
    ) {
      // fitToViewport on with/height update should happen after
      // component width/height update happened
      this.state.instance.container.fitToViewport();
    }
  }

  componentWillUnmount() {
    this.unmount();
  }

  render() {
    const { width, height, children } = this.props;
    const { instance } = this.state;

    return (
      <div style={{ width, height }} ref={this.getMapNode}>
        {instance && children}
      </div>
    );
  }
}
