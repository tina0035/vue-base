'use strict';

module.exports = {
    root: true,
    extends: [
        'plugin:vue/recommended',
        'toppro',
    ],
    rules: {
        'indent': [2, 2],
        "linebreak-style": [2, "windows"]
    },
    plugins: [
        'html',
    ],
    parser: 'vue-eslint-parser',
    parserOptions: {
        'sourceType': 'module',
    }
}
