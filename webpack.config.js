 var path = require("path")
 var webpack = require('webpack')
 var BundleTracker = require('webpack-bundle-tracker')

 module.exports = {
   context: __dirname,

        entry: {
          porcupine: path.resolve(__dirname, './app/porcupine/js/index.js')
        },
        output: {
            path: path.resolve(__dirname),
            filename: 'app/[name]/static/js/bundle.js'
        },

   plugins: [
     new BundleTracker({filename: './webpack-stats.json'}),
     new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
        Popper: ['popper.js', 'default'],
      })
   ],

   module: {
     loaders: [
       {
         test: /\.jsx?$/,
         exclude: /node_modules/,
         loader: 'babel-loader',
         query: {
           presets: ['react']
         }
       }, // to transform JSX into JS
     ],
   }
 }
