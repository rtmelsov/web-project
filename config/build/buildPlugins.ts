import HtmlWebpackPlugin from 'html-webpack-plugin'
import ESLintPlugin from 'eslint-webpack-plugin'
import {WebpackPluginInstance, ProgressPlugin} from 'webpack'
import { buildOptions } from './types/config'

export function BuildPlugins({paths, extensions}: buildOptions): WebpackPluginInstance[] {
    return [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: paths.html,
            title: 'SkyBridge Invest',
        }),

        new ESLintPlugin({
            // Plugin configuration
            extensions, // Specify the file extensions to lint
          }),
      
  
        new ProgressPlugin({
        activeModules: false,
        entries: true,
        modules: true,
        modulesCount: 5000,
        profile: false,
        dependencies: true,
        dependenciesCount: 10000,
        percentBy: null,
    })
  ]
}