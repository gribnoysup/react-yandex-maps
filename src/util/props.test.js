import { isControlledProp, getProp } from './props';

describe('Prop utils', () => {
  describe('isControlledProp', () => {
    it('should return true if key exists on the object', () => {
      expect(isControlledProp({ foo: 1 }, 'foo')).toBeTruthy();
    });

    it('should return true if key and default key are not on the object', () => {
      expect(isControlledProp({ foo: 1 }, 'bar')).toBeTruthy();
    });

    it('should return false if default key exists on the object', () => {
      expect(isControlledProp({ foo: 1, defaultBar: 2 }, 'bar')).toBeFalsy();
    });
  });

  describe('getProp', () => {
    it('will return prop if "controlled"', () => {
      expect(getProp({ foo: 1 }, 'foo')).toBe(1);
    });

    it('will fallback to "default" prop if "uncontrolled"', () => {
      expect(getProp({ defaultFoo: 1 }, 'foo')).toBe(1);
    });
  });
});
