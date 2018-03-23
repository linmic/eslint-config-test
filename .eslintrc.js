module.exports = {
  parser: 'babel-eslint',
  extends: 'airbnb',
  plugins: ['flowtype', 'jest'],
  settings: {
    'import/resolver': {
      webpack: {
        config: 'webpack.config.js',
      },
    },
  },
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'jsx-a11y/href-no-hash': 'off',
    'jsx-a11y/anchor-is-valid': ['warn', { aspects: ['invalidHref'] }],
    'jsx-a11y/aria-role': [
      2,
      {
        ignoreNonDOM: true,
      },
    ],
    'import/no-unresolved': [2, { caseSensitive: false }],
    'global-require': 0,
    'spaced-comment': 0,
    'react/prop-types': 0,
    'max-len': 0,
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        functions: 'ignore',
      },
    ],
    'arrow-parens': ['error', 'as-needed'],
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: '*', next: 'return' },
    ],
  },
  globals: {
    window: true,
    document: true,
    navigator: true,
    XMLHttpRequest: true,
    Event: true,
    SyntheticEvent: true,
    HTMLButtonElement: true,
    HTMLInputElement: true,
  },
  env: {
    'jest/globals': true,
  },
};
