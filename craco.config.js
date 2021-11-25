/* eslint-disable global-require */
module.exports = {
  plugins: [],
  style: {
    postcss: {
      plugins: [require('tailwindcss'), require('autoprefixer')],
    },
  },
};
