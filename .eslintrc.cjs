// (C) 2023 GoodData Corporation
module.exports = {
    root: true,
    parser: "@typescript-eslint/parser",
    plugins: ["react-hooks", "prettier"],
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
        "plugin:import/errors",
        "plugin:import/typescript",
        "plugin:@typescript-eslint/recommended",
        "plugin:import-esm/recommended",
    ],
    rules: {
        "react/prop-types": "off",

        "import/order": [
            1,
            {
                groups: ["builtin", "external", "parent", "sibling", "index"],
                "newlines-between": "always",
            },
        ],

        "no-console": [
            2,
            {
                allow: [
                    "warn",
                    "error",
                    "log", // todo remove
                ],
            },
        ],
    },
    parserOptions: { tsconfigRootDir: __dirname },
    ignorePatterns: ["webpack.config.cjs", "vite.config.js", "scripts/refresh-md.cjs"],
    settings: {
        react: {
            version: "detect",
        },
        "import/resolver": {
            typescript: {},
        },
    },
    env: {
        browser: true,
        node: true,
    },
};
