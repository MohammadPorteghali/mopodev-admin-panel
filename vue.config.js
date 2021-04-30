module.exports = {
  publicPath: './',
  productionSourceMap: false,
  devServer: {
    proxy: 'http://localhost:8080'
  },
  pluginOptions: {
    i18n: {
      enableInSFC: true
    }
  },
  transpileDependencies: ['vue-echarts', 'resize-detector']
}
