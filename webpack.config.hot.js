const webpack = require('webpack');
const config = require('./webpack.config.js');

config.devtool = "eval-source-map";

config.entry = [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    config.entry
];

config.module.loaders[0].loaders = ["react-hot", "babel"];

config.plugins = [
    new webpack.HotModuleReplacementPlugin()
];

module.exports = config;