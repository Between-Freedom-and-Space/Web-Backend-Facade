const buildConfig = {
    "src": "src/app/server.js",
    "build": "build",
    "target": "server.js"
}

const path = require('path')
const nodeExternals = require('webpack-node-externals')

const ROOT_PATH = path.resolve(__dirname, '..')
const PATH = path.resolve(ROOT_PATH, buildConfig.src)

module.exports = (env, args) => {
    return {
        entry: {
            build: PATH
        },
        mode: "production",
        output: {
            filename: buildConfig.target,
            publicPath: "/",
            path: path.resolve(ROOT_PATH, buildConfig.build)
        },
        resolve: {
            extensions: [
                ".js", ".json"
            ],
            modules: [
                path.resolve(ROOT_PATH, 'node_modules')
            ]
        },
        target: 'node',
        externals: [nodeExternals()],
        node: {
            __dirname: false,
            __filename: false,
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    include: PATH,
                    exclude: /node_modules/,
                    use: {
                        loader: "babel-loader"
                    },
                }
            ]

        }
    }
}