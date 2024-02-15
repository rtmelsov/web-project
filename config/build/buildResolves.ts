import {ResolveOptions} from 'webpack'

export function BuildResolves(): ResolveOptions {
    return {
      extensions: ['.tsx', '.ts', '.js'],
    }
}