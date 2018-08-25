import MockControl from '../__mocks__/MockControl';
import MockGeoObject from '../__mocks__/MockGeoObject';

import { BaseControl } from './createControl';

describe('BaseControl', () => {
  const baseProps = {
    name: 'Control',
    parent: new MockGeoObject(),
    instanceRef: jest.fn(),
    onClick: jest.fn(),
  };

  beforeEach(() => {
    baseProps.instanceRef.mockClear();
    baseProps.onClick.mockClear();
  });

  describe('mountControl', () => {
    it('should create an instance', () => {
      const instance = BaseControl.mountControl(MockControl, baseProps);
      expect(instance).toBeInstanceOf(MockControl);
    });

    it('should pass data, options, state, mapTypes and lazy to constructor', () => {
      const props = {
        ...baseProps,
        data: {},
        options: {},
        state: {},
        mapTypes: [],
        lazy: true,
      };

      const instance = BaseControl.mountControl(MockControl, props);

      expect(instance.data.get()).toBe(props.data);
      expect(instance.options.get()).toBe(props.options);
      expect(instance.state.get()).toBe(props.state);

      expect(instance.parameters.mapTypes).toBe(props.mapTypes);
      expect(instance.parameters.lazy).toBe(props.lazy);
    });

    it('should pass defaultData, defaultOptions, defaultState, defaultMapTypes to constructor', () => {
      const props = {
        ...baseProps,
        defaultData: {},
        defaultOptions: {},
        defaultState: {},
        defaultMapTypes: [],
      };

      const instance = BaseControl.mountControl(MockControl, props);

      expect(instance.data.get()).toBe(props.defaultData);
      expect(instance.options.get()).toBe(props.defaultOptions);
      expect(instance.state.get()).toBe(props.defaultState);

      expect(instance.parameters.mapTypes).toBe(props.defaultMapTypes);
    });

    it('should register events on the instance', () => {
      const instance = BaseControl.mountControl(MockControl, baseProps);
      expect(instance.events.add).toBeCalledWith('click', baseProps.onClick);
    });

    it('should add instace to parent controls', () => {
      const instance = BaseControl.mountControl(MockControl, baseProps);
      expect(baseProps.parent.controls.add).toBeCalledWith(instance);
    });

    it('should throw if there is no parent to add', () => {
      expect(() =>
        BaseControl.mountControl(MockControl, { ...baseProps, parent: null })
      ).toThrowErrorMatchingInlineSnapshot(
        `"No parent found to mount Control"`
      );
    });

    it('should call instanceRef with an instance', () => {
      const instance = BaseControl.mountControl(MockControl, baseProps);
      expect(baseProps.instanceRef).toBeCalledWith(instance);
    });
  });

  describe('updateControl', () => {
    it('should update options', () => {
      const instance = BaseControl.mountControl(MockControl, baseProps);
      const newProps = { options: { new: 'value' } };

      BaseControl.updateControl(instance, baseProps, newProps);

      expect(instance.options.set).toBeCalledWith(newProps.options);

      BaseControl.updateControl(instance, newProps, baseProps);

      expect(instance.options.set).toBeCalledWith(baseProps.options);
    });

    it('should update data', () => {
      const instance = BaseControl.mountControl(MockControl, baseProps);
      const newProps = { data: { new: 'value' } };

      BaseControl.updateControl(instance, baseProps, newProps);

      expect(instance.data.set).toBeCalledWith(newProps.data);

      BaseControl.updateControl(instance, newProps, baseProps);

      expect(instance.data.set).toBeCalledWith(baseProps.data);
    });

    it('should update state', () => {
      const instance = BaseControl.mountControl(MockControl, baseProps);
      const newProps = { state: { new: 'value' } };

      BaseControl.updateControl(instance, baseProps, newProps);

      expect(instance.state.set).toBeCalledWith(newProps.state);

      BaseControl.updateControl(instance, newProps, baseProps);

      expect(instance.state.set).toBeCalledWith(baseProps.state);
    });

    it('should update mapTypes', () => {
      const instance = BaseControl.mountControl(MockControl, baseProps);
      const newProps = { mapTypes: ['new#one', 'another#one'] };

      BaseControl.updateControl(instance, baseProps, newProps);

      expect(instance.removeAllMapTypes).toHaveBeenCalledTimes(1);
      expect(instance.addMapType).toHaveBeenCalledTimes(
        newProps.mapTypes.length
      );
      expect(instance.mapTypes.raw()).toEqual(newProps.mapTypes);
    });

    it('should update events', () => {
      const instance = BaseControl.mountControl(MockControl, baseProps);

      const onClick = () => {};
      const onTouchStart = () => {};

      BaseControl.updateControl(instance, baseProps, { onClick });

      expect(instance.events.remove).toBeCalledWith('click', baseProps.onClick);
      expect(instance.events.add).toBeCalledWith('click', onClick);

      BaseControl.updateControl(instance, baseProps, { onTouchStart });

      expect(instance.events.add).toBeCalledWith('touchstart', onTouchStart);
    });

    it('should call instance ref if changed', () => {
      const instance = BaseControl.mountControl(MockControl, baseProps);
      const instanceRef = jest.fn();

      BaseControl.updateControl(instance, baseProps, { instanceRef });

      expect(baseProps.instanceRef).toBeCalledWith(null);
      expect(instanceRef).toBeCalledWith(instance);
    });
  });

  describe('unmountControl', () => {
    it('should remove events from instance', () => {
      const instance = BaseControl.mountControl(MockControl, baseProps);
      BaseControl.unmountControl(instance, baseProps);

      expect(instance.events.get('click')).toHaveLength(0);
    });

    it('should remove instance from parent', () => {
      const instance = BaseControl.mountControl(MockControl, baseProps);
      BaseControl.unmountControl(instance, baseProps);

      expect(baseProps.parent.controls.remove).toBeCalledWith(instance);
    });

    it('should call instance ref with null', () => {
      const instance = BaseControl.mountControl(MockControl, baseProps);
      BaseControl.unmountControl(instance, baseProps);

      expect(baseProps.instanceRef).toBeCalledWith(null);
    });
  });
});
