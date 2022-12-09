// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@pinia/nuxt', '@nuxtjs/tailwindcss', '@sidebase/nuxt-auth'],
  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap',
        },
      ],
    },
  },
  auth: {
    isEnabled: true,
    origin: process.env.NUXT_AUTH_ORIGIN || 'https://virtus-app.vercel.app/',
    basePath: process.env.NUXT_AUTH_BASE_PATH || '/api/auth',
    enableSessionRefreshPeriodically: false,
    enableSessionRefreshOnWindowFocus: true,
    enableGlobalAppMiddleware: false,
  },
});
