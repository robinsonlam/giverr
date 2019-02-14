<template>
  <div id="app">
    <BannerMessage msg="This is giverr"/>
  </div>
</template>

<script>
import BannerMessage from './components/BannerMessage.vue'

export default {
  name: 'app',
  components: {
    BannerMessage
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
