<template>
    <div>
    <div class="item-name">
      <span style="margin-left:95px">图片</span>
      <span style="margin-left:165px">信息</span>
      <span style="margin-left:360px">操作</span>
    </div>
    <ul class="record-list">
      <li class="records" v-for="(r,index) in recordList" :key='index'>
        <div class="pic">
          <img src="" alt="">
        </div>
        <div class="details">
          <div class="pic-name">名称: 123</div>
          <div class="pic-sort">分类: 123</div>
          <div class="pic-size">大小: 123</div>
        </div>
        <div class="see-more">查看详情</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
    name: 'myDownload',
    data() {
      return {
        recordList: [
          {
            id:'001',
          },
          {
            id:'002'
          },
          {
            id:'003'
          }
        ]
      }
    }
}
</script>

<style>

</style>