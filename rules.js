module.exports = function (tabWidth = 4) {
    return {
        env: {
            browser: true,
            es2021: true,
            node: true
        },
        extends: ['airbnb-base', 'prettier'],
        parserOptions: {
            ecmaVersion: 12,
            sourceType: 'module'
        },
        plugins: ['prettier'],
        rules: {
            'prettier/prettier': [
                'error',
                {
                    printWidth: 140,
                    tabWidth,
                    semi: true,
                    singleQuote: true,
                    trailingComma: 'none',
                    arrowParens: 'avoid',
                    endOfLine: 'lf',
                    jsxSingleQuote: true
                },
                {
                    usePrettierrc: false
                }
            ],
            'no-console': 'off',
            semi: ['error', 'always'],
            quotes: 'off',
            indent: [
                'error',
                tabWidth,
                {
                    SwitchCase: 1
                }
            ],
            'no-plusplus': 'off',
            'react/jsx-filename-extension': [
                'warn',
                {
                    extensions: ['.js', '.jsx', '.tsx', '.ts']
                }
            ],
            'no-await-in-loop': 'off',
            radix: 'off',
            'import/no-cycle': 'off',
            'import/no-mutable-exports': 'off',
            'no-underscore-dangle': 'off',
            'import/no-webpack-loader-syntax': 'off',
            'no-bitwise': 'off',
            'import/no-extraneous-dependencies': 'off',
            'default-case': 'off',
            'no-param-reassign': 'off',
            'consistent-return': 'off'
        },
        overrides: [
            /**
             * Typescript Configuration
             */
            {
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
            },
            /**
             * React Configuration
             */
            {
                files: ['*.jsx', '*.tsx'],
                plugins: ['react'],
                parser: '@typescript-eslint/parser',
                rules: {
                    'jsx-quotes': ['error', 'prefer-single'],
                    'class-methods-use-this': 'off',
                    'no-param-reassign': ['error']
                }
            }
        ]
    };
}
