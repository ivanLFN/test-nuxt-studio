module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:vue/vue3-recommended",
    "prettier",
    "plugin:nuxt/recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: "./tsconfig.json"
  },
  plugins: [
    "@typescript-eslint"
  ],
  overrides: [
    {
      files: ['*.js', '*.ts', '*.vue'],
    },
    {
      files: ['.eslintrc.js'],
      parser: "espree",
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module"
      },
      rules: {
        '@typescript-eslint/no-var-requires': 'off'
      }
    }
  ]
}