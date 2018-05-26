import React from 'react';
import PropTypes from 'prop-types';

import { separateEvents, addEvent, removeEvent } from './util/events';

const { func, object } = PropTypes;

const TYPE_FEATURE = 'Feature';

const TYPE_FEATURE_COLLECTION = 'FeatureCollection';

// https://tech.yandex.com/maps/doc/jsapi/2.1/ref/reference/ObjectManager-docpage/#add-param-objects
const ChildEntityPropType = PropTypes.shape({
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  type: PropTypes.oneOf([TYPE_FEATURE]).isRequired,
  geometry: PropTypes.object.isRequired,
  options: PropTypes.object,
  properties: PropTypes.object,
});

// INFO: A hack to make recursive
// prop-type check work properly
const Entity = {
  type: PropTypes.oneOf([TYPE_FEATURE_COLLECTION]).isRequired,
};

Entity.features = PropTypes.arrayOf(
  PropTypes.oneOfType([PropTypes.shape(Entity), ChildEntityPropType])
).isRequired;

const EntityPropType = PropTypes.shape(Entity);

export class ObjectManager extends React.Component {
  static propTypes = {
    instanceRef: func,
    features: PropTypes.oneOfType([
      PropTypes.arrayOf(
        PropTypes.oneOfType([EntityPropType, ChildEntityPropType])
      ),
      EntityPropType,
    ]),
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
      instance.clusters.options.set(clusters);
    }

    if (objects !== prevObjects) {
      instance.objects.options.set(objects);
    }

    if (features !== prevFeatures) {
      instance.remove(prevFeatures);
      instance.add(features);
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
