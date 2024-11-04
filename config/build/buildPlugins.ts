import path from 'path'
import HTMLWebpackPlugin from 'html-webpack-plugin'
import webpack from 'webpack'
import { BuildOptions } from './types/config'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
export function buildPlugins(pathsHtml:string): webpack.WebpackPluginInstance[]{
    return[
        new webpack.ProgressPlugin(),
        new HTMLWebpackPlugin({
            template:pathsHtml
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css'
        })
    ]
}