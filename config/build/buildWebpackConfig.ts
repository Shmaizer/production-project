import { BuildOptions } from "./types/config";
import webpack from 'webpack'
import path from 'path'
import { buildPlugins } from './buildPlugins'
import { buildLoaders } from './buildLoaders'
import { buildResolvers } from './buildResolvers'
import { buildDevServer } from "./buildDevServer";
export function buildWebpackConfig(options: BuildOptions): webpack.Configuration{
    const {mode,paths,isDev} = options
    
    return {
        mode: mode,
        entry: paths.entry,
        output:{
            filename: 'bundle.js',
            path: paths.build,
            clean: true
        },
        resolve:buildResolvers(),
        module: {
            rules: buildLoaders(options)
        },
        plugins:buildPlugins(paths.html),
        devtool: isDev ? 'inline-source-map':undefined,
        devServer: isDev? buildDevServer(options): undefined
    }
}