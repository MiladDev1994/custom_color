module.exports = {
  // mode: 'development',
  // entry: './src/js/index.js',
  // devtool: 'inline-source-map',
  // target: 'electron-renderer',
  // watchOptions: {
  //   ignored: [
  //     path.resolve(__dirname,"/dist"),
  //     path.resolve(__dirname,"/results"),
  //     path.resolve(__dirname,"/logs")
  //   ],
  // },
  /**
   * This is the main entry point for your application, it's the first file
   * that runs in the main process.
   */
  entry: './src/main.js',
  // Put your normal webpack config below here
  module: {
    rules: require('./webpack.rules'),
  }
};
