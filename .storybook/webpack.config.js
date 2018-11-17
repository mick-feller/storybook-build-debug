const path = require("path");
const fs = require('fs');

module.exports = {
  module: {
    rules: [
      {
        test: /\.stories\.jsx?$/,
        loaders: [require.resolve('@storybook/addon-storysource/loader')],
        enforce: 'pre',
      },
      {
        test: /\.scss$/,
        loaders: [
          "style-loader",
          "css-loader",
          "sass-loader"
        ],
        include: path.resolve(__dirname, "../")
      },
      {
        test: /\.svg$/,
        loader: 'raw-loader'
      }
    ]
  }
};
