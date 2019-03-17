const base = require('./webpack.config.js')

module.exports = Object.assign({}, base, {
  mode: 'production', 
  externals: {
    react: {
      commonjs: 'react', // root: The library should be available as a global variable (e.g. via a script tag). commonjs: The library should be available as a CommonJS module.commonjs2: Similar to the above but where the export is module.exports.default. amd: Similar to commonjs but using AMD module system.
      commonjs2: 'react',
      amd: 'react',
      root: 'React'
    },
    'react-dom': {
      commonjs: 'react-dom',
      commonjs2: 'react-dom',
      amd: 'react-dom',
      root: 'ReactDom'
    }
  }
})

