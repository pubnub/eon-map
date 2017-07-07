var webpack = require("webpack");

module.exports = {
  entry:   "./entry.js",
  output:  {
    path:     __dirname,
    filename: "eon-map.js",
    library: ["eon", "map"],
    libraryTarget: "umd"
  },
  module: {
    loaders: [
      { test: /\.json$/, loader: "json-loader" },
      { test: /\.css$/, loader: "style-loader!css-loader" },
      { test: /\.png$/, loader: "url-loader?limit=100000" },
      { test: /\.svg$/, loader: 'svg-inline-loader' }
    ]
  }
};
