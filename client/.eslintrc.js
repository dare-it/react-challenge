module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    /**
     * @info General
     */
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:prettier/recommended',
    'plugin:promise/recommended',
    'plugin:unicorn/recommended',
    /**
     * @info React
     */
    'airbnb',
    'airbnb/hooks',
    'plugin:testing-library/react',
    /**
     * @info Prettier
     */
    'prettier',
    /**
     * @info Storybook
     */
    'plugin:storybook/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  plugins: [
    /**
     * @info General eslint plugins
     */
    'prettier',
    'promise',
    'simple-import-sort',
    'unicorn',
    /**
     * @info React eslint plugins
     */
    'testing-library',
  ],
  rules: {
    /**
     * @info eslint-plugin-import
     */
    'import/prefer-default-export': 'off',
    /**
     * @info simple-import-sort
     */
    'simple-import-sort/exports': 'error',
    'simple-import-sort/imports': 'error',
    /**
     * @info fix errors
     */
    'testing-library/no-await-sync-events': 'off',
    /**
     * @info unicorn rules
     */
    'unicorn/filename-case': 'off',
    'unicorn/import-index': 'off',
    'unicorn/import-style': 'off',
    'unicorn/no-null': 'off',
    'unicorn/no-reduce': 'off',
    'unicorn/no-static-only-class': 'off',
    'unicorn/numeric-separators-style': 'off',
    'unicorn/prefer-number-properties': 'off',
    'unicorn/prefer-ternary': 'off',
    'unicorn/prevent-abbreviations': 'off',
    /**
     * @info react rules
     */
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'function-expression',
      },
    ],
    /**
     * @info for React 17+
     */
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    /**
     * @info Project conventions
     */
    'arrow-body-style': ['error', 'as-needed'],
    'react/jsx-curly-brace-presence': 'off',
    'react/jsx-props-no-spreading': [
      'error',
      {
        custom: 'ignore',
      },
    ],
    /**
     * @info Temporary bugfixes
     */
    // TODO: problem with import from index.js
    'import/no-unresolved': 'off',
    // TODO: add prop-types for components later
    'react/prop-types': 'off',
    'react/require-default-props': 'off',
    'react/forbid-prop-types': 'off',
  },
  settings: {
    jest: {
      version: 'detect',
    },
    react: {
      version: 'detect',
    },
  },
  overrides: [
    {
      files: ['.eslintrc.js', '*.config.js'],
      rules: {
        'unicorn/prevent-abbreviations': 'off',
        'unicorn/prefer-module': 'off',
      },
    },
    {
      // files with my prop types
      files: [
        'src/ui/atoms/Button.jsx',
        'src/ui/atoms/InfoWithCaption.jsx',
        'src/ui/atoms/LocalizedDate.jsx',
        'src/ui/atoms/Money.jsx',
        'src/ui/atoms/NoContent.jsx',
        'src/ui/atoms/Error.jsx',
        'src/ui/molecules/ButtonGroup.jsx',
        'src/ui/molecules/Modal.jsx',
        'src/ui/organisms/AddNewBudgetRecord.modal.jsx',
        'src/ui/organisms/AddNewLedgerRecord.modal.jsx',
      ],
      rules: {
        'react/prop-types': 'error',
        'react/require-default-props': [
          'error',
          {
            ignoreFunctionalComponents: true,
          },
        ],
        'react/forbid-prop-types': 'error',
      },
    },
    {
      files: ['**/*.stories.*'],
      rules: {
        'import/no-anonymous-default-export': 'off',
        'react/jsx-curly-brace-presence': [
          'error',
          {
            props: 'always',
          },
        ],
      },
    },
    {
      files: ['**/*.test.js'],
      env: { 'jest/globals': true },
      plugins: ['jest', 'jest-dom'],
      extends: ['plugin:jest/all', 'plugin:jest-dom/recommended'],
    },
  ],
};
