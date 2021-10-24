module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true
    },
    extends: [
        'airbnb-base',
        'prettier'
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 12,
        sourceType: 'module',
    },
    plugins: [
        'react',
        'prettier',
    ],
    rules: {
        'prettier/prettier': ['error', {
            'printWidth': 160,
            'tabWidth': 4,
            'semi': true,
            'singleQuote': true,
            'trailingComma': 'none',
            'arrowParens': 'avoid'
        }, {
                "usePrettierrc": false
            }],
        'no-console': 'off',
        semi: ['error', 'always'],
        quotes: [
            'error',
            'single',
        ],
        indent: ['error', 4, { 'SwitchCase': 1 }],
        'no-plusplus': 'off',
        'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx', '.tsx', '.ts'] }],
        'no-await-in-loop': 'off',
        'radix': 'off',
    },
    /* TypeScript Configuration */
    overrides: [{
        files: ['*.ts', '*.tsx'],
        extends: ['airbnb-typescript'],
        plugins: ['@typescript-eslint'],
        parser: '@typescript-eslint/parser',
        parserOptions: {
            ecmaFeatures: {
                jsx: true
            },
            project: 'tsconfig.json'
        },
        rules: {
            '@typescript-eslint/indent': 'off',
            '@typescript-eslint/comma-dangle': 'off'
        }
    }]
}
