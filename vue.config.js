module.exports = {
  // 保留你原有的（如果有 publicPath 可以删掉，因为都是 '/'）
  // publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',

  transpileDependencies: [
    'vue-router'
  ],

  chainWebpack: (config) => {
    // 明确处理 .mjs 文件（虽然 transpileDependencies 已经包含，但保险起见）
    config.module
      .rule('js')
      .test(/\.m?js$/)  // 同时处理 .js 和 .mjs
      .include
        .add(/node_modules[\\/]vue-router/)  // 只针对 vue-router，避免全转译慢
        .end()
      .use('babel-loader')
      .loader('babel-loader')
      .tap(options => {
        // 注入插件，确保 optional chaining 被转译
        options.plugins = options.plugins || [];
        options.plugins.push(
          require.resolve('@babel/plugin-proposal-optional-chaining'),
          // 如果还有其他新语法出错，再加这个
          // require.resolve('@babel/plugin-proposal-nullish-coalescing-operator')
        );
        return options;
      });
  }
}
