'use strict';

// const path = require('path');
const webpack = require('webpack');
const application = require('./webpack.base');

application.mode = 'development';
application.devtool = 'inline-source-map';
application.devServer = {
    port: 8300,
    host: '0.0.0.0',
    hot: true,
    proxy: {}
};
application.plugins.push(
    new webpack.HotModuleReplacementPlugin()
);

module.exports = application;