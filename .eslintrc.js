module.exports = {
  plugins: ['simple-import-sort'],
  extends: ['@white-matrix/eslint-config'],
  // extends: ['next/core-web-vitals', '@white-matrix/eslint-config'],
  parserOptions: {
    requireConfigFile: false,
    project: require.resolve('./tsconfig.json')
  },
  rules: {
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'off'
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [['@', './src']],
        extensions: ['.js', '.ts', '.tsx', '.jsx', '.json']
      }
    }
  }
};
