import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import webpack from 'webpack'

const sourcePath = path.resolve(__dirname, 'src');
const publicPath = path.resolve(__dirname, 'public', 'index.html');
const buildPath = path.resolve(__dirname, 'bundles_');

const config = {
  mode: 'development',
  entry: sourcePath,
  output: {
      filename: "[name].[contenthash].js",
      path: buildPath,
      clean: true
  },
  module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
      ],
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },
  plugins: [
      new HtmlWebpackPlugin({
          filename: 'index.html',
          template: publicPath,
          title: 'SkyBridge Invest',
      }),

      new webpack.ProgressPlugin({
      activeModules: false,
      entries: true,
      modules: true,
      modulesCount: 5000,
      profile: false,
      dependencies: true,
      dependenciesCount: 10000,
      percentBy: null,
  })
],

};

export default config;
