<template lang="html">
  <div class="reveal">
    <div class="slides">
      <section>
        <h2>前端开发工程化解决方案</h2>
        <p>
          <img src="../assets/logo.png" alt="vue" class="smallimg">
          <img src="../assets/webpack.png" alt="webpack" class="smallimg">
          <img src="../assets/nodejs.png" alt="nodejs" class="smallimg">
          <img src="../assets/npm.png" alt="npm" class="smallimg">
          <img src="../assets/eslint.png" alt="eslint" class="smallimg">
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
  border: 0;
}
</style>
