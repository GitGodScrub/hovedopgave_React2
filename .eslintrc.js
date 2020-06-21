/* eslint-disable array-bracket-spacing */
/* eslint-disable max-lines */
// eslint-disable-next-line no-undef
module.exports = {
    "env": {
        "browser": true,
        "es2020": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 11,
        "sourceType": "module"
    },
    "plugins": ["react"],
    "rules": {
        "accessor-pairs": "error",
        "array-bracket-newline": [
            2,
            "consistent"
        ],
        "array-bracket-spacing": [
            2,
            "always",
            { "objectsInArrays": false,
            "singleValue": false,
            "arraysInArrays": false } 
        ],
        "computed-property-spacing": [
            2,
            "never"
        ], /* Your looking for this */
        // eslint-disable-next-line sort-keys
        "array-callback-return": "error",
        "array-element-newline": ["error", "consistent"],
        "arrow-body-style": [
            1,
            "as-needed"
        ], /* might need to look this over again later */
        "arrow-parens": [
            2,
            "always",
            { "requireForBlockBody": true }
        ], /* is this working correctly? */
        "arrow-spacing": "off",
        "block-scoped-var": "error",
        "block-spacing": [
            "error",
            "never"
        ],
        "brace-style": "off",
        "callback-return": "error",
        "camelcase": "off",
        "capitalized-comments": [
            0,
            "never"
        ], /*might need to config this later */
        "class-methods-use-this": "error",
        "comma-dangle": [
            1,
            "only-multiline"
        ],
        "comma-spacing": "error",
        "comma-style": [
            "error",
            "last"
        ],
        "complexity": "error",
        "consistent-return": "error",
        "consistent-this": "error",
        "curly": "error",
        "default-case": "error",
        /*"default-case-last": "error", not supported*/
        "default-param-last": "error",
        "dot-location": "error",
        "dot-notation": "error",
        "eol-last": [
            "error",
            "never"
        ],
        "eqeqeq": "off",
        "func-call-spacing": "error",
        "func-name-matching": "error",
        "func-names": "error",
        "func-style": [
            2,
            "declaration",
            { "allowArrowFunctions": true }
        ],
        "function-call-argument-newline": "error",
        "function-paren-newline": "off",
        "generator-star-spacing": "error",
        "grouped-accessor-pairs": "error",
        "guard-for-in": "error",
        "id-blacklist": "error",
        "id-length": "error",
        "id-match": "error",
        /*
        "implicit-arrow-linebreak": [
            2,
            "below"
        ], */ /*TODO fix at det fucker med mit JSX */
        "indent": "off",
        "init-declarations": "error",
        "jsx-quotes": "error",
        "key-spacing": 1,
        "keyword-spacing": "off",
        "line-comment-position": "off",
        "linebreak-style": [
            0,
            "windows"
        ], /* can be fixed, but whatever */
        "lines-around-comment": 0, /* fix later*/
        "lines-between-class-members": "error",
        "max-classes-per-file": "error",
        "max-depth": "error",
        "max-len": "off",
        "max-lines": [
            1,
            {"max": 250, 
            "skipComments": true, 
            "skipBlankLines": true }
        ],
        "max-lines-per-function": [
            1,
            {"max": 150, 
            "skipComments": true, 
            "skipBlankLines": true }
        ],
        "max-nested-callbacks": "error",
        "max-params": "error",
        "max-statements": 0,
        "max-statements-per-line": "error",
        "multiline-comment-style": 0,
        "multiline-ternary": "error",
        "new-cap": "error",
        "new-parens": "error",
        "newline-per-chained-call": "error",
        "no-alert": 0,
        "no-array-constructor": "error",
        "no-await-in-loop": "error",
        "no-bitwise": "error",
        "no-caller": "error",
        "no-confusing-arrow": "error",
        "no-console": "off",
        "no-constructor-return": "error",
        "no-continue": "error",
        "no-div-regex": "error",
        "no-duplicate-imports": 1,
        "no-else-return": "error",
        "no-empty-function": "error",
        "no-eq-null": "error",
        "no-eval": "error",
        "no-extend-native": "error",
        "no-extra-bind": "error",
        "no-extra-label": "error",
        "no-extra-parens": 1,
        "no-extra-semi": 1,
        "no-floating-decimal": "error",
        "no-implicit-coercion": "error",
        "no-implicit-globals": "error",
        "no-implied-eval": "error",
        "no-inline-comments": "off",
        "no-invalid-this": "error",
        "no-iterator": "error",
        "no-label-var": "error",
        "no-labels": "error",
        "no-lone-blocks": "error",
        "no-lonely-if": "error",
        "no-loop-func": "error",
        /*"no-loss-of-precision": "error", not supported*/
        "no-magic-numbers": "off",
        "no-mixed-operators": "error",
        "no-multi-assign": "error",
        "no-multi-spaces": "error",
        "no-multi-str": "error",
        "no-multiple-empty-lines": "error",
        "no-negated-condition": "error",
        "no-nested-ternary": "error",
        "no-new": "error",
        "no-new-func": "error",
        "no-new-object": "error",
        "no-new-wrappers": "error",
        "no-octal-escape": "error",
        "no-param-reassign": "error",
        "no-plusplus": "error",
        /*"no-promise-executor-return": "error", not supported*/
        "no-proto": "error",
        /*"no-restricted-exports": "error", not supported*/
        "no-restricted-globals": "error",
        "no-restricted-imports": "error",
        "no-restricted-properties": "error",
        "no-restricted-syntax": "error",
        "no-return-assign": "error",
        "no-return-await": "error",
        "no-script-url": "error",
        "no-self-compare": "error",
        "no-sequences": "error",
        "no-shadow": [
            1,
            { "builtinGlobals": true,
            "allow": ["done", "event"]} /*"hoist": "all",*/
        ], /* I might need to check up on this */
        "no-tabs": "error",
        "no-template-curly-in-string": "error",
        "no-ternary": 1,
        "no-throw-literal": "error",
        "no-trailing-spaces": 0,
        "no-undef-init": 1,
        "no-undefined": 2,
        "no-underscore-dangle": "error",
        "no-unmodified-loop-condition": "error",
        "no-unneeded-ternary": "error",
        "no-unreachable": 1,
        /*"no-unreachable-loop": "error", not supported*/
        "no-unused-expressions": 1,
        "no-unused-vars": 0, /* Stop spamming me pls */
        "no-use-before-define": [
            2,
            { "functions": false,
            "classes": true,
            "variables": false } /* varibles is broken */
        ],
        /*"no-useless-backreference": "error", not supported*/
        "no-useless-call": "error",
        "no-useless-computed-key": "error",
        "no-useless-concat": "error",
        "no-useless-constructor": "error",
        "no-useless-rename": "error",
        "no-useless-return": "error",
        "no-var": 0,
        "no-void": "error",
        "no-warning-comments": [
            1,
            { "terms": ["todo", "fixme", "xxx", "husk", "to-do", "to do", "fix"],
            "location": "start" }
        ],
        "no-whitespace-before-property": "error",
        "nonblock-statement-body-position": "error", 
        /*"object-curly-newline": "error", - Dont touch, unles you got the time */
        /*"object-curly-spacing": [
            "error",
            "never",
            {"arraysInObjects": true, 
            "objectsInObjects": true
        }
        ], - Dont touch, unles you got the time */
        /*"object-property-newline": "error", - Dont touch, unles you got the time */
        "object-shorthand": 1, /* VERY SPECIAL */
        "one-var": 0,
        "one-var-declaration-per-line": 0,
        "operator-assignment": "error",
        "operator-linebreak": "error",
        "padded-blocks": "off",
        "padding-line-between-statements": "error",
        "prefer-arrow-callback": 2,
        "prefer-const": 1, /* TODO idk keb */
        "prefer-destructuring": "error",
        "prefer-exponentiation-operator": "error",
        "prefer-named-capture-group": "error",
        "prefer-numeric-literals": "error",
        "prefer-object-spread": 2,
        "prefer-promise-reject-errors": "error",
        "prefer-regex-literals": "error",
        "prefer-rest-params": "error",
        "prefer-spread": "error",
        "prefer-template": "off",
        "quote-props": "off",
        "quotes": [
            0,
            "double"
        ],
        "radix": "error",
        "react/jsx-key": 1, /* Should totally make this a 2, lol */
        "react/no-typos": 1,
        "react/no-unknown-property": [
            2,
            {"ignore": ["class", "for", "module"]}
        ], /* TODO Expand this as needed */
        "react/prefer-stateless-function": [2, { "ignorePureComponents": false }], /* maybe change this later */
        "react/prop-types": 0, /* Fix: This is not working, lol */
        "react/jsx-key": 0, /* FIX later: Dont care right now */
        "react/jsx-wrap-multilines": [
                2,
                { "declaration": "parens"}
        ],
        "require-atomic-updates": "error",
        "require-await": "error",
        "require-unicode-regexp": "error",
        "rest-spread-spacing": "error",
        "semi": "off",
        "semi-spacing": "error",
        "semi-style": "error",
        "sort-imports": 0,
        "sort-keys": [
            1,
            "asc",
            { "caseSensitive": false, 
            "natural": true, 
            "minKeys": 5 }
        ], /* if only there was an autofix...*/
        "sort-vars": "error",
        /* "space-before-blocks": "off", - might need to fix this, later */
        "space-before-function-paren": "off",
        "space-in-parens": [
            "error",
            "never"
        ],
        "space-infix-ops": "off", /* Todo */
        "space-unary-ops": "error",
        "spaced-comment": [
            0,
            "never"
        ],
        "strict": "error",
        "switch-colon-spacing": "error",
        "symbol-description": "error",
        "template-curly-spacing": "error",
        "template-tag-spacing": "error",
        "unicode-bom": [
            "error",
            "never"
        ],
        "vars-on-top": "error",
        "wrap-iife": "error",
        "wrap-regex": "error",
        "yield-star-spacing": "error",
        "yoda": [
            "error",
            "never"
        ]
    }
};