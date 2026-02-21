// vue.config.js
module.exports = {
  transpileDependencies: ['vue-router'],  // 强制转译 vue-router

  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.m?js$/,
          include: /node_modules[\\/]vue-router/,
          use: {
            loader: 'babel-loader',
            options: {
              plugins: [
                '@babel/plugin-proposal-optional-chaining'  // 直接用字符串，Vue CLI 默认有这个插件
              ]
            }
          }
        }
      ]
    }
  }
};
