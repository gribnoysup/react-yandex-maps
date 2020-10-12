import React from 'react';
import PropTypes from 'prop-types';

import * as events from '../util/events';
import { getProp, isControlledProp } from '../util/props';
import { withParentContext } from '../Context';
import withYMaps from '../withYMaps';
import applyRef from '../util/ref';

export class ObjectManager extends React.Component {
  constructor() {
    super();
    this.state = { instance: null };
  }

  componentDidMount() {
    const instance = ObjectManager.mountObject(
      this.props.ymaps.ObjectManager,
      this.props
    );

    this.setState({ instance });
  }

  componentDidUpdate(prevProps) {
    if (this.state.instance !== null) {
      ObjectManager.updateObject(this.state.instance, prevProps, this.props);
    }
  }

  componentWillUnmount() {
    ObjectManager.unmountObject(this.state.instance, this.props);
  }

  render() {
    return null;
  }

  static mountObject(ObjectManager, props) {
    const { instanceRef, parent, _events } = events.separateEvents(props);

    const options = getProp(props, 'options', {});
    const features = getProp(props, 'features', {});
    const filter = getProp(props, 'filter', null);
    const objects = getProp(props, 'objects', {});
    const clusters = getProp(props, 'clusters', {});

    const instance = new ObjectManager(options);

    instance.add(features || []);

    instance.setFilter(filter);

    instance.objects.options.set(objects);
    instance.clusters.options.set(clusters);

    Object.keys(_events).forEach(key =>
      events.addEvent(instance, key, _events[key])
    );

    if (parent.geoObjects && typeof parent.geoObjects.add === 'function') {
      parent.geoObjects.add(instance);
    } else if (parent.add && typeof parent.add === 'function') {
      parent.add(instance);
    } else {
      throw new Error('No parent found to mount ObjectManager');
    }

    applyRef(null, instanceRef, instance);

    return instance;
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

    if (isControlledProp(newProps, 'objects')) {
      const oldObjectsOptions = getProp(oldProps, 'objects');
      const newObjectsOptions = getProp(newProps, 'objects');

      if (oldObjectsOptions !== newObjectsOptions) {
        instance.objects.options.set(newObjectsOptions);
      }
    }

    if (isControlledProp(newProps, 'clusters')) {
      const oldClustersOptions = getProp(oldProps, 'clusters');
      const newClustersOptions = getProp(newProps, 'clusters');

      if (oldClustersOptions !== newClustersOptions) {
        instance.clusters.options.set(newClustersOptions);
      }
    }

    if (isControlledProp(newProps, 'filter')) {
      const oldFilter = getProp(oldProps, 'filter');
      const newFilter = getProp(newProps, 'filter');

      if (oldFilter !== newFilter) {
        instance.setFilter(newFilter);
      }
    }

    if (isControlledProp(newProps, 'features')) {
      const oldFeatures = getProp(oldProps, 'features');
      const newFeatures = getProp(newProps, 'features');

      if (oldFeatures !== newFeatures) {
        instance.remove(oldFeatures);
        instance.add(newFeatures);
      }
    }

    events.updateEvents(instance, oldEvents, newEvents);

    applyRef(oldRef, instanceRef, instance);
  }

  static unmountObject(instance, props) {
    const { instanceRef, parent, _events } = events.separateEvents(props);

    if (instance !== null) {
      Object.keys(_events).forEach(key =>
        events.removeEvent(instance, key, _events[key])
      );

      if (parent.geoObjects && typeof parent.geoObjects.remove === 'function') {
        parent.geoObjects.remove(instance);
      } else if (parent.remove && typeof parent.remove === 'function') {
        parent.remove(instance);
      }

      applyRef(instanceRef);
    }
  }
}

if (process.env.NODE_ENV !== 'production') {
  const TYPE_FEATURE = 'Feature';

  const TYPE_FEATURE_COLLECTION = 'FeatureCollection';

  // https://tech.yandex.com/maps/doc/jsapi/2.1/ref/reference/ObjectManager-docpage/#add-param-objects
  const FeaturePropType = PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    type: PropTypes.oneOf([TYPE_FEATURE]).isRequired,
    geometry: PropTypes.object.isRequired,
    options: PropTypes.object,
    properties: PropTypes.object,
  });

  // INFO: A hack to make recursive prop-type check work properly
  const FeatureCollection = {
    type: PropTypes.oneOf([TYPE_FEATURE_COLLECTION]).isRequired,
  };

  FeatureCollection.features = PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.shape(FeatureCollection), FeaturePropType])
  ).isRequired;

  const FeatureCollectionPropType = PropTypes.shape(FeatureCollection);

  const FeaturesPropType = PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([FeatureCollectionPropType, FeaturePropType])
    ),
    FeatureCollectionPropType,
  ]);

  const FilterPropType = PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
  ]);

  // TODO
  const ObjectManagerOptionsPropType = PropTypes.shape({});

  // TODO
  const ObjectManagerObjectsOptionsPropType = PropTypes.shape({});

  // TODO
  const ObjectManagerClustersOptionsPropType = PropTypes.shape({});

  ObjectManager.propTypes = {
    /**
     * ObjectManager [features](https://tech.yandex.com/maps/doc/jsapi/2.1/ref/reference/ObjectManager-docpage/#method_detail__add-param-objects)
     */
    features: FeaturesPropType,
    /**
     * Uncontrolled ObjectManager [features](https://tech.yandex.com/maps/doc/jsapi/2.1/ref/reference/ObjectManager-docpage/#method_detail__add-param-objects)
     */
    defaultFeatures: FeaturesPropType,

    /**
     * ObjectManager [features filter](https://tech.yandex.com/maps/doc/jsapi/2.1/ref/reference/ObjectManager-docpage/#method_detail__setFilter-param-filterFunction)
     */
    filter: FilterPropType,
    /**
     * Uncontrolled ObjectManager [features filter](https://tech.yandex.com/maps/doc/jsapi/2.1/ref/reference/ObjectManager-docpage/#method_detail__setFilter-param-filterFunction)
     */
    defaultFilter: FilterPropType,

    /**
     * ObjectManager [options](https://tech.yandex.com/maps/doc/jsapi/2.1/ref/reference/ObjectManager-docpage/#ObjectManager__param-options)
     */
    options: ObjectManagerOptionsPropType,
    /**
     * Uncontrolled ObjectManager [options](https://tech.yandex.com/maps/doc/jsapi/2.1/ref/reference/ObjectManager-docpage/#ObjectManager__param-options)
     */
    defaultOptions: ObjectManagerOptionsPropType,

    /** ObjectManager object options */
    objects: ObjectManagerObjectsOptionsPropType,
    defaultObjects: ObjectManagerObjectsOptionsPropType,

    /** ObjectManager clusters options */
    clusters: ObjectManagerClustersOptionsPropType,
    defaultClusters: ObjectManagerClustersOptionsPropType,

    /** ref prop but for Yandex.Maps object instances */
    instanceRef: PropTypes.func,

    /**
     * @ignore
     * Yandex.Maps API object
     */
    ymaps: PropTypes.object,

    /**
     * @ignore
     * Parent object (e.g, ymaps.Map or ymaps.Clusterer)
     */
    parent: PropTypes.object,
  };
}

export default withParentContext(
  withYMaps(ObjectManager, true, ['ObjectManager'])
);
