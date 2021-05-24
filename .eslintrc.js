module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true
    },
    extends: ['airbnb', 'airbnb/hooks', 'plugin:prettier/recommended'],
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 12,
        sourceType: 'module'
    },
    plugins: ['react'],
    rules: {
        camelcase: 0,
        'no-console': 0,
        'no-debugger': 0,
        'no-unused-vars': 0,
        'no-underscore-dangle': 0,
        'no-extend-native': 0,
        'no-restricted-syntax': 0,
        'no-prototype-builtins': 0,
        'no-param-reassign': [
            'error',
            { props: true, ignorePropertyModificationsFor: ['draft', 'ref'] }
        ],
        'func-names': 0,
        'arrow-body-style': 0,
        'dot-notation': 0,
        'object-curly-newline': 0,
        'jsx-a11y/anchor-is-valid': 0,
        'jsx-a11y/label-has-for': 0,
        'jsx-a11y/label-has-associated-control': 0,
        'jsx-a11y/tabindex-no-positive': 0,
        'jsx-a11y/no-noninteractive-tabindex': 0,
        'prefer-destructuring': 0,
        'prefer-arrow-callback': 0,

        'react/prop-types': 0,
        'react/jsx-indent': 0,
        'react/jsx-indent-props': 0,
        'react/no-danger': 0,
        'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
        'react/prefer-stateless-function': 0,
        'react/no-array-index-key': 0,
        'react/forbid-prop-types': 0,
        'react/require-default-props': 0,
        'react/no-unused-prop-types': 0,
        'react/no-did-mount-set-state': 0,
        'react/jsx-fragments': 0,
        'react/static-property-placement': 0,
        'react/state-in-constructor': 0,
        'react/jsx-props-no-spreading': [
            1,
            {
                html: 'enforce',
                custom: 'ignore'
            }
        ],
        'react/no-did-update-set-state': 0,
        'react/jsx-props-no-spreading': 0,
        'react/no-unused-state': 0,
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
        'react/sort-comp': 0,
        'react/no-find-dom-node': 0,
        'react/display-name': 0,
        'react/button-has-type': 0,
        'react/jsx-one-expression-per-line': 0,

        'import/prefer-default-export': 0,
        'import/no-extraneous-dependencies': 0,

        'prettier/prettier': 0
    }
};
