const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (w, config) => {
    const { mode = 'development' } = config;
    const isDev = mode === 'development';

    return {
        mode,
        entry: {
            app: ['./src/index.js']
        },
        plugins: [
            ...(!isDev ? [new CleanWebpackPlugin()] : []),
            ...(!isDev
                ? [
                      new CopyWebpackPlugin({
                          patterns: [
                              { from: './public/images', to: 'images' },
                              { from: './public/favicons', to: 'favicons' },
                              { from: './public/site.webmanifest' }
                          ]
                      })
                  ]
                : []),
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
            filename: '[name]-[contenthash].js',
            chunkFilename: '[name]-[contenthash].js',
            assetModuleFilename: 'images/[hash][ext][query]'
        },
        resolve: {
            extensions: ['.js', '.jsx', '.json']
        },
        optimization: {
            runtimeChunk: 'single',
            moduleIds: 'deterministic',
            splitChunks: {
                cacheGroups: {
                    vendor: {
                        test: /[\\/]node_modules[\\/]/,
                        name: 'vendors',
                        chunks: 'all'
                    },
                    styles: {
                        test: /\.css$/,
                        name: 'styles',
                        chunks: 'all',
                        enforce: true
                    }
                }
            }
        },
        ...(isDev && {
            devtool: 'source-map',
            devServer: {
                open: false,
                historyApiFallback: true,
                contentBase: './public',
                port: 9015
            }
        }),
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
                },
                {
                    test: /\.(jpe?g|png)$/i,
                    type: 'asset/resource'
                }
            ]
        }
    };
};
