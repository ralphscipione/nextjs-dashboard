module.exports = {
  extends: ['stylelint-config-standard'],
  rules: {
    'property-no-vendor-prefix': null,
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'tailwind',
          'apply',
          'variants',
          'responsive',
          'screen',
          'layer',
          'base',
          'components',
          'utilities',
        ],
      },
    ]
  },
};
