const webpack = require("webpack");

const commonPaths = require("./paths");

module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  output: {
    filename: "[name].js",
    path: commonPaths.outputPath,
    chunkFilename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.(css)$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
              modules: true,
              camelCase: true,
              localIdentName: "[local]___[hash:base64:5]",
            },
          },
          "sass-loader",
        ],
      },
    ],
  },
  devServer: {
    proxy: {
      "/v1": {
        target: "https://manage.skyflowapis.dev",
        pathRewrite: { "^/v1": "/v1" },
        secure: false,
        changeOrigin: true,
      },
      "/vault": {
        target: "https://sb.area51.vault.skyflowapis.dev",
        pathRewrite: { "^/vault": "" },
        secure: false,
        changeOrigin: true,
      },
    },
    contentBase: commonPaths.outputPath,
    compress: true,
    hot: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers":
        "X-Requested-With, content-type, Authorization",
    },
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
};
