// const webpack = require('webpack')

const path = require('path')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const nodeExternals = require('webpack-node-externals')

const buildConfig = {
    src: './app/server.js',
    build: 'build',
    target: 'server.js',
    rootContext: path.resolve(__dirname, 'src')
}

// const fs = require('fs')
// const nodeModules = fs.readdirSync(path.resolve(__dirname, 'node_modules'))
//     .filter(x => ['.bin'].indexOf(x) === -1)
//     .reduce((acc, mod) => ({...acc, [mod]: `commonjs ${mod}`}), {})

module.exports = {
    mode: 'development',
    context: buildConfig.rootContext,
    entry: {
        server: buildConfig.src,
    },
    output: {
        filename: '[name].bundle.[hash].js',
        publicPath: '/',
        path: path.resolve(__dirname, buildConfig.build),
        clean: true,
    },
    target: 'web',
    node: {
        __dirname: false,
        __filename: false,
    },
    externals: [nodeExternals()],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin()
    ],
    resolve: {
        fallback: { "assert": false }
    },
}
