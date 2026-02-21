module.exports = {
  // 如果你不需要部署到子目录，这两行可以完全删除
  publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',

  // 核心修复：强制转译 vue-router（包括它的 .mjs 文件）
  transpileDependencies: [
    'vue-router'
  ],

  // 可选：如果上面还不行，再加强处理 .mjs 文件（大多数情况不需要）
  chainWebpack: (config) => {
    config.module
      .rule('mjs')
      .test(/\.mjs$/)
      .include
        .add(/node_modules/)
        .add(/vue-router/)
        .end()
      .use('babel-loader')
      .loader('babel-loader')
      .end();
  }
}
