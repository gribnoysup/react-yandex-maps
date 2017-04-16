import React from 'react';
import invariant from 'invariant';

import { Route as RouteSymbol, Point as PointSymbol } from './util/symbols';
// import { separateEvents, addEvent, removeEvent } from './util/events';

const childrenToRoute = children => {
  const points = [];

  React.Children.forEach(children, child => {
    if (!child) return;

    invariant(
      child && child.type && child.type[PointSymbol],
      'Route component only accepts <Point> components as children'
    );

    points.push({
      type: child.props.type,
      point: child.props.value,
    });
  });

  return points;
};

const comparePointValues = (newVal, prevVal) =>
  typeof newVal !== typeof prevVal || Array.isArray(newVal)
    ? newVal.some((coord, i) => coord !== prevVal[i])
    : newVal !== prevVal;

const shouldRouteUpdate = (newPoints, prevPoints) =>
  newPoints.length !== prevPoints.length ||
  newPoints.some(
    (point, i) =>
      point.type !== prevPoints[i].type ||
      comparePointValues(point.point, prevPoints[i].point)
  );

export class Route extends React.Component {
  static defaultProps = {
    instanceRef: Function.prototype,
  };

  static [RouteSymbol] = true;

  state = { instance: null };

  _mounted = false;

  componentDidMount() {
    this._mounted = true;
    if (this.props.ymaps) this.updateRoute();
  }

  componentWillReceiveProps(newProps) {
    this.updateRoute(newProps, this.props);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.instance && prevState.instance !== this.state.instance) {
      if (prevState.instance) this.unmount(prevState);
      this.mount();
    }
  }

  componentWillUnmount() {
    this._mounted = false;
    this.unmount();
  }

  updateRoute(newProps = this.props, prevProps = {}) {
    const prevRoute = childrenToRoute(prevProps.children);
    const newRoute = childrenToRoute(newProps.children);

    if (shouldRouteUpdate(newRoute, prevRoute)) {
      newProps.ymaps.route(newRoute).then(route => {
        if (this._mounted) this.setState({ instance: route });
      });
    }
  }

  mount(state = this.state) {
    const { collection, instanceRef } = this.props;
    const { instance } = state;

    collection.add(instance);
    instanceRef(instance);
  }

  unmount(state = this.state) {
    const { collection, instanceRef } = this.props;
    const { instance } = state;

    collection.remove(instance);
    instanceRef(null);
  }

  render() {
    return null;
  }
}
