const { ModuleFederationPlugin} = require ("webpack").contain;
const path = require("path");

module.exports = {
    entry: "./src/index.js",
    mode: "development",
    output: {
        publicPath: "http://localhost:3000/",
    },
    resolve : {
        extensions: [".ts", ".tsx", ".js"]
    },

    devServer: {
        port: 3000,
        static: path.join(__dirname, "public"),
        hot: true,
    },
    plugin: [
        new ModuleFederationPlugin({
            name: "shell",
            remotes: {
                headerMFE: "headerMFE@http://localhost:3001/remoteEntry.js",
            },
            shared : ["react", "react-dom"]
        }),
    ],
};