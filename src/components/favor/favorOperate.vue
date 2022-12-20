<template>
  <div class="operate">
        <div class="nav">收藏夹 / 1级</div>
        <div class="buttons">
            <div class="allchecked" style="color: #333;">
                <input type="checkbox" id="checkedall" 
                v-model="showDelate" :value="true"> 全选
            </div>
            <div class="downloads" style="cursor:pointer">批量下载</div>
            <div class="new-more" style="cursor:pointer"
            @click="addFavor">新建收藏夹</div>
            <div v-show="showDelate" class="delate" 
            style="cursor:pointer" @click="deleteFavor">删除</div>
            <span v-show="!showDelate" class="delate-push"></span>
        </div>
        <div class="search-box">
            <input type="text" v-model="keyWord">
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import {addFolder,deleteFolder} from '../../api'
export default {
    name: 'favorOperate',
    data() {
        return {
            nav: '1级',
            keyWord: '',
            showDelate:false,
            pathid:1
        }
    },
    methods: {
        addFavor() {
            addFolder({name:'我的文件夹2号',userId:this.userId,parentId:-1})
            .then(res => {
                console.log(res);
            })
        },
        deleteFavor() {
            deleteFolder(this.pathid).then(res => {
                console.log(res);
            })
        }
    },
    computed: {
        ...mapState(['userId'])
    }
}
</script>

<style scoped>
.operate {
    display: flex;
    width: 926px;
    margin-bottom: 30px;
}
.operate .nav {
    width: 150px;
}
.operate .buttons {
    display: flex;
    justify-content: space-around;
    width: 480px;

}
.operate .buttons > div {
    height: 25px;
    line-height: 24px;
    padding: 0 10px;
    border: 1px solid #000;
    font-size: 14px;
    color: #777;
}
.operate .buttons .delate {
    width: 80px;
    color: red;
    padding: 0;
    text-align: center;
}
.operate .buttons .delate-push {
    width: 82px;
    border: none;
}
.operate .search-box {
    margin-left: 73px;
}
.operate .search-box input {
    width: 220px;
    height: 25px;
    outline: none;
}
#checkedall {
    width: 15px;
    height: 15px;
    float: left;
    margin-right: 10px;
    margin-top: 5px;
}
</style>