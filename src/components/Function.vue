<template>
    <div id="wrapper">
      <header id="header" class="alt">
        <a href="/" class="logo"><strong>AFS方块奇遇 Server</strong> <span> 官方网站</span></a>
        <nav>
          <a href="#menu">菜单</a>
        </nav>
      </header>
  
      <nav id="menu">
        <ul class="links">
          <li><router-link to="/">首页</router-link></li>
          <li><router-link to="/function">便捷功能</router-link></li>
        </ul>
        <ul class="actions stacked">
          <li><a href="https://qm.qq.com/q/o8RPfrhKLu" class="button primary fit">加入玩家交流群</a></li>
        </ul>
      </nav>
  
      <section id="banner" class="style3">
        <div class="inner">
          <span class="image">
            <img src="@/assets/images/bg.png" alt="" />
          </span>
          <header class="major">
            <h1>便捷功能</h1>
          </header>
          <div class="content">
            <p>这里有服务器相关的便捷插件使用说明<br><sub>update:2025 1 25</sub></p>
          </div>
        </div>
      </section>
  
      <div id="main">
        <div class="inner">
          <div class="row">
            <div class="col-6 col-12-small">
              <h2><font color="#b7efff">指令列表</font></h2>
              <p>查看所有可以使用的指令</p>
              <ul></ul>
              <div class="table-wrapper">
                <table>
                  <thead>
                    <tr>
                      <th>指令</th>
                      <th>二级指令</th>
                      <th>描述</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><code>/suicide</code></td>
                      <td>无</td>
                      <td>自杀</td>
                    </tr>
                    <tr>
                      <td><code>/tpa</code></td>
                      <td><code>player_name</code>向对方发送tpa请求</td>
                      <td>传送</td>
                    </tr>
                    <tr>
                      <td><code>/premium</code></td>
                      <td>你的密码 confirm</td>
                      <td>正版验证</td>
                    </tr>
                    <tr>
                      <td><code>/tps</code></td>
                      <td>无</td>
                      <td>服务器运行信息</td>
                    </tr>
                    <tr>
                      <td><code>/gc</code></td>
                      <td>无</td>
                      <td>服务器运行信息</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div class="col-6 col-12-small">
            <ul class="actions stacked">
              <li><router-link to="/" class="button primary fit">返回</router-link></li>
            </ul>
          </div>
        </div>
      </div>
  
      <footer id="footer">
        <div class="inner">
          <ul class="copyright">
            <li>由<strong>EdgeOne Pages</strong>强力驱动</li>
            <li>豫ICP备2024094986号 All Rights Reserved</li>
            <li><a href="https://space.bilibili.com/193395356">bilibili:Ad_noGpu</a></li>
            <li>&copy; AFS Team 2025</li>
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