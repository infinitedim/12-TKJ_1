const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: "./src/js/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
          },
          {
            test: /\.js$/i,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              }
            }
          }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "index.html",
            inject: "body",
            hash: true,
            minify: {
                collapseWhitespace: true,
                removeComments: true,
                useShortDoctype: true,
                minifyCSS: true,
                minifyJS: true,
                minifyURLs: true
            },
        }),
        new MiniCssExtractPlugin({
            filename: "style.min.css"
        })
    ]
}