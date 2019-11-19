const presets = [
  [
    '@babel/preset-env',
    {
      targets: {
        node: '11.15.0'
      }
    }
  ]
];

const plugins = [];
require('@babel/register')({ presets, plugins });
require('@babel/polyfill');
require('./app.js');
