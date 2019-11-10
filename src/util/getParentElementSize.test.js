import getParentElementSize from './getParentElementSize';

describe('getParentElementSize', () => {
  it('should return object with style prop when default width and height', () => {
    const expected = { style: { width: 320, height: 320 } };
    expect(getParentElementSize({ width: 320, height: 320 })).toMatchObject(
      expected
    );
  });

  it('should return object with style prop when it is provided', () => {
    const expected = { style: { width: 300, height: 200 } };
    expect(getParentElementSize(expected)).toMatchObject(expected);
  });

  it('should return object with classname when it is provided', () => {
    const expected = { className: 'test' };
    expect(getParentElementSize(expected)).toMatchObject(expected);
  });

  it('should return object with style and classname props when provided', () => {
    const expected = { style: { width: 300, height: 200 }, className: 'test' };
    expect(getParentElementSize(expected)).toMatchObject(expected);
  });

  it('should return `style` prop if provided and omit width, height', () => {
    const expected = { style: { width: 320, height: 240 } };
    expect(
      getParentElementSize({
        width: '100%',
        height: '100%',
        style: { width: 320, height: 240 },
      })
    ).toMatchObject(expected);
  });

  it('should return `className` prop if provided and omit width, height', () => {
    const expected = { className: 'test' };
    expect(
      getParentElementSize({
        width: '100%',
        height: '100%',
        className: 'test',
      })
    ).toMatchObject(expected);
  });
});
