<template>
  <div class="home">
    <Carousel/>
    <Fashion/>
    <Show/>
  </div> 
</template>

<script>
import Carousel from '../components/home/carousel'
import Fashion from '../components/home/fashionWeb'
import Show from '../components/home/showPlace'
export default {
  name: 'myHome',
  components: {
    Carousel,
    Fashion,
    Show
  }
}
</script>

<style scoped>

</style>