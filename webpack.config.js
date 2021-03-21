const path = require('path');

module.exports = {
  entry: './index.js',
  resolve: {
    extensions: [".ts", ".js"],
    symlinks: false,
    modules: [path.resolve('node_modules')],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  mode: 'production'
};
