const path = require("path");
const webpack = require("webpack");

module.exports = {
    mode: "development",
    entry: {
        problem1: "./Problem1/index.ts",
        problem2: "./Problem2/index.ts",
        problem3: "./Problem3/index.ts",
        problem4: "./Problem4/index.ts",
        problem12: "./Problem12/index.ts"
    },
    output: {
        path: path.resolve(__dirname, "js"),
        filename: "[name].entry.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/, use: "babel-loader", exclude: /node_modules/
            },
            {
                test: /\.ts$/, use: ["babel-loader", "ts-loader"], exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: [".js", ".ts"],
        modules: [
            "node_modules"
        ],
        alias: {
            "@": path.resolve(__dirname, "Shared")
        }
    }
}