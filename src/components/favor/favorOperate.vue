<template>
  <div class="operate">
        <div class="nav"><i class="el-icon-folder"/>&nbsp;收藏夹 / 1级</div>
        <div class="buttons">
            <div class="allchecked" style="color: #333;">
                <input type="checkbox" id="checkedall" 
                v-model="showDelate" :value="true"> 全选
            </div>
            <div class="downloads" style="cursor:pointer">批量下载</div>
            <div class="new-more" style="cursor:pointer"
            @click="dialogVisible = true">新建收藏夹</div>
            <div v-show="showDelate" class="delate" 
            style="cursor:pointer" @click="deleteFavor">删除</div>
            <span v-show="!showDelate" class="delate-push"></span>
        </div>
        <div class="search-box">
            <input type="text" v-model="keyWord">
            <i class="el-icon-search"></i>
        </div>
        <el-dialog
            :visible.sync="dialogVisible"
            width="25%"
            :show-close=false
            top="35vh"
            center>
            <span style="font-size:24px">在当前页面新建收藏夹</span> <br><br>
            <input type="text" v-model="folderName"
             placeholder="请输入新建收藏夹名称" class="folder-name">
            <span slot="footer" class="dialog-footer">
                <el-button type="primary" @click="addFavor">确 定</el-button>
                <el-button @click="dialogVisible = false">取 消</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import {addFolder,deleteFolder} from '../../api'
export default {
    name: 'favorOperate',
    data() {
        return {
            dialogVisible:false,
            nav: '1级',
            folderName:'',
            keyWord: '',
            showDelate:false,
            pathid:15
        }
    },
    methods: {
        addFavor() {
            if(this.folderName != '') {
                this.dialogVisible = false;
                addFolder({name:this.folderName,userId:this.userId,parentId:-1})
                .then(res => {
                    this.folderName = '';
                    console.log(res);
                    this.$bus.$emit('addFavor',1)
                })
            }
        },
        deleteFavor() {
            deleteFolder(this.pathid).then(res => {
                console.log(res);
                this.$bus.$emit('deleteFavor',1)
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
    position: relative;
    margin-left: 73px;
}
.operate .search-box input {
    width: 220px;
    height: 25px;
    outline: none;
}
.search-box i {
    position: absolute;
    top: 3px;
    right: 5px;
    font-size: 22px;
}
#checkedall {
    width: 15px;
    height: 15px;
    float: left;
    margin-right: 10px;
    margin-top: 5px;
}
.folder-name {
    border: none;
    outline: none;
}
</style>