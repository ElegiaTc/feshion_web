const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

module.exports = {
  lintOnSave:false,
  devServer: {
    proxy: {
      '/api': {
        target:'http://43.139.105.41:8080',
        pathRewrite: { '^/api': ''},
      }
    }
  }
}