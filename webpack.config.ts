import path from 'path'
import { buildWebpackConfig } from './config/build/buildWebpacConfig'
import { buildPath, buildOptions, BuildEnv } from './config/build/types/config'



export default (env: BuildEnv) => {

  const paths: buildPath = {
    entry: path.resolve(__dirname, 'src'),
    output: path.resolve(__dirname, 'bundles_'),
    html: path.resolve(__dirname, 'public', 'index.html'),
  }

  const mode = env.mode || 'development'
  const PORT = env.port || 3000

  const isDev = mode === 'development'

  const options: buildOptions = {
    mode,
    paths: paths,
    isDev,
    port: PORT
  }

  const config = buildWebpackConfig(options)
  return config
};
