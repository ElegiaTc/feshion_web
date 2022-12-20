<template>
  <div>
    <Header></Header>
    <!-- <keep-alive>
    <router-view v-if="$route.meta.keepAlive"/>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"/> -->
    <router-view/>
  </div>
</template>

<script>
import Header from './components/common/myHeader.vue'
export default {
  name: 'App',
  components: {
    Header,
    
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
