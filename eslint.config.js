import neostandard from 'neostandard'
import prettierRecommended from 'eslint-plugin-prettier/recommended'
import tseslint from 'typescript-eslint'

const prettierOptions = {
  printWidth: 80,
  tabWidth: 2,
  singleQuote: true,
  trailingComma: 'all',
  arrowParens: 'always',
  semi: false,
}

export default [
  {
    languageOptions: {
      parserOptions: {
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  ...neostandard({
    ts: true,
    noJsx: true,
    env: ['node', 'es2020'],
    ignores: ['dist/**'],
  }),
  ...tseslint.configs.recommended,
  prettierRecommended,
  {
    rules: {
      'prettier/prettier': ['error', prettierOptions],
    },
  },
]
