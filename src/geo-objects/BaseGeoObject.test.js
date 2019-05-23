import MockMapObject from '../__mocks__/MockMapObject';
import MockGeoObject from '../__mocks__/MockGeoObject';

import { BaseGeoObject } from './BaseGeoObject';

describe('BaseGeoObject', () => {
  const baseProps = {
    name: 'GeoObject',
    parent: new MockMapObject(),
    instanceRef: jest.fn(),
    onClick: jest.fn(),
  };

  beforeEach(() => {
    baseProps.instanceRef.mockClear();
    baseProps.onClick.mockClear();
  });

  describe('mountObject', () => {
    it('should create instance', () => {
      const instance = BaseGeoObject.mountObject(MockGeoObject, baseProps);
      expect(instance).toBeInstanceOf(MockGeoObject);
    });

    it('should pass geometry, properties and options to constructor', () => {
      const props = {
        ...baseProps,
        geometry: {},
        properties: {},
        options: {},
      };

      const instance = BaseGeoObject.mountObject(MockGeoObject, props);

      expect(instance.geometry.get()).toBe(props.geometry);
      expect(instance.properties.get()).toBe(props.properties);
      expect(instance.options.get()).toBe(props.options);
    });

    it('should pass defaultGeometry, defaultProperties and defaultOptions to constructor', () => {
      const props = {
        ...baseProps,
        defaultGeometry: {},
        defaultProperties: {},
        defaultOptions: {},
      };

      const instance = BaseGeoObject.mountObject(MockGeoObject, props);

      expect(instance.geometry.get()).toBe(props.defaultGeometry);
      expect(instance.properties.get()).toBe(props.defaultProperties);
      expect(instance.options.get()).toBe(props.defaultOptions);
    });

    it('should attach events to the instance', () => {
      const instance = BaseGeoObject.mountObject(MockGeoObject, baseProps);
      expect(instance.events.add).toHaveBeenCalledWith(
        'click',
        baseProps.onClick
      );
    });

    it('should add instace to parent geoObjects', () => {
      const instance = BaseGeoObject.mountObject(MockGeoObject, baseProps);
      expect(baseProps.parent.geoObjects.add).toHaveBeenCalledWith(instance);
    });

    it('should throw if there is no parent to add', () => {
      expect(() =>
        BaseGeoObject.mountObject(MockGeoObject, { ...baseProps, parent: null })
      ).toThrowErrorMatchingInlineSnapshot(
        `"No parent found to mount GeoObject"`
      );
    });

    it('should call instanceRef with an instance', () => {
      const instance = BaseGeoObject.mountObject(MockGeoObject, baseProps);
      expect(baseProps.instanceRef).toHaveBeenCalledWith(instance);
    });
  });

  describe('updateObject', () => {
    it('should update geometry [[number, number], number]', () => {
      const instance = BaseGeoObject.mountObject(MockGeoObject, baseProps);
      const coordinates = [0, 0];
      const radius = 0;

      BaseGeoObject.updateObject(instance, baseProps, {
        ...baseProps,
        geometry: [coordinates, radius],
      });

      expect(instance.geometry.setCoordinates).toHaveBeenCalledWith(
        coordinates
      );
      expect(instance.geometry.setRadius).toHaveBeenCalledWith(radius);
    });

    it('should update geometry [number, number]', () => {
      const instance = BaseGeoObject.mountObject(MockGeoObject, baseProps);
      const coordinates = [0, 0];

      BaseGeoObject.updateObject(instance, baseProps, {
        ...baseProps,
        geometry: coordinates,
      });

      expect(instance.geometry.setCoordinates).toHaveBeenCalledWith(
        coordinates
      );
    });

    it('should update geometry { coordinates }', () => {
      const instance = BaseGeoObject.mountObject(MockGeoObject, baseProps);
      const coordinates = [0, 0];

      BaseGeoObject.updateObject(instance, baseProps, {
        ...baseProps,
        geometry: { coordinates },
      });

      expect(instance.geometry.setCoordinates).toHaveBeenCalledWith(
        coordinates
      );
    });

    it('should update geometry { radius }', () => {
      const instance = BaseGeoObject.mountObject(MockGeoObject, baseProps);
      const radius = 0;

      BaseGeoObject.updateObject(instance, baseProps, {
        ...baseProps,
        geometry: { radius },
      });

      expect(instance.geometry.setRadius).toHaveBeenCalledWith(radius);
    });

    it('should update properties', () => {
      const instance = BaseGeoObject.mountObject(MockGeoObject, baseProps);
      const properties = { new: 'properties' };

      BaseGeoObject.updateObject(instance, baseProps, { properties });

      expect(instance.properties.set).toHaveBeenCalledWith(properties);
    });

    it('should update options', () => {
      const instance = BaseGeoObject.mountObject(MockGeoObject, baseProps);
      const options = { new: 'options' };

      BaseGeoObject.updateObject(instance, baseProps, { options });

      expect(instance.options.set).toHaveBeenCalledWith(options);
    });

    it('should update events', () => {
      const instance = BaseGeoObject.mountObject(MockGeoObject, baseProps);

      const onClick = () => {};
      const onTouchStart = () => {};

      BaseGeoObject.updateObject(instance, baseProps, { onClick });

      expect(instance.events.remove).toHaveBeenCalledWith(
        'click',
        baseProps.onClick
      );
      expect(instance.events.add).toHaveBeenCalledWith('click', onClick);

      BaseGeoObject.updateObject(instance, baseProps, { onTouchStart });

      expect(instance.events.add).toHaveBeenCalledWith(
        'touchstart',
        onTouchStart
      );
    });

    it('should call instance ref if changed', () => {
      const instance = BaseGeoObject.mountObject(MockGeoObject, baseProps);
      const instanceRef = jest.fn();

      BaseGeoObject.updateObject(instance, baseProps, { instanceRef });

      expect(baseProps.instanceRef).toHaveBeenCalledWith(null);
      expect(instanceRef).toHaveBeenCalledWith(instance);
    });
  });

  describe('unmountControl', () => {
    it('should remove events from instance', () => {
      const instance = BaseGeoObject.mountObject(MockGeoObject, baseProps);
      BaseGeoObject.unmountObject(instance, baseProps);

      expect(instance.events.get('click')).toHaveLength(0);
    });

    it('should remove instance from parent', () => {
      const instance = BaseGeoObject.mountObject(MockGeoObject, baseProps);
      BaseGeoObject.unmountObject(instance, baseProps);

      expect(baseProps.parent.geoObjects.remove).toHaveBeenCalledWith(instance);
    });

    it('should call instance ref with null', () => {
      const instance = BaseGeoObject.mountObject(MockGeoObject, baseProps);
      BaseGeoObject.unmountObject(instance, baseProps);

      expect(baseProps.instanceRef).toHaveBeenCalledWith(null);
    });
  });
});
