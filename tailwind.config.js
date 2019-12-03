const mdColors = require('material-colors');

module.exports = {
  theme: {
    screens: {
      'xs': { max: '479px' },
      'sm': { min: '480px', max: '767px' },
      'md': { min: '768px', max: '1023px' },
      'lg': { min: '1024px', max: '1279px' },
      'xl': { min: '1280px' }
    },
    colors: {
      transparent: 'transparent',
      ...mdColors
    }
  },
  variants: {},
  plugins: []
};
