"use strict";
const config = {
    globals: {},
    env: {
        commonjs: true,
        es6: true,
    },
    overrides: [],
    plugins: [
        "jest",
        "sonarjs",
        "functional",
        "@typescript-eslint",
        "prettier",
        "total-functions",
        "import",
        "spellcheck",
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        project: "./tsconfig.json",
        ecmaVersion: 2018,
        sourceType: "module",
    },
    extends: [
        "eslint:recommended",
        "plugin:functional/recommended",
        "plugin:functional/external-recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "plugin:@typescript-eslint/strict",
        "plugin:total-functions/recommended",
        "typed-fp",
        "plugin:sonarjs/recommended",
        "plugin:jest/recommended",
        "plugin:prettier/recommended",
        "plugin:import/recommended",
        "plugin:import/typescript",
    ],
    rules: {
        "spellcheck/spell-checker": ["warn"],
    },
    settings: {},
};
module.exports = config;
