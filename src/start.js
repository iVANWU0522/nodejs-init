const presets = [
  [
    '@babel/preset-env',
    {
      targets: {
        node: '12.13.1'
      }
    }
  ]
];

const plugins = [];
require('@babel/register')({ presets, plugins });
require('@babel/polyfill');
require('./app.js');
