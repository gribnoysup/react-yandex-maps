import { omit } from './omit';

describe('omit', () => {
  it('should remove specified keys from the object', () => {
    expect(omit({ foo: 1, bar: 2, buz: 3 }, ['buz'])).toMatchInlineSnapshot(`
Object {
  "bar": 2,
  "foo": 1,
}
`);
  });
});
