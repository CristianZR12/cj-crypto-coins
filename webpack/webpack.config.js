const { config } = require("dotenv");
config();

const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
const miniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: "./src/main.js",
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, "../dist"),
    },
    mode: "production",
    module: {
        rules: [{
                test: /\.css$/i,
                use: [{
                        loader: miniCssExtractPlugin.loader,
                    },
                    "css-loader",
                ],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [{
                        loader: miniCssExtractPlugin.loader,
                    },
                    "css-loader",
                    "sass-loader",
                ],
            },
            {
                test: /\.html$/i,
                loader: "html-loader"
            }
        ],
    },
    plugins: [new htmlWebpackPlugin({
            template: './src/index.html'
        }),
        new miniCssExtractPlugin()
    ],
    devServer: {
        port: process.env.PORT || 3500
    },
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    }
};