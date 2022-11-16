<template>
  <div>
    <Head></Head>
    <router-view></router-view>
  </div>
</template>

<script>
import Head from './components/common/myHeader.vue'
export default {
  name: 'App',
  components: {
    Head
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
  color: #000;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

li {
  list-style: none;
}
</style>
