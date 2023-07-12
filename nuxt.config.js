import { defineNuxtConfig } from 'nuxt'
import svgLoader from 'vite-svg-loader'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      apiBase: '',
    },
  },

  head: {
    title: 'Accessible Color Palette',
    htmlAttrs: {
      lang: 'en',
    },
  },

  meta: {
    viewport: 'width=device-width, initial-scale=1',
  },

  buildModules: ['@pinia/nuxt'],

  modules: ['@nuxtjs/tailwindcss'],

  vite: {
    plugins: [svgLoader()],
  },

  experimental: {
    reactivityTransform: true,
  },
})
