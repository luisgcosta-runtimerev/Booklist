module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['plugin:react/recommended', 'airbnb', 'prettier'],
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    babelOptions: {
      presets: ['@babel/preset-react']
    },
    requireConfigFile: false
  },
  plugins: ['react', 'prettier'],
  rules: {
    'prettier/prettier': 2,
    'react/jsx-filename-extension': 'off',
    'react/prop-types': 'off',
    'react/jsx-props-no-spreading': 'off'
  }
};
