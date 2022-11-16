<template>
  <div class="search">
    <div class="search-lab">
        <input type="text" v-model="keyWord"
        placeholder="输入查找内容">
        <div class="search-button">搜索</div>
    </div>
    <div class="show-operate">
        <ul>
            <li v-for="(o,index) in operateList" :key="index"
            :class="{hover: changeStyle == index}" @click="changeFunction(index)">{{o.name}}</li>
        </ul>
        <div class="operate-more">批量操作</div>
        <div class="result-count">共 {{resultCount}} 个结果</div>
    </div>
    <ul class="search-result">
        <li>
            <img src="https://d1icd6shlvmxi6.cloudfront.net/gsc/WJHIRK/89/8e/ee/898eeec9a0ff4ed993a00ac41d13ddb5/images/首页（登录）/u103_state0.jpg?token=5f385efa5b657154722b9af127716143935fa492d3515547ee61f8cee658235c" alt="">
            <div class="hover-page"></div>
        </li>
         <li>
            <img src="https://d1icd6shlvmxi6.cloudfront.net/gsc/WJHIRK/89/8e/ee/898eeec9a0ff4ed993a00ac41d13ddb5/images/首页（登录）/u103_state0.jpg?token=5f385efa5b657154722b9af127716143935fa492d3515547ee61f8cee658235c" alt="">
            <div class="hover-page"></div>
        </li>
         <li>
            <img src="https://d1icd6shlvmxi6.cloudfront.net/gsc/WJHIRK/89/8e/ee/898eeec9a0ff4ed993a00ac41d13ddb5/images/首页（登录）/u103_state0.jpg?token=5f385efa5b657154722b9af127716143935fa492d3515547ee61f8cee658235c" alt="">
            <div class="hover-page"></div>
        </li>
         <li>
            <img src="https://d1icd6shlvmxi6.cloudfront.net/gsc/WJHIRK/89/8e/ee/898eeec9a0ff4ed993a00ac41d13ddb5/images/首页（登录）/u103_state0.jpg?token=5f385efa5b657154722b9af127716143935fa492d3515547ee61f8cee658235c" alt="">
            <div class="hover-page"></div>
        </li>
         <li>
            <img src="https://d1icd6shlvmxi6.cloudfront.net/gsc/WJHIRK/89/8e/ee/898eeec9a0ff4ed993a00ac41d13ddb5/images/首页（登录）/u103_state0.jpg?token=5f385efa5b657154722b9af127716143935fa492d3515547ee61f8cee658235c" alt="">
            <div class="hover-page"></div>
        </li>
         <li>
            <img src="https://d1icd6shlvmxi6.cloudfront.net/gsc/WJHIRK/89/8e/ee/898eeec9a0ff4ed993a00ac41d13ddb5/images/首页（登录）/u103_state0.jpg?token=5f385efa5b657154722b9af127716143935fa492d3515547ee61f8cee658235c" alt="">
            <div class="hover-page"></div>
        </li>
         <li>
            <img src="https://d1icd6shlvmxi6.cloudfront.net/gsc/WJHIRK/89/8e/ee/898eeec9a0ff4ed993a00ac41d13ddb5/images/首页（登录）/u103_state0.jpg?token=5f385efa5b657154722b9af127716143935fa492d3515547ee61f8cee658235c" alt="">
            <div class="hover-page"></div>
        </li>
         <li>
            <img src="https://d1icd6shlvmxi6.cloudfront.net/gsc/WJHIRK/89/8e/ee/898eeec9a0ff4ed993a00ac41d13ddb5/images/首页（登录）/u103_state0.jpg?token=5f385efa5b657154722b9af127716143935fa492d3515547ee61f8cee658235c" alt="">
            <div class="hover-page"></div>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
    name: 'mySearch',
    data() {
        return {
            operateList:[
                {
                    name: '最新'
                },
                {
                    name: '最佳'
                },
                {
                    name: '最潮'
                }
            ],
            keyWord: '',
            changeStyle: '0',
            resultCount: 123456
        }
    },
    created: function(){
        this.keyWord = this.$route.params.searchKeyWord
    },
    methods:{
        changeFunction(index) {
            this.changeStyle = index;
        }
    }
}
</script>

<style scoped>
.search {
    width: 1026px;
    margin: 80px auto;
}
.search-lab {
    width: 1026px;
    height: 40px;
    display: flex;
}
.search-lab input {
    outline: none;
    width: 870px;
    height: 36px;
    margin-left: 40px;
    border: 2px solid rgb(196,196,196);
    border-radius: 5px;
}
.search-lab .search-button {
    width: 76px;
    height: 40px;
    background-color: rgb(86,86,86);
    color: #fff;
    text-align: center;
    line-height: 39px;
    cursor: pointer;
}
.search-lab .search-button:hover {
    background-color: rgb(170,170,170);
}
.show-operate {
    display: flex;
    margin-top: 50px;
    margin-bottom: 20px;
}
.show-operate ul {
    display: flex;
    justify-content: space-between;
    width: 160px;
    margin-left: 40px;
}
.show-operate ul li {
    width: 40px;
    height: 20px;
    text-align: center;
    border-bottom: 3px solid rgb(170,170,170);
    font-size: 13px;
    cursor: pointer;
}
.hover {
    border-bottom: 3px solid rgb(54,54,54) !important;
}
.show-operate .operate-more {
    margin-left: 300px;
}
.show-operate .result-count {
    margin-left: 315px;
    line-height: 25px;
    font-size: 12px;
    color: rgb(184,184,184);
}
.search-result {
    display: flex;
    flex-wrap: wrap;
    width: 820px;
    margin: 0 auto;
}
.search-result li {
    position: relative;
    flex: 0 0 25%;
    width: 205px;
    height: 310px;
    background-color: pink;
    cursor: pointer;
}
.search-result img {
    width: 205px;
    height: 310px;
}
.search-result .hover-page {
    position: absolute;
    top: 0;
    left: 0;
    width: 205px;
    height: 310px;
    background-color: #888;
    opacity: 0;
    transition: 0.9s all;
}
.search-result li:hover .hover-page{
    opacity: 0.6;
}
</style>