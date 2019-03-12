const path = require('path')

module.exports = {
  mode: 'development',
  entry: {
    vincent: './lib/index.tsx'
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
  }
}