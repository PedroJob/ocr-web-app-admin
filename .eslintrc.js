module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  parser: '@typescript-eslint/parser', 
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  settings: {
    react: {
      version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
		},
	},
  extends: [
    'next',
    'next/core-web-vitals',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended', 
  ],
  plugins: ['prettier', 'react', 'react-hooks'],
  rules: {
    'prettier/prettier': ['off', { endOfLine: 'auto' }],
    eqeqeq: 'off',
    "@typescript-eslint/no-unused-vars": "off",
  },
};
