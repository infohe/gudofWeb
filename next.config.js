const withFonts = require('next-fonts');
module.exports = withFonts({
   
  webpack(config, options) {
    return config;
  }
});
const debug = process.env.NODE_ENV !== "production";
module.exports = {
  exportPathMap: function () {
    return {
      "/": { page: "/" },
     
    }
  },
  assetPrefix: !debug ? 'https://infohe.github.io/gudofWeb/index' : '',
}