<template lang="html">
  <div class="reveal">
    <div class="slides">
      <section>
        <h2>前端开发工程化解决方案</h2>
        <p>
          <img src="../assets/logo.png" alt="vue" class="smallimg img0border">
          <img src="../assets/webpack.png" alt="webpack" class="smallimg img0border">
          <img src="../assets/nodejs.png" alt="nodejs" class="smallimg img0border">
          <img src="../assets/npm.png" alt="npm" class="smallimg img0border">
          <img src="../assets/eslint.png" alt="eslint" class="smallimg img0border">
        </p>
      </section>

      <section>
        <h2>蛤 ?</h2>
        <p>且慢</p>
        <p class="fragment fade-up">我一个搞Java的，怎么突然搞起了前端？</p>
      </section>

      <section>
        <p>端州区资产管理系统代码类型对比</p>
        <p><img src="../assets/javavsjs.png" alt=""></p>
      </section>

      <section>
        <p>在这些代码中，行数最多的代码总共有</p>
        <h2 class="fragment fade-up red">7000 行</h2>
      </section>

      <section>
        <h2>当下的问题</h2>
        <p>
          <ul>
            <li class="fragment fade-up">代码复杂度急剧增长</li>
            <li class="fragment fade-up">代码组织混乱</li>
            <li class="fragment fade-up">开发效率低下</li>
          </ul>
        </p>
      </section>

      <section>
        <p>如何应对复杂度？</p>
        <p class="fragment fade-up blue">引入前端框架</p>
        <p class="fragment fade-up">但是框架本身也有复杂度，于是我们也要应对框架的复杂度</p>
        <p class="fragment fade-up">于是就有如下情况</p>
      </section>

      <section>
        <p class="fragment fade-up"><span class="big">应用复杂度</span> <span class="yellow">VS</span> <span class="small">工具复杂度</span></p>
        <p class="fragment fade-up">工具太弱</p>
        <p class="fragment fade-up"><span class="small">应用复杂度</span> <span class="yellow">VS</span> <span class="big">工具复杂度</span></p>
        <p class="fragment fade-up">杀鸡用牛刀</p>
      </section>

      <section>
        <h2>我们需要可弹性伸缩复杂度的工具</h2>
        <p class="fragment fade-up">
          <p>Vue.js</p>
          <img src="../assets/logo.png" alt="vue" class="img0border">
        </p>
      </section>

      <section>
        <section>
          <p><a href="/static/simpleVue.html" target="_blank">声明式渲染</a></p>
          <p class="fragment fade-up"><a href="/static/simpleVue.html" target="_blank">组件系统</a></p>
        </section>

        <section>
          <p></p>
        </section>
      </section>

    </div>
  </div>
</template>

<script>
export default {
  name: 'PPT',
  mounted () {
    const Reveal = window.Reveal
    Reveal.initialize()
  },
  updated () {
    const Reveal = window.Reveal
    Reveal.initialize()
  }
}
</script>

<style scoped>
.smallimg{
  width: 80px;
  background: inherit;
}
.red{
  color: #c0392b;
}
.blue{
  color: #3498db;
}
.yellow{
  color: #f1c40f;
}
.big{
  font-size: 150%;
}
.small{
  font-size: 80%;
}
.img0border{
  border: 0;
  background: inherit;
}
</style>
