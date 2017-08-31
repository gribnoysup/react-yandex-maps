import React from 'react';
import PropTypes from 'prop-types';

import { separateEvents, addEvent, removeEvent } from './util/events';

const { func, object } = PropTypes;

export class ObjectManager extends React.Component {
  static propTypes = {
    instanceRef: func,
  };

  static defaultProps = {
    instanceRef: Function.prototype,
  };

  static contextTypes = {
    ymaps: object,
    parent: object,
  };

  state = { instance: null };

  mount() {
    const {
      features,
      filter,
      options,
      clusters,
      objects,
      events,
      instanceRef,
    } = separateEvents(this.props);

    const { ymaps, parent } = this.context;

    const instance = new ymaps.ObjectManager(options);

    Object.keys(events).forEach(key => addEvent(events[key], key, instance));

    if (parent.geoObjects && typeof parent.geoObjects.add === 'function') {
      parent.geoObjects.add(instance);
    } else if (parent.add && typeof parent.add === 'function') {
      parent.add(instance);
    }

    instance.add(features || []);
    instance.setFilter(filter);
    instance.clusters.options.set(clusters || {});
    instance.objects.options.set(objects || {});

    this.setState({ instance });

    if (typeof instanceRef === 'function') {
      instanceRef(instance);
    }
  }

  update(instance, prevProps = {}, newProps = {}) {
    const {
      filter: prevFilter,
      events: prevEvents,
      features: prevFeatures,
      clusters: prevClusters,
      objects: prevObjects,
    } = separateEvents(prevProps);

    const { filter, events, features, clusters, objects } = separateEvents(
      newProps
    );

    if (filter !== prevFilter) {
      instance.setFilter(filter);
    }

    if (clusters !== prevClusters) {
      instance.clusters.options.set(clusters || {});
    }

    if (objects !== prevObjects) {
      instance.objects.options.set(objects || {});
    }

    if (features !== prevFeatures) {
      this.updateFeatures(instance, prevFeatures || [], features || []);
    }

    this.updateEvents(instance, prevEvents, events);
  }

  updateFeatures(instance, prevFeatures, features) {
    const prevIds = prevFeatures.map(feature => feature.id);
    const newIds = features.map(feature => feature.id);

    const toRemove = prevFeatures.filter(
      feature => newIds.indexOf(feature.id) === -1
    );

    const toAdd = features.filter(
      feature => prevIds.indexOf(feature.id) === -1
    );

    if (toRemove.length > 0) instance.remove(toRemove);
    if (toAdd.length > 0) instance.add(toAdd);
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
    const { parent } = this.context;
    const { instance } = this.state;
    const { events, instanceRef } = separateEvents(this.props);

    if (instance !== null) {
      Object.keys(events).forEach(key =>
        removeEvent(events[key], key, instance)
      );

      if (parent.geoObjects && typeof parent.geoObjects.remove === 'function') {
        parent.geoObjects.remove(instance);
      } else if (parent.remove && typeof parent.remove === 'function') {
        parent.remove(instance);
      }
    }

    if (typeof instanceRef === 'function') {
      instanceRef(null);
    }
  }

  componentDidMount() {
    this.mount();
  }

  componentWillReceiveProps(newProps) {
    const { instance } = this.state;
    if (instance !== null) this.update(instance, this.props, newProps);
  }

  componentWillUnmount() {
    this.unmount();
  }

  render() {
    return null;
  }
}
