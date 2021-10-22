module.exports = {
    root: true,
    env: {
        browser: true,
        es2021: true,
        node: true
    },
    extends: [
        'airbnb-base',
        'airbnb-typescript',
        'prettier'
    ],
    parser: '@typescript-eslint/parser',
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
        '@typescript-eslint'
    ],
    rules: {
        'no-console': 'off',
        semi: ['error', 'always'],
        quotes: [
            'error',
            'single',
        ],
        indent: ['error', 4, { 'SwitchCase': 1 }],
        'no-plusplus': 'off',
        'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx', '.tsx', '.ts'] }],
        'import/extensions': 'off',
        'no-await-in-loop': 'off',
        'radix': 'off',
        'consistent-return': 'off'
    },
    settings: {
        'import/resolver': [{
            node: {
                extensions: ['.js', '.jsx', '.ts', '.tsx']
            }
        }]
    }
}
