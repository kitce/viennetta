const mdColors = require('material-colors');

module.exports = {
  theme: {
    screens: {
      'mobile': '640px',              // @media (min-width: 640px)
      'tablet': '768px',              // @media (min-width: 768px)
      'laptop': '1024px',             // @media (min-width: 1024px)
      'desktop': '1280px'             // @media (min-width: 1280px)
    },
    colors: {
      transparent: 'transparent',
      ...mdColors
    }
  },
  variants: {},
  plugins: []
};
