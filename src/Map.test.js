import MockMapObject from './__mocks__/MockMapObject';

import { Map } from './Map';

describe('Map', () => {
  const parentElement = {};

  const baseProps = {
    onClick: jest.fn(),
    instanceRef: jest.fn(),
  };

  beforeEach(() => {
    baseProps.onClick.mockClear();
    baseProps.instanceRef.mockClear();
  });

  describe('mountObject', () => {
    it('should create an instance', () => {
      const instance = Map.mountObject(parentElement, MockMapObject, baseProps);
      expect(instance).toBeInstanceOf(MockMapObject);
    });

    it('should pass parentElement, state and options to the constructor', () => {
      const props = { ...baseProps, state: {}, options: {} };
      const instance = Map.mountObject(parentElement, MockMapObject, props);

      expect(instance.parentElement).toBe(parentElement);
      expect(instance.state).toBe(props.state);
      expect(instance.options.get()).toBe(props.options);
    });

    it('should pass defaultState and defaultOptions to constructor', () => {
      const props = { ...baseProps, defaultState: {}, defaultOptions: {} };
      const instance = Map.mountObject(parentElement, MockMapObject, props);

      expect(instance.state).toBe(props.defaultState);
      expect(instance.options.get()).toBe(props.defaultOptions);
    });

    it('should add events to the instance', () => {
      const instance = Map.mountObject(parentElement, MockMapObject, baseProps);
      expect(instance.events.add).toBeCalledWith('click', baseProps.onClick);
    });

    it('should call instanceRef with an instance', () => {
      const instance = Map.mountObject(parentElement, MockMapObject, baseProps);
      expect(baseProps.instanceRef).toBeCalledWith(instance);
    });
  });

  describe('updateObject', () => {
    it('should update type when changed', () => {
      const instance = Map.mountObject(parentElement, MockMapObject, baseProps);
      const props = { ...baseProps, state: { type: 'new#type' } };

      Map.updateObject(instance, baseProps, props);

      expect(instance.setType).toBeCalledWith(props.state.type);
    });

    it('should update behaviors when changed', () => {
      const instance = Map.mountObject(parentElement, MockMapObject, baseProps);
      const props = { ...baseProps, state: { behaviors: ['zoom'] } };

      Map.updateObject(instance, baseProps, props);

      expect(instance.behaviors.enable).toBeCalledWith(props.state.behaviors);
    });

    it('should update zoom when changed', () => {
      const instance = Map.mountObject(parentElement, MockMapObject, baseProps);
      const props = { ...baseProps, state: { zoom: 9000 } };

      Map.updateObject(instance, baseProps, props);

      expect(instance.setZoom).toBeCalledWith(props.state.zoom);
    });

    it('should update center when changed', () => {
      const instance = Map.mountObject(parentElement, MockMapObject, baseProps);
      const props = { ...baseProps, state: { center: [0, 0] } };

      Map.updateObject(instance, baseProps, props);

      expect(instance.setCenter).toBeCalledWith(props.state.center);
    });

    it('should update bounds when changed', () => {
      const instance = Map.mountObject(parentElement, MockMapObject, baseProps);
      const props = { ...baseProps, state: { bounds: [[0, 0], [1, 1]] } };

      Map.updateObject(instance, baseProps, props);

      expect(instance.setBounds).toBeCalledWith(props.state.bounds);
    });

    it('should update options when changed', () => {
      const instance = Map.mountObject(parentElement, MockMapObject, baseProps);
      const props = { ...baseProps, options: {} };

      Map.updateObject(instance, baseProps, props);

      expect(instance.options.set).toBeCalledWith(props.options);
    });

    it('should update events', () => {
      const instance = Map.mountObject(parentElement, MockMapObject, baseProps);
      const props = { ...baseProps, onClick: () => {} };

      Map.updateObject(instance, baseProps, props);

      expect(instance.events.remove).toBeCalledWith('click', baseProps.onClick);
      expect(instance.events.add).toBeCalledWith('click', props.onClick);
    });

    it('should call instanceRef if changed', () => {
      const instance = Map.mountObject(parentElement, MockMapObject, baseProps);
      const props = { ...baseProps, instanceRef: jest.fn() };

      Map.updateObject(instance, baseProps, props);

      expect(baseProps.instanceRef).toBeCalledWith(null);
      expect(props.instanceRef).toBeCalledWith(instance);
    });
  });

  describe('unmountObject', () => {
    it('should remove events', () => {
      const instance = Map.mountObject(parentElement, MockMapObject, baseProps);
      Map.unmountObject(instance, baseProps);

      expect(instance.events.remove).toBeCalledWith('click', baseProps.onClick);
    });

    it('should destroy instance', () => {
      const instance = Map.mountObject(parentElement, MockMapObject, baseProps);
      Map.unmountObject(instance, baseProps);

      expect(instance.destroy).toBeCalled();
    });

    it('should call instanceRef with null', () => {
      const instance = Map.mountObject(parentElement, MockMapObject, baseProps);
      Map.unmountObject(instance, baseProps);

      expect(baseProps.instanceRef).toBeCalledWith(null);
    });
  });
});
