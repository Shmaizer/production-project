import path from 'path'
import HTMLWebpackPlugin from 'html-webpack-plugin'
import webpack from 'webpack'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { BuildOptions } from './types/config'

export function buildLoaders(options:BuildOptions): webpack.RuleSetRule[]{
    const cssLoaders:webpack.RuleSetRule={
        test: /\.s[ac]ss$/i,
        use:[
            options.isDev ? "style-loader": MiniCssExtractPlugin.loader,
            {
                loader: "css-loader",
                options: {
                    modules: {
                        auto: (resPath:string):boolean=> Boolean(resPath.includes('.module.')),
                        localIdentName: options.isDev?'[path][name]__[local]': '[hash:base64:8]'
                    },
                    
                    
                }
            },
            "sass-loader"
        ]
    } 
    const typescriptLoader:webpack.RuleSetRule =
        {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }
    return [typescriptLoader,cssLoaders]
}