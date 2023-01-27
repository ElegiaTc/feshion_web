<template>
    <div class="favor-operate">
        <ul class="nav-page">
            <li @click="turnNav(-1,-1)">收藏夹</li>
            <li v-for="(n,index) in navObjs" :key="index"
            @click="turnNav(index,n.id)">
                <i class="el-icon-arrow-right"></i>{{n.name}}
            </li>
        </ul>
        <div class="operate">
            <div class="buttons">
                <div class="allchecked" style="color: #333;">
                    <input type="checkbox" id="checkedall" 
                    v-model="showDelate" :value="true"> 全选
                </div>
                <div class="downloads" style="cursor:pointer">批量下载</div>
                <div class="new-more" style="cursor:pointer"
                @click="dialogVisible = true">新建收藏夹</div>
                <el-switch
                    v-model="value1"
                    active-text="文件夹"
                    inactive-text="图片"
                    active-color="#999"
                    inactive-color="#999"
                    :disabled="ifDis">
                </el-switch>
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
    </div>
</template>

<script>
import { mapState } from 'vuex'
import {addFolder,deleteFolder} from '../../api'
export default {
    name: 'favorOperate',
    data() {
        return {
            value1:true,
            ifDis:false,
            dialogVisible:false,
            navObjs:[],
            parentId:-1,
            folderName:'',
            keyWord: '',
            showDelate:false,
            pathid:15
        }
    },
    mounted() {
    },
    methods: {
        addFavor() {
            if(this.folderName != '') {
                this.dialogVisible = false;
                addFolder({name:this.folderName,userId:this.userId,parentId:this.parentId})
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
        },
        turnNav(index,id) {
            console.log(id);
            this.parentId = id;
            this.navObjs.splice(index + 1);
            this.$bus.$emit('jumpToFolder',id);
        }
    },
    created() {
        this.$bus.$on('nowFavor',(data) => {
            console.log(data);
            this.parentId = data.id;
            this.navObjs = this.navObjs.concat(data);
        })
        this.$bus.$on('changeTypeAfter',(bool) => {
            this.ifDis = bool;
        })
        //接收list传来的值，打开新建文件夹页面
        this.$bus.$on('addFolderFromList',(bool) => {
            this.dialogVisible = bool;
        })
    },
    beforeDestroy() {
        this.$bus.$off('nowFavor')
        this.$bus.$off('changeTypeAfter')
        this.$bus.$off('addFolderFromList')
    },
    computed: {
        ...mapState(['userId'])
    },
    watch: {
        value1(newVal,oldVal) {
            this.ifDis = true;
            this.$bus.$emit('changeTypeBefore',newVal);
            console.log(oldVal);
        }
    }
}
</script>

<style scoped>
.favor-operate {
    width: 926px;
    height: 90px;
}
.operate {
    display: flex;
    width: 926px;
    margin-bottom: 30px;
    margin-top: 15px;
}

.nav-page {
    display: flex;
}
.nav-page li {
    margin-right: 5px;
    cursor: pointer;
}
.operate .buttons {
    display: flex;
    justify-content: space-around;
    width: 660px;

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
    margin-left: 10px;
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