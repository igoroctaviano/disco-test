const webpack = require("webpack");

module.exports = {
  entry: ["./src/index.js", "react-hot-loader/patch"],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "less-loader"]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"]
      }
    ]
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"]
  },
  output: {
    path: __dirname + "/dist",
    publicPath: "/",
    filename: "bundle.js"
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      // WIP: Access environment variables locally
      "process.env": JSON.stringify(process.env),
      "process.env.DISCOGS_TOKEN": JSON.stringify(process.env.DISCOGS_TOKEN)
    })
  ],
  devServer: {
    contentBase: "./dist",
    hot: true,
    port: 8080,
    host: "0.0.0.0" // to accept connections from outside container
  }
};
