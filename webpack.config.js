const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'production', // production
  entry: {
    vincent: './lib/index.tsx'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    library: 'vincent',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Vincent UI',
      template: 'index.html'
    })
  ],
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
}