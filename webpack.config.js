const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    main: "./src/app.ts",
  },
  output: {
    filename: "[name].js",
    path: path.resolve("./dist"),
  },
  devServer: {
    publicPath: "/",
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: "/node_modules",
        loader: "babel-loader",
        options: {
          presets: [
            [
              "@babel/preset-env",
              {
                targets: {
                  browsers: ["last 2 versions"],
                },
              },
            ],
            "@babel/preset-react",
          ],
        },
      },
    ],
  },
  plugins: [new CleanWebpackPlugin(), new HtmlWebpackPlugin({})],
};
