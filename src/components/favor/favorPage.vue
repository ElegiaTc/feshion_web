<template>
  <div class="page-box">
    <div class="last-page" @click="lastPage">上一页</div>
    <div class="page-num">
        <input type="text" placeholder="页数" 
        v-model.number="turnToPage" @keyup.enter="turnPage">
         &nbsp;/ &nbsp;&nbsp;{{nowPage}}
    </div>
    <div class="next-page" @click="nextPage">下一页</div>
  </div>
</template>

<script>
export default {
    name: 'favorPage',
    data() {
        return {
            nowPage: 1,
            totalPage: 10,
            turnToPage: null
        }
    },
    methods: {
        lastPage() {
            if (this.nowPage === 1) return
            this.nowPage -- ;
        },
        nextPage() {
            if (this.nowPage === this.totalPage) return
            this.nowPage ++ ;
        },
        turnPage() {
            if (this.turnToPage < 1 || this.turnToPage > this.totalPage) return
            this.nowPage = this.turnToPage
        }
    }
}
</script>

<style scoped>
.page-box {
    display: flex;
    width: 500px;
    margin: 0 auto;
}
.last-page,.next-page {
    width: 150px;
    height: 30px;
    border: 1px solid #555;
    text-align: center;
    line-height: 29px;
    font-size: 14px;
    cursor: pointer;
}
.last-page:hover,.next-page:hover {
    background-color: rgb(121,121,121);
    color: #fff;
}
.page-num {
    width: 196px;
    height: 30px;
    text-align: center;
    line-height: 33px;
    font-size: 12px;
}
.page-num input{
    width: 30px;
    border: none;
    outline: none;
}
</style>