const ExtractTextPlugin = require("extract-text-webpack-plugin");
const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');

const data = {
  paths: ['/'],
};

module.exports = {
  entry: {
    main: './index.js',
  },

  output: {
    filename: '[name].js',
    path: 'dist',
    libraryTarget: 'umd',
  },

  module: {
    loaders: [{
      test: /\.css$/,
      loader: ExtractTextPlugin.extract("style-loader", "css-loader")
    }, {
      test: /\.md$/,
      loader: "html!markdown",
    }, {
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader")
    }, {
      test: /\.html$/,
      loader: "html"
    }]
  },
  htmlLoader: {
    interpolate: true,
  },
  plugins: [
    new StaticSiteGeneratorPlugin('main', data.paths, data),
    new ExtractTextPlugin("[name].css")
  ]
};
