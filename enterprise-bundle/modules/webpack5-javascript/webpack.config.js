const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/,
                // if using plain CSS:
                use: ["style-loader", "css-loader"]

                // if using sass:
                // use: ["style-loader", "css-loader", "sass-loader"]
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        })
    ]
};
