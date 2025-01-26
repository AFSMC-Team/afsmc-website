 <template>
  <div id="wrapper">
    <header id="header" class="alt">
      <a href="index.html" class="logo"><strong>AFS方块奇遇 Server</strong> <span> 官方网站</span></a>
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

    <section id="banner" class="major">
      <div class="inner">
        <span class="image">
          <img src="https://i2.hdslb.com/bfs/new_dyn/0f9e7f06ad093dcbdd655b18f436e9a0193395356.png" alt="" />
        </span>
        <header class="major">
          <h1>欢迎来到 AFS方块奇遇 Server </h1>
        </header>
        <div class="content">
          <p id="h1"></p>
          <ul class="actions ">
            <li><a href="https://qm.qq.com/q/o8RPfrhKLu" class="button next scrolly">加入AFS方块奇遇</a></li>
          </ul>
        </div>
      </div>
    </section>

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
  mounted() {
    this.starttime();
  },
  methods: {
    starttime() {
      this.time(document.getElementById('h1'), '2022/1/16');
      setTimeout(this.starttime, 1000);
    },
    time(obj, futimg) {
      var nowtime = new Date().getTime();
      var futruetime = new Date(futimg).getTime();
      var msec = nowtime - futruetime;
      var time = (msec / 1000);
      var day = parseInt(time / 86400);
      var hour = parseInt(time / 3600) - 24 * day;
      var minute = parseInt(time % 3600 / 60);
      var second = parseInt(time % 60);
      obj.innerHTML = "AFS服务器自开服已运行" + day + "天" + hour + "小时" + minute + "分" + second + "秒" + "";
    }
  }
}
</script>

<style scoped>
/* 在这里添加样式，或者在单独的 CSS 文件中引入 */
</style>
