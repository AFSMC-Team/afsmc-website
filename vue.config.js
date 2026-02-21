module.exports = {
  // publicPath 如果都是 '/' 可以删掉
  // publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',

  transpileDependencies: ['vue-router'],

  chainWebpack: (config) => {
    // 先尝试修改已存在的 'js' rule（Vue CLI 默认有这个 rule）
    config.module
      .rule('js')
      .use('babel-loader')
      .tap((options = {}) => {  // 加默认 {} 防止 undefined
        options.plugins = options.plugins || [];
        options.plugins.push(
          require.resolve('@babel/plugin-proposal-optional-chaining')
          // 如果后续日志又有 ?? 语法，再加：
          // require.resolve('@babel/plugin-proposal-nullish-coalescing-operator')
        );
        return options;
      })
      .end();

    // 如果上面 rule('js') 不存在或没 babel-loader，再 fallback 创建一个针对 vue-router 的
    // （但通常 Vue CLI 有 'js' rule，这个 fallback 很少触发）
    if (!config.module.rules.has('js')) {
      config.module
        .rule('mjs-vue-router')
        .test(/\.m?js$/)
        .include
          .add(/node_modules[\\/]vue-router/)
          .end()
        .use('babel-loader')
        .loader('babel-loader')
        .options({
          plugins: [
            require.resolve('@babel/plugin-proposal-optional-chaining')
          ]
        });
    }
  }
};
