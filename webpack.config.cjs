// (C) 2007-2022 GoodData Corporation
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack");
const CaseSensitivePathsPlugin = require("case-sensitive-paths-webpack-plugin");
const path = require("path");
const { URL } = require("url");
const pack = require("./package.json");
const CopyPlugin = require("copy-webpack-plugin");

require("dotenv").config();

const BACKEND_URL = process.env.GOODDATA_HOST;

module.exports = (_env, argv) => {
    const isProduction = argv.mode === "production";
    const proxy = [
        {
            context: (pathname) => /^\/(api\/|gdc\/|account\.html|truste\.html|account\/)/.test(pathname),
            changeOrigin: true,
            cookieDomainRewrite: "127.0.0.1",
            secure: false,
            target: BACKEND_URL,
            headers: {
                host: BACKEND_URL,
                origin: null,
            },
            onProxyReq(proxyReq) {
                // changeOrigin: true does not work well for POST requests, so remove origin like this to be safe
                proxyReq.removeHeader("origin");
                proxyReq.setHeader("accept-encoding", "identity");

                if (pack.gooddata.backend === "tiger" && process.env.TIGER_API_TOKEN) {
                    // Inject auth token using dev proxy to simplify development setup
                    // In production, you'll need to implement a proper auth handling, see ./src/backend file
                    proxyReq.setHeader("Authorization", `Bearer ${process.env.TIGER_API_TOKEN}`);
                }
            },
        },
    ];

    return [
        {
            entry: "./src/index.js",
            mode: isProduction ? "production" : "development",
            target: "web",
            devtool: isProduction ? false : "eval-cheap-module-source-map",
            experiments: {
                outputModule: true,
            },
            output: {
                path: path.resolve("./esm"),
                // Force .js extension instead of .mjs
                filename: "[name].js",
                library: {
                    type: "module",
                },
                publicPath: "/",
            },
            resolve: {
                // Alias for ESM imports with .js suffix because
                // `import { abc } from "../abc.js"` may be in fact importing from `abc.tsx` file
                extensionAlias: {
                    ".js": [".ts", ".tsx", ".js", ".jsx"],
                },

                // Prefer ESM versions of packages to enable tree shaking
                mainFields: ["module", "browser", "main"],
            },
            module: {
                rules: [
                    // TS source files in case TS is used
                    {
                        test: /\.tsx?$/,
                        use: [
                            {
                                loader: "babel-loader",
                            },
                            {
                                loader: "ts-loader",
                                options: {
                                    transpileOnly: true,
                                },
                            },
                        ],
                    },
                    // JS source files in case JS is used
                    {
                        test: /\.jsx?$/,
                        use: [
                            {
                                loader: "babel-loader",
                                options: {
                                    compact: isProduction,
                                    presets: ["@babel/preset-react"],
                                },
                            },
                        ],
                    },
                    {
                        test: /\.css$/,
                        use: ["style-loader", "css-loader"],
                    },
                    {
                        test: /\.(eot|woff|ttf|svg|jpg|jpeg|gif)/,
                        type: "asset/resource",
                    },
                    !isProduction && {
                        test: /\.js$/,
                        enforce: "pre",
                        include: path.resolve(__dirname, "src"),
                        use: ["source-map-loader"],
                    },
                ].filter(Boolean),
            },
            plugins: [
                new Dotenv(),
                new CaseSensitivePathsPlugin(),
                new HtmlWebpackPlugin({
                    template: "./src/public/index.html",
                    favicon: "./src/public/favicon.ico",
                    scriptLoading: "module",
                }),
                new CopyPlugin({
                    patterns: [
                        {
                            from: path.resolve(__dirname, "src", "public", "_redirects"),
                            to: path.join(__dirname, "esm"),
                        },
                    ],
                }),
            ],
            // Some dependencies have invalid source maps, we do not care that much
            ignoreWarnings: [/Failed to parse source map/],
            devServer: {
                static: {
                    directory: path.join(__dirname, "esm"),
                },
                host: "127.0.0.1",
                proxy,
                server: "https",
                open: true,
                historyApiFallback: true,
            },
        },
    ];
};
