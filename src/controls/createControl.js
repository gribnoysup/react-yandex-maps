import React from 'react';
import PropTypes from 'prop-types';

import * as events from '../util/events';
import { getProp, isControlledProp } from '../util/props';
import { withParentContext, ParentContext } from '../Context';
import withYMaps from '../withYMaps';

export function createControl(name, propTypes) {
  class Control extends React.Component {
    constructor() {
      super();
      this.state = { instance: null };
    }

    componentDidMount() {
      const instance = Control.mountControl(
        // eslint-disable-next-line react/prop-types
        this.props.ymaps.control[name],
        this.props
      );

      this.setState({ instance });
    }

    componentDidUpdate(prevProps) {
      if (this.state.instance !== null) {
        Control.updateControl(this.state.instance, prevProps, this.props);
      }
    }

    componentWillUnmount() {
      Control.unmountControl(this.state.instance, this.props);
    }

    render() {
      return (
        <ParentContext.Provider value={this.state.instance}>
          {/* eslint-disable-next-line react/prop-types */}
          {this.props.children}
        </ParentContext.Provider>
      );
    }

    static mountControl(Control, props) {
      const { instanceRef, parent, lazy, _events } = events.separateEvents(
        props
      );

      const data = getProp(props, 'data');
      const options = getProp(props, 'options');
      const state = getProp(props, 'state');

      const instance = new Control({ data, options, state, lazy });

      Object.keys(_events).forEach(key =>
        events.addEvent(instance, key, _events[key])
      );

      if (parent.controls && typeof parent.controls.add === 'function') {
        parent.controls.add(instance);
      } else if (parent.add && typeof parent.add === 'function') {
        parent.add(instance);
      } else {
        throw new Error(`No parent found to mount ${name}`);
      }

      if (typeof instanceRef === 'function') {
        instanceRef(instance);
      }

      return instance;
    }

    static updateControl(instance, oldProps, newProps) {
      const { _events: newEvents, instanceRef } = events.separateEvents(
        newProps
      );
      const { _events: oldEvents, instanceRef: oldRef } = events.separateEvents(
        oldProps
      );

      if (isControlledProp(oldProps, 'options')) {
        const oldOptions = getProp(oldProps, 'options');
        const newOptions = getProp(newProps, 'options');

        if (oldOptions !== newOptions) {
          instance.options.set(newOptions);
        }
      }

      if (isControlledProp(oldProps, 'data')) {
        const oldData = getProp(oldProps, 'data');
        const newData = getProp(newProps, 'data');

        if (oldData !== newData) {
          instance.data.set(newData);
        }
      }

      if (isControlledProp(oldProps, 'state')) {
        const oldState = getProp(oldProps, 'state');
        const newState = getProp(newProps, 'state');

        if (oldState !== newState) {
          instance.state.set(newState);
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

    static unmountControl(instance, props) {
      const { instanceRef, _events } = events.separateEvents(props);

      if (instance !== null) {
        Object.keys(_events).forEach(key =>
          events.removeEvent(instance, key, _events[key])
        );

        if (parent.controls && typeof parent.controls.remove === 'function') {
          parent.controls.remove(instance);
        } else if (parent.remove && typeof parent.remove === 'function') {
          parent.remove(instance);
        }

        if (typeof instanceRef === 'function') {
          instanceRef(null);
        }
      }
    }
  }

  Control.propTypes = Object.assign(
    {
      children: PropTypes.node,

      /** ref prop but for Yandex.Maps object instances */
      instanceRef: PropTypes.func,

      /** Yandex.Maps API object */
      ymaps: PropTypes.object,

      /** Parent object (e.g, ymaps.Map or ymaps.Clusterer) */
      parent: PropTypes.object,
    },
    propTypes
  );

  Control.displayName = name;

  return withParentContext(withYMaps(Control, true, [`control.${name}`]));
}
