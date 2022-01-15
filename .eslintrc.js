module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 13,
    sourceType: 'module',
  },
  rules: {
    'class-methods-use-this': 'off',
    'import/first': 'off',
    'quote-props': 'off',
    'quotes': 'off',
    'no-param-reassign': 'off',
    'no-console': 'off',
    'no-undef': 'off',
    'no-return-assign': 'off',
    'no-unused-vars': 'off',
    'no-use-before-define': 'offe',
  },
};
