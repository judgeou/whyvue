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
        <p>在这些代码中，行数最多的html文件总共有</p>
        <h2 class="fragment fade-up red">7000 行代码</h2>
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
        <p>
          <p><a href="https://cn.vuejs.org/v2/guide/" target="_blank">Vue.js</a></p>
          <img src="../assets/logo.png" alt="vue" class="img0border">
        </p>
      </section>

      <section>
        <section>
          <p><a href="/static/simpleVue.html" target="_blank">声明式渲染</a></p>
          <p class="fragment fade-up"><img src="../assets/viewstate.png" alt=""></p>
          <p class="fragment fade-up">jQuery 已老</p>
        </section>

        <section>
          <p><a href="/static/comVue.html" target="_blank">组件系统</a></p>
          <p class="fragment fade-up"><img src="../assets/uicom.png" alt=""></p>
          <p class="fragment fade-up">父组件向子组件单向通信</p>
          <p class="fragment fade-up">子组件向外部派发事件</p>
        </section>

        <section>
          <h2>更多的功能</h2>
          <p>
            <ul>
              <li>客户端路由 <a href="https://router.vuejs.org/zh-cn/" target="_blank">vue-router</a></li>
              <li>状态管理 <a href="http://vuex.vuejs.org/zh-cn/" target="_blank">vuex</a></li>
            </ul>
          </p>
        </section>
      </section>

      <section>
        <p>但是 <span class="fragment fade-up">目前定义组件的方式存在很多问题</span></p>
        <p class="fragment fade-up">
          <ul>
<li><strong class="wisteria">全局定义</strong>  强制要求每个 component 中的命名不得重复</li>
<li><strong class="wisteria">字符串模板</strong>  缺乏语法高亮，在 HTML 有多行的时候，需要用到丑陋的 <code>\</code></li>
<li><strong class="wisteria">不支持CSS</strong>  意味着当 HTML 和 JavaScript 组件化时，CSS 明显被遗漏</li>
<li><strong class="wisteria">没有构建步骤</strong>  限制只能使用 HTML 和 ES5 JavaScript,  而不能使用预处理器，如 Pug (formerly Jade) 和 Babel</li>
</ul>
        </p>
        <p class="fragment fade-up">还能不能愉快的写组件了 ?</p>
      </section>

      <section>
        <h2>答案是：能！，而且能写得更爽</h2>
        <h2 class="fragment fade-up">But How ?</h2>
      </section>

      <section>
        <h2>单文件组件</h2>
        <p><a href="https://doc.webpack-china.org/concepts/">webapck</a> + <a href="http://vue-loader.vuejs.org/en/">vue-loader</a></p>
        <p>
          <div>
            <img src="../assets/nodejs.png" alt="nodejs" class="smallimg img0border">
            <img src="../assets/npm.png" alt="npm" class="smallimg img0border">
            <img src="../assets/webpack.png" alt="webpack" class="smallimg img0border">

          </div>
        </p>
        <p>组件不需要在html页面中编写</p>
        <p>而是在外部写成vue文件</p>
        <p>再经由 <a href="https://doc.webpack-china.org/concepts/">webapck</a> 统一处理</p>
      </section>

      <section>
        <p>现在我们获得了：</p>
        <p>
          <ul>
<li><a href="https://github.com/vuejs/awesome-vue#syntax-highlighting" target="_blank" rel="external">完整语法高亮</a></li>
<li><a href="https://doc.webpack-china.org/concepts/modules/#what-is-a-webpack-module" target="_blank" rel="external">CommonJS 模块</a></li>
<li><a href="https://github.com/vuejs/vue-loader/blob/master/docs/en/features/scoped-css.md" target="_blank" rel="external">组件化的 CSS</a></li>
<li><a >组件热重载</a></li>
<li><a href="http://eslint.org/" target="_blank">Eslint 代码规范检查</a></li>
<li><a href="http://babeljs.io/" target="_blank">无阻碍使用ES6语法 (Babel)</a></li>
</ul>
        </p>
      </section>

      <section>
        <p>vue.js还有更多惊喜：</p>
        <p class="fragment fade-up">
          <ul>
            <li><a>服务端渲染</a></li>
            <li><a href="http://weex.incubator.apache.org/cn/">Weex</a></li>
          </ul>
        </p>
      </section>

      <section>
        <p>接下来我们还有更多的事情可以继续做：</p>
        <p class="fragment fade-up">
          <ul>
            <li>单元测试</li>
            <li>自动生成API文档</li>
            <li>部署持续集成服务</li>
          </ul>
        </p>
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
    const p = Number(getParameterByName('p') || 0)
    Reveal.slide(p)
  },
  updated () {
    const Reveal = window.Reveal
    Reveal.initialize()
  }
}

function getParameterByName (name, url) {
  /* eslint-disable */
  if (!url) {
    url = window.location.href;
  }
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, " "));
  /* eslint-enable */
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
.wisteria{
  color: #8e44ad;
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
