import React from 'react';

import invariant from 'invariant';

import Symbols from './util/symbols';
import { separateEvents, addEvent, removeEvent } from './util/events';

const { func } = React.PropTypes;

export class Clusterer extends React.Component {
  static propTypes = {
    instanceRef: func,
  };

  static defaultProps = {
    instanceRef: Function.prototype,
  };

  static [Symbols.GeoObject] = true;

  state = { instance: null };

  mount() {
    const { collection, ymaps, options, events } = separateEvents(this.props);
    const instance = new ymaps.Clusterer(options);

    Object.keys(events).forEach(key => addEvent(events[key], key, instance));
    collection.add(instance);

    this.setState({ instance });
  }

  update(instance, prevProps = {}, newProps = {}) {
    const { options: prevOptions, events: prevEvents } = separateEvents(
      prevProps
    );
    const { options, events } = separateEvents(this.props);

    if (options !== prevOptions) {
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

  unmount() {
    const { instance } = this.state;
    const { events, collection } = separateEvents(this.props);

    if (!instance) return;

    Object.keys(events).forEach(key => removeEvent(events[key], key, instance));
    collection.remove(instance);
  }

  renderGeoObject(child) {
    const { ymaps } = this.context;
    const { geoObjects: collection } = this.state.instance;

    return React.cloneElement(child, { ymaps, collection });
  }

  get children() {
    const { children } = this.props;
    const { instance } = this.state;

    if (!instance) return null;

    return React.Children.map(children, child => {
      invariant(
        child == null,
        child.type[Symbols.GeoObject] || child.type[Symbols.Route],
        'A <Clusterer> children should be <GeoObject> or <Route> component'
      );

      if (!child) return null;

      if (child.type[Symbols.GeoObject] || child.type[Symbols.Route])
        return this.renderGeoObject(child);
    });
  }

  componentDidMount() {
    const { ymaps } = this.props;
    if (ymaps) this.mount();
  }

  componentWillReceiveProps(newProps) {
    const { instance } = this.state;
    if (instance) this.update(instance, this.props, newProps);
  }

  componentDidUpdate(prevProps, prevState) {
    const { instance } = this.state;
    const { instanceRef } = this.props;

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
    return <noscript>{this.children}</noscript>;
  }
}
