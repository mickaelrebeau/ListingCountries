// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  $production: {
    prometheus: {
      enabled: true,
    },
    routeRules: {
      '/**': { isr: true },
    }
  },
  modules: [
    '@nuxt/a11y',
    '@nuxt/eslint',
    '@nuxt/ui',
    '@artmizu/nuxt-prometheus'
  ]
})