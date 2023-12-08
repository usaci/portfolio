// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true }, 
  ssr: false,
  app: {
    head: {
      charset: 'utf-8', 
      viewport: 'width=device-width, initial-scale=1.0', 
      link: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700&display=swap'}, 
        { rel: 'preconnect' , href: 'https://fonts.gstatic.com', crossorigin: '' }, 
        { rel: 'preconnect' , href: 'https://fonts.googleapis.com' },
      ]
    }
  }, 
  modules: ["nuxt-microcms-module"],
  microCMS: {
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: process.env.MICROCMS_API_KEY,
  target: "all"
  
},
  
},

)
