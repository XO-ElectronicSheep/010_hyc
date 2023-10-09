
module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    /* 标头配置 */
    title: '运好车',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'keywords', content: '关键字1' },
      { hid: 'description', name: 'description', content: '专业汽车、轿车托运服务商' }
    ],
    /* 图标配置 */
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    //'element-ui/lib/theme-chalk/index.css'

    'video.js/dist/video-js.css',
    "vant/lib/index.css"
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [

    {
      src: '~/plugins/element-ui',
      ssr: true //关闭服务端渲染
    },
    //{ src: '~plugins/mixins.js', ssr: true },
    { src: '~/plugins/vue-video-player.js', ssr: true },
    { src: '~/plugins/vant.js', ssr: true }

  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [

  ],
  router: {
    middleware: 'device'
  },
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',

  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    Proxy: true, //开启跨域

  },
  proxy: {
    '/api': {
      target: 'http://localhost:3001', //代理转发地址
      changeOrigin: true,
    }
  },
  /*
  ** Build configuration
  */
  build: {
    transpile: ["/^element-ui/", /^vant-ui/],
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    },
    babel: {
      "plugins": [
        [
          "component",
          {
            "libraryName": "element-ui",
            "styleLibraryName": "theme-chalk"
          }
        ]
      ]
    }
  }
}

