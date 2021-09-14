import mpa from 'vite-plugin-mpa'
import htmlTemplate from 'vite-plugin-html-template'

//'development'，'production'
const modeEnv =
  process.env.NODE_ENV === 'production' ? 'production' : 'development'

const { resolve } = require('path')
const { defineConfig } = require('vite')
const virtualHtml = require('vite-plugin-virtual-html')

const pages = {
  index: '/src/index.html',
  login: '/src/login.html',
}

export default defineConfig({
  model: modeEnv,
  hmr: { overlay: false },
  plugins: [
    mpa(),
    htmlTemplate({
      // where pages ?
      pagesDir: 'src/pages',
      // define pages like vue-cli
      pages: {
        index: {
          template: './public/index.html',
          title: '',
        },
        subpage: {
          template: './src/pages/subpage/index.html',
          title: 'Product',
        },
      },
      // expose to template
      data: {
        title: 'Home Page',
      },
    }),
    [
      virtualHtml({
        pages,
        indexPage: 'login',
      }),
    ],
  ],
})
