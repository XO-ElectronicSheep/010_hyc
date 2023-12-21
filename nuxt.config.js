
module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  ssr: true,
  head: {
    /* 标头配置 */
    title: '汽车轿车托运  私家车、二手车、商品车托运-金百顺-汽车托运',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'baidu-site-verification', content: 'codeva-2KUwqcx8Pm' },
      { hid: 'keywords', name: 'keywords', content: '汽车托运、轿车托运、私家车托运、二手车托运、商品车托运、小板车托运	' },
      { hid: 'description', name: 'description', content: '金百顺汽车托运公司400-6655-958专业承接汽车托运、轿车托运、私家车托运、二手车托运、商品车托运服务服务、只要您有汽车托运的需要，只需一个电话，就得到详细报价' },
      { hid: 'og:title', property: 'og:title', content: '汽车托运-金百顺' },
      { hid: 'og:description', property: 'og:description', content: '金百顺汽车托运公司400-6655-958专业承接汽车托运、轿车托运、私家车托运、二手车托运、商品车托运服务服务、只要您有汽车托运的需要，只需一个电话，就得到详细报价' },
    ],
    /* 图标配置 */
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
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
    // middleware: 'device',
  },
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
  ],
  axios: {
    baseURL: 'http://124.220.23.104:9001', // 设置你的API的基本URL
  },

  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    Proxy: true, //开启跨域

  },
  /*
    代理转发地址
   proxy: {
      '/api': {
        target: 'http://localhost:3001', 
        changeOrigin: true,
      }
    }, */
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

