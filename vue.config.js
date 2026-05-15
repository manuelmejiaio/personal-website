const path = require('path')
const PrerenderSPAPlugin = require('prerender-spa-plugin')
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer

module.exports = {
  // publicPath: process.env.NODE_ENV === 'production' ? '/personal-website/' : '/',
  // With Astro blog on `yarn dev` in ./blog (port 4321), open the site at this dev server
  // and use links like /blog/... — they proxy to Astro so home + blog match production.
  devServer: {
    proxy: {
      '/blog': {
        target: 'http://127.0.0.1:4321',
        changeOrigin: true,
      },
    },
  },
  configureWebpack: () => {
    if (process.env.NODE_ENV !== 'production') return

    return {
      plugins: [
        new PrerenderSPAPlugin({
          staticDir: path.join(__dirname, 'docs'),
          routes: ['/'],
          minify: {
            collapseBooleanAttributes: true,
            collapseWhitespace: true,
            decodeEntities: true,
            keepClosingSlash: true,
            sortAttributes: true
          },
          renderer: new Renderer({ headless: true })
        })
      ]
    }
  },
  chainWebpack: config => {
    const svgRule = config.module.rule('svg')

    svgRule.uses.clear()

    svgRule
      .use('babel-loader')
      .loader('babel-loader')
      .end()
      .use('vue-svg-loader')
      .loader('vue-svg-loader')
  }
}
