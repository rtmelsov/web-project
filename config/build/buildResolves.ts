import {ResolveOptions} from 'webpack'

export function BuildResolves(extensions: string[]): ResolveOptions {
    return {
      extensions,
    }
}