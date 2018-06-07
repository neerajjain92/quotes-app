var webpackConfig = require('./webpack.test.js');

module.exports = function (config) {
  var _config = {
    autoWatch: false,
    basePath: '../',

    frameworks: ['jasmine'],

    files: [
      {
        pattern: './config/karma-test-shim.js',
        watched: true
      }
    ],

    preprocessors: {
      './config/karma-test-shim.js': ['webpack']
    },

    webpack: webpackConfig,

    webpackMiddleware: {
      stats: 'errors-only'
    },

    webpackServer: {
      noInfo: true
    },

    browserConsoleLogOptions: {
      level: 'log',
      format: '%b %T: %m',
      terminal: true
    },

    reporters: config.coverage ? ['kjhtml', 'dots', 'coverage-istanbul'] : ['kjhtml', 'dots'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false
  };

  config.set(_config);
};
