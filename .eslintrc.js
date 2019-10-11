module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
        "airbnb"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint",
        "react-hooks"
    ],
    "rules": {
      "semi": ['off', 'always'],
      "quotes": ["off", "double"],
      "arrow-parents": ['off'],
      "comma-dangle": ['off'],
      "react/prop-types": 0,
      "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
      "react-hooks/rules-of-hooks": [1, { "extensions": [".js", ".jsx"] }],
      "react-hooks/exhaustive-deps": [0, { "extensions": [".js", ".jsx"] }]
    }
};