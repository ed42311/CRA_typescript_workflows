module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
    'react-app',
  ],
  rules: {
    '@typescript-eslint/camelcase': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/interface-name-prefix': [2, { prefixWithI: 'always' }],
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    'react/display-name': 0,
    'react/prop-types': 0,
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  env: {
    jest: true,
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  settings: {
    react: {
      pragma: 'React',
      version: 'detect',
    },
  },
};
