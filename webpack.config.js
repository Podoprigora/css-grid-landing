const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = () => {
    return {
        mode: 'development',
        entry: {
            app: ['./src/index.js']
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: '[name].css',
                chunkFilename: '[name].css'
            }),
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
        resolve: {
            extensions: ['.js', '.jsx', '.json']
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
                    test: /\.(js)x?$/,
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
                },
                {
                    test: /\.(css|scss)$/,
                    use: [
                        {
                            loader: MiniCssExtractPlugin.loader,
                            options: {}
                        },
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true
                            }
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                sourceMap: true
                            }
                        },
                        {
                            loader: 'resolve-url-loader'
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true
                            }
                        }
                    ]
                }
            ]
        }
    };
};
