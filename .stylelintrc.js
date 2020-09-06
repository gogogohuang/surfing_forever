module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-css-modules'],
  processors: ['stylelint-processor-styled-components'],
  plugins: ['stylelint-scss'],
  rules: {
    'no-empty-source': null,
  },
  ignoreFiles: ["src/defines/sdk/defines/*.d.ts"]
};
