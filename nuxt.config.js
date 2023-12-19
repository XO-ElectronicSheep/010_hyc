
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
      { hid: 'keywords', name: 'keywords', content: '汽车托运' },
      { hid: 'description', name: 'description', content: '北京金佰顺物流-服务热线:400-6655-958 ,十年始终如一专注国内汽车托运服务,主营小汽车、私家车、自驾游车、事故车、二手车、商品车等各种小轿车托运业务。公司自有调度汽车运输车上百辆,全程保险,安全准时送达承诺。' },
      { hid: 'og:title', property: 'og:title', content: '汽车托运-金百顺' },
      { hid: 'og:description', property: 'og:description', content: '北京金佰顺物流-服务热线:400-6655-958 ,十年始终如一专注国内汽车托运服务,主营小汽车、私家车、自驾游车、事故车、二手车、商品车等各种小轿车托运业务。公司自有调度汽车运输车上百辆,全程保险,安全准时送达承诺。' },
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

