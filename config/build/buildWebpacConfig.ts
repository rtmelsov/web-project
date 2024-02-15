import { buildOptions } from './types/config'
import webpack from 'webpack'
import path from 'path'
import { BuildPlugins } from './buildPlugins'
import { BuildLoaders } from './buildLoaders'
import { BuildResolves } from './buildResolves'
import { buildDevServer } from './buildDevServer'

export function buildWebpackConfig(options: buildOptions): webpack.Configuration {
  const { paths, mode, isDev } = options
  const config: webpack.Configuration = {
    mode,
    entry: paths.entry,
    devtool: isDev ? 'inline-source-map' : false,
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
    devServer: isDev ? buildDevServer(options) : undefined,
  };
  return config
}