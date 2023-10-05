<template>
  <div>
    <!-- 跳转-声明式 -->

    <!-- 展示区 router-view -->




    <header>
      <!-- 在这里放置你的导航栏或其他内容 -->
      <AppHeader></AppHeader>
    </header>

    <main>
      <nuxt-child /> <!-- 这里显示页面内容 -->
    </main>

    <footer>
      <!-- 在这里放置你的页脚或其他内容 -->
      <Footerc />
    </footer>

  </div>
</template>


<script>
import AppHeader from './app-header';
import Footerc from './footerc.vue';
export default {
  components: {
    AppHeader,
    Footerc
  },


}
</script>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 62.5%;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  background-color: #ffffff;
  width: 100%;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
</style>
