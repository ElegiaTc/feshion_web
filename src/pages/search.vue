<template>
  <div class="search">
    <div class="search-lab">
        <input type="text" v-model="keyWord"
        placeholder="输入查找内容"
        @keyup.enter="searchPicture">
        <div class="search-button" @click="searchPicture">搜索</div>
    </div>
    <div class="show-operate">
        <ul>
            <li v-for="(o,index) in operateList" :key="index"
            :class="{hover: changeStyle == index}" @click="changeFunction(index)">{{o.name}}</li>
        </ul>
        <div class="operate-more">批量操作</div>
        <div class="result-count">共 {{resultCount}} 个结果</div>
    </div>
    <ul class="search-result" v-loading="loading">
        <li v-for="(s,index) in searchList" :key="index">
            <img :src="s.path" alt="">
            <div class="hover-page"></div>
        </li>
    </ul>
  </div>
</template>

<script>
import {queryShowList} from '../api'
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
            searchList:[],
            keyWord: '',
            changeStyle: '0',
            resultCount: 123456,
            loading:true,
            current:1,
            pageSize:16,
            onOff:false,
            pages:2,
            flag:true,     //为真时才能搜索 防抖
        }
    },
    created() {
        this.keyWord = this.$route.params.searchKeyWord
    },
    mounted() {
        queryShowList({
            keyword:this.keyWord,
            current:this.current,
            pageSize:this.pageSize})
        .then(res => {
            console.log(res);
            this.loading = false;
            this.resultCount = res.data.total;
            this.searchList = res.data.records;
            this.pages = res.data.pages;
        })
        window.addEventListener("scroll",this.throttleFun,true);
    },
    methods:{
        changeFunction(index) {
            this.changeStyle = index;
        },
        searchPicture() {
            if(this.keyWord != '' && this.flag && !this.loading) {
                this.current = 1;
                this.loading = true;
                this.flag = false;
                setTimeout(() => {
                    this.flag = true;
                }, 1200);
                queryShowList({
                    keyword:this.keyWord,
                    current:this.current,
                    pageSize:this.pageSize
                }).then(res => {
                    this.loading = false;
                    this.resultCount = res.data.total;
                    this.searchList = res.data.records;
                    this.pages = res.data.pages;
                })
            }
        },
        handleScroll() {
            //标准浏览器中：定义一个形参event，但当事件触发的时候，并没有给event赋实际的值，则浏览器会把”事件“的对象赋给这个形参e，这时这个e是个系统级的对象：事件；
            const scrollDistance = document.documentElement.scrollHeight - document.documentElement.scrollTop - document.documentElement.clientHeight;

            // 滚动条距离底部小于等于0证明已经到底了，可以请求接口了
            if (scrollDistance <= 50) {
                //这个开关是为了避免请求数据中 再次被请求
                if (this.onOff) return;
                this.onOff = true;
                //当前页数小于总页数 就请求
                if (this.current < this.pages) {
                this.current += 1;
                let data = {current:this.current,pageSize:this.pageSize};
                //请求数据
                queryShowList(data).then(res => {
                    console.log(res);
                    this.onOff = false;
                    // this.current = res.data.current;
                    this.searchList = this.searchList.concat(res.data.records);
                    });
                }
            }
        },
        // 节流
        throttle(fn,wait) {
            let context, args;
            let previous = 0;
            return function() {
                let now = +new Date();
                context = this;
                args = arguments; // 取throttle执行作用域的this
                if (now - previous > wait) {
                    fn.apply(context, args); // 用apply指向调用throttle的对象，相当于throttle.fn(args);
                    previous = now;
                }
            };
        },
        throttleFun() {
            this.throttle(this.handleScroll(), 2000);
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
    /* background-color: pink; */
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