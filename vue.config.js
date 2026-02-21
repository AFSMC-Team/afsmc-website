module.exports = {
  transpileDependencies: ['vue-router'],

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
                require.resolve('@babel/plugin-proposal-optional-chaining')
              ]
            }
          }
        }
      ]
    }
  }
};
