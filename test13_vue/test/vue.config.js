const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // 关闭eslint校验
  lintOnSave: false,

  // 开启代理方式一
  // 开启代理服务器，防止出现跨域  https://cli.vuejs.org/zh/config/#devserver-proxy
  // 以下配置方式有两个缺点：1、会把前端项目的public文件夹里面和请求路径相同的资源返回。导致2、不能控制是否使用代理
  // devServer: {
  //   proxy: 'http://localhost:5000'
  // },

  //开启代理方式二
  devServer: {
    proxy: {
      // studentServer表示本项目里面要往代理服务器发请求时要加上的请求前缀，
      // /studentServer可以控制不同的请求发往不同的服务器
      '/studentServer': {
        target: 'http://localhost:5000',
        // 由于在本项目里面所有要转发到http://localhost:5000服务器的地址都加了一个请求前缀/studentServer
        // 但是这个请求前缀/studentServer在http://localhost:5000服务器却是没有的，所以真正将请求发到目标服务器的时候还要把这里代理添加的请求前缀去除
        // 以下是一个正则表达式的替换，意思是将请求路径中所有的'/studentServer'替换为''
        pathRewrite: {'^/studentServer': ''},
        ws: true, // 是否开启websocket
        changeOrigin: true  // 用于控制请求头中的host值
      },
      '/carServer': {
        target: 'http://localhost:5001',
        pathRewrite: {'^/carServer': ''},
      }
    }
  }
})

// https://cli.vuejs.org/zh/config/