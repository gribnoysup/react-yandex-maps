module.exports = {
  extends: ['standard', 'standard-react'],
  rules: {
    semi: 'off',
    'jsx-quotes': ['error', 'prefer-double'],
    'space-before-function-paren': 'off',
    'comma-dangle': [
      'error',
      {
        arrays: 'never',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'never',
      },
    ],
    'react/no-unused-prop-types': 'warning',
  },
};
