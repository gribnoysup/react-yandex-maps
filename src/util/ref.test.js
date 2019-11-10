import applyRef from './ref';

describe('ref', () => {
  it('cleans oldRef function, if possible', () => {
    const oldRef = jest.fn();
    applyRef(oldRef);
    expect(oldRef).toHaveBeenCalledWith(null);
  });

  it('cleans oldRef object, if possible', () => {
    const oldRef = { current: 'YMaps' };
    applyRef(oldRef);
    const expected = { current: null };
    expect(oldRef).toMatchObject(expected);
  });

  it('applies newRef function and call it with value, if possible', () => {
    const newRef = jest.fn();
    const value = 'YMaps';
    applyRef(null, newRef, value);
    expect(newRef).toHaveBeenCalledWith(value);
  });

  it('applies newRef object and set current to value, if possible', () => {
    const newRef = { current: null };
    const value = 'YMaps';
    applyRef(null, newRef, value);
    const expected = { current: value };
    expect(newRef).toMatchObject(expected);
  });
});
