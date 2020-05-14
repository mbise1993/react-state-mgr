module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin', 'prettier', 'sort-imports-es6-autofix'],
  extends: [
    'react-app',
    'prettier/react',
    'prettier/@typescript-eslint',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  root: true,
  env: {
    jest: true,
  },
  rules: {
    'eslint-comments/no-unlimited-disable': 'off',
    'eslint-comments/no-unused-disable': 'off',
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        args: 'none',
      },
    ],
    'sort-imports-es6-autofix/sort-imports-es6': [
      'error',
      {
        ignoreCase: true,
        memberSyntaxSortOrder: ['none', 'all', 'single', 'multiple'],
      },
    ],
    'prettier/prettier': 'error',
  },
};
