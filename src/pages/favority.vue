<template>
  <div class="favor">
    <Operate/>
    <List/>
    <Page/>
  </div>
</template>

<script>
import Operate from '../components/favor/favorOperate'
import List from '../components/favor/favorList'
import Page from '../components/favor/favorPage'
export default {
  name: 'myFavority',
  components: {
    Operate,
    List,
    Page
  }
}
</script>

<style scoped>
.favor {
    box-sizing: border-box;
    width: 1026px;
    height: 750px;
    margin: 0 auto;
    padding: 120px 50px 0;
    /* background-color: skyblue; */
}

</style>