<template>
    <div id="wrapper">
      <header id="header" class="alt">
        <a href="/" class="logo"><strong>Imagine Server</strong> <span> 官方网站</span></a>
        <nav>
          <a href="#menu">菜单</a>
        </nav>
      </header>
  
      <nav id="menu">
        <ul class="links">
          <li><router-link to="/">首页</router-link></li>
          <li><a href="team.html">IMS team</a></li>
          <li><router-link to="/function">便捷功能</router-link></li>
          <li><a href="404.html">最新动态</a></li>
        </ul>
        <ul class="actions stacked">
          <li><a href="https://jq.qq.com/?_wv=1027&k=iuKYeEGl" class="button primary fit">加入玩家交流群</a></li>
        </ul>
      </nav>
  
      <section id="banner" class="style2">
        <div class="inner">
          <span class="image">
            <img src="https://i2.hdslb.com/bfs/new_dyn/0f9e7f06ad093dcbdd655b18f436e9a0193395356.png" alt="" />
          </span>
          <header class="major">
            <h1>恭喜通过审核</h1>
          </header>
          <div class="content">
            <h4>点击下方弹窗选择minecraft加入服务器<br /><sup>若没有弹窗请点击下方生存服按钮</sup></h4>
          </div>
        </div>
      </section>
  
      <div id="main">
        <div class="inner">
          <div class="content">
            <h3></h3>
          </div>
          <div class="content">
            <h2>一键添加服务器</h2>
          </div>
          <ul class="actions">
            <li><a href="minecraft:?addExternalServer=§b§l幻想浮城服务器|mc.imsmcserver.com:5032" class="button primary">生 存 服</a></li>
            <li><a href="minecraft:?addExternalServer=§b§l幻想浮城服务器|mc.imsmcserver.com:5033" class="button">创 造 服</a></li>
            <li><a href="minecraft:?addExternalServer=§b§l幻想浮城服务器|mc.imsmcserver.com:5034" class="button primary">超 平 坦 服</a></li>
          </ul>
          <div class="col-6 col-12-small">
            <ul class="actions stacked">
              <li><router-link to="/" class="button primary fit">去官网看看</router-link></li>
              <li><router-link to="/function" class="button fit">更多服务器功能</router-link></li>
            </ul>
          </div>
        </div>
      </div>
  
      <footer id="footer">
        <div class="inner">
          <ul class="copyright">
            <li>由<strong>嘿华云</strong>强力驱动</li>
            <li>All Rights Reserved</li>
            <li><a href="https://space.bilibili.com/520320534/">bilibili:莱茵幻彩</a></li>
            <li>Design: Redsugar</li>
            <li>&copy; Imagine Server 2022</li>
          </ul>
        </div>
      </footer>
    </div>
  </template>
  
  <script>
  export default {
    // 如果有需要，可以在这里添加组件的逻辑
  }
  </script>
  
  <style scoped>
  /* 在这里添加样式，或者在单独的 CSS 文件中引入 */
  </style>
