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
            this.$bus.$emit('turnLastPage',-1);
        },
        nextPage() {
            if (this.nowPage === this.totalPage) return
            this.nowPage ++ ;
            this.$bus.$emit('turnNextPage',1);
        },
        turnPage() {
            if (this.turnToPage < 1 || this.turnToPage > this.totalPage) return
            this.nowPage = this.turnToPage
            this.$bus.$emit('turnAnyPage',this.turnToPage)
        }
    },
    created() {
        this.$bus.$on('totalFavorPage',(pages) => {
            this.totalPage = pages
        });
        this.$bus.$on('updateFolderTotalPage',(pages) => {
            this.totalPage = pages
        });
        this.$bus.$on('updatePhotoTotalPage',(pages) => {
            this.totalPage = pages
        });
        this.$bus.$on('addfavorChange',(pages) => {
            this.nowPage = pages;
        })
        this.$bus.$on('deletefavorChange',(pages) => {
            this.nowPage = pages;
        })
    },
    beforeDestroy() {
        this.$bus.$off('totalFavorPage');
        this.$bus.$off('updateFolderTotalPage');
        this.$bus.$off('updatePhotoTotalPage');
        this.$bus.$off('addfavorChange');
        this.$bus.$off('deletefavorChange');
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