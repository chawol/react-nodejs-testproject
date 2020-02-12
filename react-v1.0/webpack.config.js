const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path');
const webpack = require("webpack")
const htmlPlugin = new HtmlWebPackPlugin({
    template: "./src/index.html",
    filename: "./index.html"
});
module.exports = {
    entry: ['react-hot-loader/patch', "./src/index.js"],
    output: { // NEW
        path: path.join(__dirname, 'dist'),
        filename: "[name].js"
    }, // NEW Ends
    plugins: [htmlPlugin, new webpack.HotModuleReplacementPlugin()],
    module: {
        rules: [
            {
                test: /\.(jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {presets: ['@babel/preset-react', '@babel/preset-env']}
                }
            },
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {presets: ['@babel/preset-env']}
                }
            },
            {
                test: /\.s?css$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [{
                    loader: 'file-loader', options: {}
                }]
            }

        ]
    }
};