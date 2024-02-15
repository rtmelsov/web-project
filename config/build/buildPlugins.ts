import HtmlWebpackPlugin from 'html-webpack-plugin'
import {WebpackPluginInstance, ProgressPlugin} from 'webpack'
import { buildPath } from './types/config'

export function BuildPlugins({html}: buildPath): WebpackPluginInstance[] {
    return [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: html,
            title: 'SkyBridge Invest',
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