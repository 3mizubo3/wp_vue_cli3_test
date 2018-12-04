<template>
  <div id="app">
    <router-link to="/">AnySchool</router-link>
    <router-link to="/about">Any Schoolとは?</router-link>
    <router-link to="/report_all">活動報告</router-link>
    <router-link to="/contact">お問い合わせ</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
//import AnySchool from './components/AnySchool.vue'
export default {
  name: 'App',
  components: {
    //AnySchool
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
