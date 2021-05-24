const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = () => {
    return {
        mode: 'development',
        entry: {
            app: ['./src/index.js']
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: 'public/index.html'
            })
        ],
        output: {
            path: path.resolve(__dirname, 'dist'),
            publicPath: '',
            filename: '[name]-[contenthash].js',
            chunkFilename: '[name]-[contenthash].js'
        },
        devtool: 'source-map',
        devServer: {
            open: false,
            historyApiFallback: true,
            contentBase: './',
            port: 9015
        },
        module: {
            rules: [
                {
                    test: /\.jsx?$/,
                    exclude: /node_modules/,
                    use: [
                        {
                            loader: 'babel-loader',
                            options: {
                                presets: ['@babel/preset-env', '@babel/preset-react'],
                                plugins: [
                                    '@babel/plugin-transform-runtime',
                                    '@babel/plugin-syntax-dynamic-import'
                                ]
                            }
                        }
                    ]
                }
            ]
        }
    };
};
