import React from 'react';
import invariant from 'invariant';

import { Route as RouteSymbol, Point as PointSymbol } from './util/symbols';
// import { separateEvents, addEvent, removeEvent } from './util/events';

export class Route extends React.Component {
  static defaultProps = {
    instanceRef: Function.prototype,
  };

  static [RouteSymbol] = true;

  state = { instance: null };

  _mounted = false;

  createRoute(props = this.props) {
    const { ymaps, children } = props;

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

    ymaps.route(points).then(route => {
      if (this._mounted) this.setState({ instance: route });
    });
  }

  mount(prevInstance = null) {
    const { collection, instanceRef } = this.props;
    const { instance } = this.state;

    if (prevInstance) collection.remove(prevInstance);

    if (instance) {
      collection.add(instance);
      instanceRef(instance);
    } else {
      instanceRef(null);
    }
  }

  componentDidMount() {
    this._mounted = true;
    if (this.props.ymaps) this.createRoute();
  }

  componentWillUpdate(newProps) {
    if (newProps.children !== this.props.children) this.createRoute(newProps);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.instance !== this.state.instance) {
      this.mount(prevState.instance);
    }
  }

  componentWillUnmount() {
    this._mounted = false;
  }

  render() {
    return null;
  }
}
