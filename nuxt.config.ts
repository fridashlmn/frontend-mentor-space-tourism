// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',

  devtools: { enabled: true },

  app: {
    baseURL: '',
  },

  modules: [
    '@nuxt/eslint',
    [
      '@nuxtjs/google-fonts',
      {
        families: {
          Barlow: true,
          Bellefair: true,
        },
      },
    ],
  ],

  css: ['~/assets/css/main.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  vite: {
    optimizeDeps: {
      include: ['fast-deep-equal'],
    },
  },
})
