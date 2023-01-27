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
  },
  created() {
    if(this.$router.path !== '/home') {
      this.$router.push('/home')
    }
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
.btn-plain {
  width: 130px;
  height: 48px;
  border-radius: 8px;
  border: 1px solid rgb(66,42,42);
  text-align: center;
  line-height: 48px;
  cursor: pointer;
  user-select: none;
}
.btn-confirm {
  width: 173px;
  height: 60px;
  background-color: rgb(76,75,103);
  border-radius: 12px;
  text-align: center;
  line-height: 60px;
  color: #fff;
  cursor: pointer;
  user-select: none;
}
</style>
