import {buildOptions} from './types/config'
import webpack from 'webpack'
import path from 'path'
import {BuildPlugins} from './buildPlugins'
import {BuildLoaders} from './buildLoaders'
import {BuildResolves} from './buildResolves'

export function buildWebpackConfig(options: buildOptions): webpack.Configuration {
  const {paths, mode} = options
  const config:webpack.Configuration = {
    mode,
    entry: paths.entry,
    output: {
        filename: "[name].[contenthash].js",
        path: paths.output,
        clean: true
    },
    module: {
        rules: BuildLoaders(),
      },
      resolve: BuildResolves(),
    plugins: BuildPlugins(paths),
  
  };
  return config
}