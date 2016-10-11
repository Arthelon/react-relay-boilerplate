var path = require("path")

module.exports = {
    entry: path.resolve(__dirname, "app/index.js"),
    output: {
        filename: "bundle.js",
    },
    module: {
        loaders: [
            {
                test: /(\.js$|\.jsx$)/,
                loader: "babel",
                exclude: /node_modules/,
                query: {
                    presets: ["es2015", "react"],
                    plugins: [path.resolve(__dirname, "babelRelayPlugin.js"), "transform-flow-strip-types"]
                }
            }
        ]
    }
}