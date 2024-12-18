//import path from 'path'
//import HTMLWebpackPlugin from 'html-webpack-plugin'
import webpack from 'webpack'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { BuildOptions } from './types/config'

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {

    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack']
    }

    const cssLoaders: webpack.RuleSetRule = {
        test: /\.s[ac]ss$/i,
        use: [
            options.isDev ? "style-loader" : MiniCssExtractPlugin.loader,
            {
                loader: "css-loader",
                options: {
                    modules: {
                        auto: (resPath: string): boolean => Boolean(resPath.includes('.module.')),
                        localIdentName: options.isDev ? '[path][name]__[local]' : '[hash:base64:8]'
                    },


                }
            },
            "sass-loader"
        ]
    }
    const babelLoader = {
        test: /\.(js|jsx|tsx)/,
        exclude: /node_module/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: [
                    ['@babel/preset-env', { targets: "defaults" }]
                ],
                "plugins": [
                    [
                        "i18next-extract", {
                            "locales": ["ru", "en"],
                            "keyAsDefaultValue": true
                        }
                    ]
                ]
            }
        }
    }
    const typescriptLoader: webpack.RuleSetRule =
    {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }
    const fileLoader = {
        test: /\.(png|jpe?g|gif|woff2|woff)$/i,
        use: [
            {
                loader: 'file-loader',
            }
        ]
    }
    return [babelLoader, typescriptLoader, cssLoaders, svgLoader, fileLoader]
}