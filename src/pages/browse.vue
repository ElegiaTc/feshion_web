<template>
  <div>
    <div class="item-name">
      <span style="margin-left:95px">图片</span>
      <span style="margin-left:165px">信息</span>
      <span style="margin-left:360px">操作</span>
    </div>
    <ul class="record-list">
      <li class="records" v-for="r in recordList" :key='r.id'>
        <div class="pic">
          <img :src="r.photoPath" alt="">
        </div>
        <div class="details">
          <div class="pic-name">名称: {{r.brandName}}</div>
          <div class="pic-sort">分类: 123</div>
          <div class="pic-size">大小: 123</div>
        </div>
        <div class="see-more" @click="toShow(r.id,r.photoId)">查看详情</div>
      </li>
    </ul>
    <div class="is-empty" v-show="isEmpty">浏览记录为空！</div>
  </div>
</template>

<script>
import {getBrowsingRecord} from '../api'
export default {
    name: 'myBrowse',
    data() {
      return {
        recordList: [],
        current:0,
        pageSize:4,
        isEmpty: false
      }
    },
    mounted() {
      getBrowsingRecord({current:0,pageSize:4})
      .then(res => {
        console.log(res);
        if(res.data != null) {
          this.isEmpty = false
          this.recordList = res.data.records
        } else {
          this.isEmpty = true
        }
      })
    },
    methods: {
      toShow(showId,photoId) {
          this.$router.push({
            name: 'showTime',
            query: {
            photoId,
            showId
            }
          })
      }
    }
}
</script>

<style>
.item-name {
  display: flex;
  width: 826px;
  height: 30px;
  font-size: 13px;
  margin-top: 10px;
}
.record-list li {
  width: 746px;
  height: 120px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #000;
}
.record-list li .pic {
  width: 120px;
  height: 70px;
  margin-left: 10px;
  border: 1px solid #000;
}
.record-list li .pic img {
  width: 100%;
  height: 100%;
}
.record-list li .details {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 400px;
  height: 75px;
  margin-left: 60px;
  font-size: 14px;
}
.record-list li .see-more {
  width: 78px;
  height: 28px;
  line-height: 27px;
  text-align: center;
  margin-left: 13px;
  border: 1px solid #999;
  border-radius: 3px;
  font-size: 13px;
  color: #999;
}
.record-list li .see-more:hover {
  background-color: rgb(121,121,121);
  color: #fff;
}
.is-empty {
  width: 746px;
  height: 50px;
  line-height: 48px;
  border: 1px solid #000;
  margin: 50px auto;
  border-radius: 10px;
  text-align: center;
  font-size: 26px;
}
</style>