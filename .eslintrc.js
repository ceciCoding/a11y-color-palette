module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  plugins: ['tailwindcss'],
  extends: [
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended',
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    'plugin:tailwindcss/recommended',
    'prettier',
  ],
  rules: {
    quotes: [2, 'single', 'avoid-escape'],
    semi: [2, 'never'],
    'vue/v-on-event-hyphenation': 0,
    'no-undef': 0, // TODO: Remove when Nuxt supports eslint for autoimports
    'vue/singleline-html-element-content-newline': 'off',
  },
  overrides: [
    {
      files: ['layouts/*.vue', 'pages/**/*.vue'],
      rules: { 'vue/multi-word-component-names': 'off' },
    },
  ],
}
