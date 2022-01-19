const baseConfig = require("./webpack.config.base");

module.exports = ({ port = 8090 }) => ({
  ...baseConfig,
  output: {
    publicPath: "/",
  },
  mode: "development",
  devServer: {
    historyApiFallback: true,
    hot: true,
    port,
  },
});
