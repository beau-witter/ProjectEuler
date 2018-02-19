var common = {
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
    }
}

var problem1 = Object.assign({}, common, {
    name: "Problem 1",
    entry: "./Problem1/index.js",
    output: {
        path: __dirname + "/Problem1",
        filename: "index-bundled-compiled.js"
    }
});

var problem2 = Object.assign({}, common, {
    name: "Problem 2",
    entry: "./Problem2/index.js",
    output: {
        path: __dirname + "/Problem2",
        filename: "index-bundled-compiled.js"
    }
});

var problem12 = Object.assign({}, common, {
    name: "Problem 12",
    entry: "./Problem12/index.js",
    output: {
        path: __dirname + "/Problem12",
        filename: "index-bundled-compiled.js"
    }
});

module.exports = [problem1, problem2, problem12];