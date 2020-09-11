export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: "spa",
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: "server",
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: process.env.npm_package_name || "Calculator",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || "Calculator"
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css2?family=Prompt:wght@400;600&display=swap"
      }
    ]
  },
  /*
   ** Global CSS
   */
  css: ["iview/dist/styles/iview.css", "@assets/css/style.scss"],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: ["@/plugins/iview", { src: "@/plugins/sugar", ssr: false }],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ["@nuxtjs/moment"],
  moment: {
    locales: ["th"]
  },
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    "@nuxtjs/axios",
    "@nuxtjs/style-resources",
    "nuxt-purgecss"
  ],
  purgeCSS: {
    whitelist: () => ["html", "body"],
    whitelistPatterns: () =>  [/ivu*/],
  },
  styleResources: {
    scss: [
      './assets/scss/vars/*.scss',
      './assets/scss/mixins/*.scss'
      ]
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    proxy: true
  },
  proxy: {
    "/api/": "http://api.mathjs.org/v4/",
    ws: true
  },
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
   build: {}
};
