import path from 'path'
import {buildWebpackConfig} from './config/build/buildWebpacConfig'
import {buildPath, buildOptions} from './config/build/types/config'

const paths: buildPath = {
    entry: path.resolve(__dirname, 'src'),
    output: path.resolve(__dirname, 'bundles_'),
    html: path.resolve(__dirname, 'public', 'index.html'),

}

const mode = 'development'
const isDev = mode === 'development'

const options: buildOptions = {
  mode,
  paths: paths,
  isDev
}

const config = buildWebpackConfig(options)

export default config;
