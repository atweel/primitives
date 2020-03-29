module.exports = {
    root: true,
    ignorePatterns: ["node_modules/", "library/", "app/", "tests/hooks"],
    parser: '@typescript-eslint/parser',
    plugins: [
        '@typescript-eslint',
    ],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended'
    ],
    rules: {
        "quotes": "off",
        "@typescript-eslint/quotes": ["error", "single", { "allowTemplateLiterals": true }],
        "@typescript-eslint/no-empty-interface": ["warn"],
        "@typescript-eslint/no-empty-function": ["warn"],
        "@typescript-eslint/no-explicit-any": ["off"],
        "comma-dangle": ["error", "always-multiline"],
        "@typescript-eslint/no-misused-new": ["off"],
        "indent": ["error", 4, {
            "FunctionDeclaration": { "parameters": "first" },
            "FunctionExpression": { "parameters": "first" },
            "CallExpression": { "arguments": "first" },
            "SwitchCase": 1
        }],
        "template-tag-spacing": ["error", "never"],
        "template-curly-spacing": ["error", "always"],
        "object-curly-spacing": ["error", "always"],
        "array-bracket-spacing": ["error", "always"],
        "eol-last": ["error", "always"],
        "semi": ["error", "always"]
    },
    globals: {
        "module": "readonly"
    }
};