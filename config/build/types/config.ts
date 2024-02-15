export type BuildMode = 'production' | 'development'

export interface buildPath {
    entry: string;
    output: string;
    html: string;
}

export interface BuildEnv {
    mode: BuildMode,
    port: number
}
export interface buildOptions {
    mode: BuildMode,
    paths: buildPath,
    isDev: boolean,
    port: number,
}