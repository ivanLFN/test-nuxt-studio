import { defineConfig } from 'eslint-define-config'
import typescriptEslintParser from '@typescript-eslint/parser'
import typescriptEslintPlugin from '@typescript-eslint/eslint-plugin'
import vuePlugin from 'eslint-plugin-vue'
import nuxtPlugin from 'eslint-plugin-nuxt'

export default defineConfig([
  {
    files: ['*.js', '*.ts', '*.vue'],
    rules: {
      // Add your custom rules here
    },
    languageOptions: {
      parser: typescriptEslintParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.json'
      }
    },
    plugins: {
      '@typescript-eslint': typescriptEslintPlugin,
      vue: vuePlugin,
      nuxt: nuxtPlugin
    },
    settings: {
      'vue/setup-compiler-macros': true
    }
  }
])
