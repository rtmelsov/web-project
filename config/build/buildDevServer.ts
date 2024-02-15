import {buildOptions} from './types/config'
import type { Configuration as DevServerConfiguration } from 'webpack-dev-server'

export function buildDevServer(options: buildOptions): DevServerConfiguration {
    const {port} = options
  return {
    port,
    open: true,
  }
}