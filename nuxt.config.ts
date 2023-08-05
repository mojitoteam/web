export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/eslint-module', '@nuxtjs/tailwindcss'],
  runtimeConfig: {
    public: {
      apiBase: undefined,
    },
  },
});
