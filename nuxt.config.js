module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: '足跡はもう見えない',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'my github pages' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/github-pages/favicon.ico' }
    ],
    script: [
      { src: 'https://cdn.rawgit.com/google/code-prettify/master/loader/run_prettify.js?skin=desert' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  css: [
    { src: '~/assets/main.scss', lang: 'scss' },
    '@fortawesome/fontawesome-free-webfonts',
    '@fortawesome/fontawesome-free-webfonts/css/fa-brands.css',
    '@fortawesome/fontawesome-free-webfonts/css/fa-regular.css',
    '@fortawesome/fontawesome-free-webfonts/css/fa-solid.css',
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config) {
      if (process.server && process.browser) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    postcss: {
      plugins: {
        'postcss-custom-properties': {
          warnings: false
        }
      }
    }
  },
  /*
   * Router configuration
   */
  router: {
    base: '/github-pages/'
  },
  /*
   * Modlue configuration
   */
  modules: [
    '@nuxtjs/markdownit'
  ],
  /*
   * markdownit modlue configuration
   */
  markdownit: {
    preset: 'default',
    injected: true, 
    breaks: true, 
    html: true, 
    linkify: true,
    typography: true, 
    xhtmlOut: true,
    langPrefix: 'language-',
    quotes: '“”‘’',
    highlight: function (/*str, lang*/) { return ''; }
  }
}

