const path = require("path");
const webpack = require("webpack");

module.exports = {
    devtool: 'source-map',
    entry: "./src/index.js",
    output: {
        path: path.join(__dirname, "dist"),
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: [/node_modules/],
                loaders: ["babel"],
                include: path.join(__dirname, "src")
            },
            { test: /\.css$/, loader: "style!css" },
            { test: /\.scss$/, loader: "style!css?modules&camelCase!postcss" },
            { test: /\.(png|jpg|gif)$/, loader: "url?limit=8192" },
            { test: /\.html$/, loader: "file?name=[name].[ext]" },
            { test: /\.(otf|eot|svg|ttf|woff2?)$/, loader: "file" }
        ]
    },
    postcss: function () {
        return [autoprefixer];
    }
};
