var problem12 = {
    module: {
        rules: [
            {
                exclude: /(node_modules)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: "env"
                    }
                }
            }
        ]
    },
    name: "Problem 12",
    entry: "./Problem12/index.js",
    output: {
        path: __dirname + "/Problem12",
        filename: "index-bundled-compiled.js"
    }
};

module.exports = [problem12];