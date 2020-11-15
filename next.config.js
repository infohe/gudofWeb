const withLess = require('@zeit/next-less')
const lessToJS = require('less-vars-to-js')
const fs = require('fs')
const path = require('path')
const withFonts = require('next-fonts');

// Where your antd-custom.less file lives
const themeVariables = lessToJS(
  fs.readFileSync(path.resolve(__dirname, './assets/antd-custom.less'), 'utf8')
)

module.exports = withFonts(withLess({
  target: 'serverless',
  lessLoaderOptions: {
    javascriptEnabled: true,
    modifyVars: themeVariables, // make your antd custom effective
  },
  javascriptEnabled:true,
  enableSvg: true,

  
  webpack: (config, { isServer }) => {
 
    if (isServer) {
      const antStyles = /antd\/.*?\/style.*?/
      const origExternals = [...config.externals]
      config.externals = [
        (context, request, callback) => {
          if (request.match(antStyles)) return callback()
          if (typeof origExternals[0] === 'function') {
            origExternals[0](context, request, callback)
          } else {
            callback()
          }
        },
        ...(typeof origExternals[0] === 'function' ? [] : origExternals),
      ]
      
      config.module.rules.unshift({
        test: antStyles,
        use: 'null-loader',
      })
    }
   
         return config
  },

  trailingSlash:true,
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
      // '/Mechanical/Belt-Length': { page: '/Mechanical/Belt-Length' },

      '/Mechanical/Belt-Length': { page: '/Mechanical/[name]', query: { name: 'Belt-Length' } },
      '/Mechanical/Weber-Number': { page: '/Mechanical/[name]', query: { name: 'Weber-Number' } },

          }
  },
}));


// const withCSS = require("@zeit/next-css");

// module.exports = withCSS({
//     cssModules :true,
//     // cssLoaderOptions: {
//     //   importLoaders: 1,
//     //   localIdentName: "[local]___[hash:base64:5]",
//     // },
//     webpack: function (config) {
//       config.module.rules.push(
//         {
//           test: /\.css$/i,
//         //   include: [
//         //     path.resolve(__dirname, "not_exist_path")
//         // ],
//           use:[
//           //   {loader:'css-loader',
//           // options: {
//           //   url: true,
//           //   sourceMap: true,
//           //   import:true
//           // }}
//           {loader:'style-loader',
//         options:{
//           injectType: 'singletonStyleTag',
//           insert: 'body',
//         }}
//         ]
        
//         },
     
//         {
//         test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
//         use: {
//           loader: 'url-loader',
//           options: {
//             limit: 100000,
//             name: '[name].[ext]'
//           }
//         }
//       })
//       return config
//     }
//   }
// );


