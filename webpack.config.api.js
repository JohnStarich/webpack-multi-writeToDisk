const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/api/index.js',
  target: 'node',
  devServer: {
    writeToDisk: true,
  },
  output: {
    path: path.resolve(__dirname, 'dist', 'api'),
  },
};
