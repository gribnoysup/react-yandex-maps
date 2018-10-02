import setValue from './set';

describe('set', () => {
  it('should set deeply nested value by provided path', () => {
    expect(setValue({}, 'foo.bar.buz', '👍')).toMatchInlineSnapshot(`
Object {
  "foo": Object {
    "bar": Object {
      "buz": "👍",
    },
  },
}
`);

    expect(setValue({}, ['very', 'deeply', 'nested'], '😸'))
      .toMatchInlineSnapshot(`
Object {
  "very": Object {
    "deeply": Object {
      "nested": "😸",
    },
  },
}
`);
  });

  it('should overwrite the value by default', () => {
    expect(setValue({ updateMe: '🙏' }, 'updateMe', '🐶'))
      .toMatchInlineSnapshot(`
Object {
  "updateMe": "🐶",
}
`);
  });

  it('should keep the value intact if the flag is provided', () => {
    expect(setValue({ dontTouchMe: '🔥' }, 'dontTouchMe', '❄️', true))
      .toMatchInlineSnapshot(`
Object {
  "dontTouchMe": "🔥",
}
`);
  });
});
