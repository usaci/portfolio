// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true }, 
  ssr: false,
  app: {
    head: {
      charset: 'utf-8', 
      viewport: 'width=device-width, initial-scale=1.0', 
      link: [
        { rel: "stylesheet", href: "https://use.typekit.net/zhy6jpz.css" }
      ],
      title: "Takuya Fujikawa Portfolio"
    }
  }, 

  modules: ["nuxt-microcms-module", "@kgierke/nuxt-basic-auth"],
  microCMS: {
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: process.env.MICROCMS_API_KEY,
  target: "all"

  },
  basicAuth: {
    enabled: true,
    users: [
      {
        username: process.env.BASIC_USER,
        password: process.env.BASIC_PWD,
      },
    ],
    // Optional: Whitelist routes
    // allowedRoutes: ["/api/.*"],
  },
  
},

)
