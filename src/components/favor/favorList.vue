<template>
    <div>
        <ul class="favor-list" v-loading:body='loading' v-if="isFolder">
            <li class="list-show" @click="clickToChoose('001')"
            v-for="(f,index) in favorList" :key="index">
                <div class="picture-show" >
                </div>
                <p>{{f.name}}</p>
                <div class="operate-box">
                    <div class="toSonFavor" @click="toSonFavor(f.id,f.name)"><i class="el-icon-right"></i></div>
                    <div class="delete" @click.stop="ifDelete(f.id)"><i class="el-icon-folder-delete"></i></div>
                </div>
            </li>
            <li class="add-more" v-show="!loading" @click="addPhotoOrFolder">
                <i class="el-icon-circle-plus"></i>
            </li>
        </ul>
        <ul class="photo-list" v-loading:body='loading' v-else>
            <li class="list-show" @click="clickToChoose('001')"
            v-for="(f,index) in favorList" :key="index">
                <div class="picture-show" >
                    <img :src="f.photoPath" alt="">
                </div>
                <p>{{f.photoName}}</p>
                <div class="operate-box">
                    <div class="toSonFavor" @click="toSonFavor(f.id,f.name)"><i class="el-icon-right"></i></div>
                    <div class="delete" @click.stop="ifDelete(f.id)"><i class="el-icon-delete"></i></div>
                </div>
            </li>
            <li class="add-more" v-show="!loading" @click="addPhotoOrFolder">
                <i class="el-icon-circle-plus"></i>
            </li>
        </ul>
        <el-dialog
            :visible.sync="dialogVisible"
            width="25%"
            :show-close=false
            top="35vh"
            center>
            <span class="content">确认要删除吗？</span>
            <el-divider></el-divider>
            <span slot="footer" class="dialog-footer">
                <el-button type="primary" @click="deleteOneFavor">确 定</el-button>
                <el-button @click="dialogVisible = false">取 消</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
import {showFolderByPage,deleteFolder,deletePhotoFromFolder} from '../../api'
import {mapState} from 'vuex' 
export default {
    name: 'favorList',
    data() {
        return {
            loading:true,  //加载标识符
            favorList:[],
            photoList:[],
            checkedList:[],
            isChecked: false,
            current:1,
            pageSize:7,
            nowFolderId:-1,
            dialogVisible:false,
            deleteFolderId:-1,
            isFolder:true,   //判断是展示收藏夹还是图片
        }
    },
    methods: {
        clickToChoose(id) {
            this.checkedList.push(id);
            this.isChecked = !this.isChecked
        },
        //翻页
        turnPage() {
            showFolderByPage({
                current: this.current,
                userId: this.userId,
                pageSize: this.pageSize,
                id:this.nowFolderId
            }).then(res => {
                console.log(res);
                this.loading = false;
                if(this.isFolder) {
                    this.favorList = res.data.folders.records;
                    this.$bus.$emit('updateFolderTotalPage',res.data.folders.pages) //更新总页数
                } else {
                    this.favorList = res.data.folderPhotos.records;
                    this.$bus.$emit('updatePhotoTotalPage',res.data.folderPhotos.pages)
                }
            })
        },
        ifDelete(id) {
            this.deleteFolderId = id;
            this.dialogVisible = true;
        },
        deleteOneFavor() {
            this.dialogVisible = false;
            this.loading = true;
            if(this.isFolder) {
                deleteFolder(this.deleteFolderId).then(res => {
                console.log(res);
                this.current = 1;
                this.turnPage();
                this.$bus.$emit('deletefavorChange',1);
            })} else {
                deletePhotoFromFolder(this.deleteFolderId).then(res => {
                    console.log(res);
                    this.current = 1;
                    this.turnPage();
                    this.$bus.$emit('deletefavorChange',1);
                })
            }
        },
        toSonFavor(id,name) {
            this.nowFolderId = id;
            this.loading = true;
            this.turnPage();
            this.$bus.$emit('nowFavor',{id,name})
        },
        addPhotoOrFolder() {
            if(this.isFolder) {
                this.$bus.$emit('addFolderFromList',true) //列表中添加
            }
        }
    },
    created() {
        this.$bus.$on('addFavor',(page) => {
            this.current = page;
            this.loading = true;
            this.turnPage();
            this.$bus.$emit('addfavorChange',1);
        })
        this.$bus.$on('deleteFavor',(page) => {
            this.current = page;
            this.loading = true;
            this.turnPage();
        })
        this.$bus.$on('turnLastPage',(page) => {
            this.current += page;
            this.loading = true;
            this.turnPage();
        })
        this.$bus.$on('turnNextPage',(page) => {
            this.current += page;
            this.loading = true;
            this.turnPage();
        })
        this.$bus.$on('turnAnyPage',(page) => {
            if(this.current !== page) {
                this.current = page;
                this.loading = true;
                this.turnPage();
            }
        })
        this.$bus.$on('changeTypeBefore',(bool) => {
            this.isFolder = bool;
            this.loading = true;
            this.current = 1;
            this.turnPage();
        })
        this.$bus.$on('jumpToFolder',(id) => {
            this.nowFolderId = id;
            this.loading = true;
            this.current = 1;
            this.turnPage();
        })
    },
    mounted() {
        showFolderByPage({
            current: this.current,
            userId: this.userId,
            pageSize: this.pageSize,
            id:this.nowFolderId
        }).then(res => {
            console.log(res);
            this.loading = false;
            this.favorList = res.data.folders.records;
            this.$bus.$emit('totalFavorPage',res.data.folders.pages)
        })
    },
    beforeDestroy() {
        this.$bus.$off('addFavor');
        this.$bus.$off('deleteFavor');
        this.$bus.$off('turnLastPage');
        this.$bus.$off('turnNextPage');
        this.$bus.$off('turnAnyPage');
        this.$bus.$off('changeTypeBefore');
        this.$bus.$off('jumpToFolder');
    },
    computed: {
        ...mapState(['userId'])
    },
    watch: {
        loading(newVal,oldVal) {
            if(!newVal) {
                this.$bus.$emit('changeTypeAfter',newVal);
                console.log(oldVal);
            }
        }
    }
}
</script>

<style scoped>
.favor-list,
.photo-list {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    width: 926px;
    height: 530px;
}
img {
    width: 100%;
    height: 100%;
}
.list-show,
.add-more{
    box-sizing: border-box;
    margin: 0 90px 30px 0;
    padding: 40px 25px 5px 25px;
    width: 163px;
    /* max-width: calc((100%-240px)/4);
    min-width: calc((100%-240px)/4); */
    height: 240px;
    border: 1px solid #aaa;
    box-shadow: 0 0 2px 1px #aaa;
    cursor: pointer;
}
.photo-list .list-show {
    padding: 8px 20px 0px 20px;
}
.list-show:nth-child(4n),
.add-more{
    margin-right: 0;
}
.list-show .picture-show {
    width: 111px;
    height: 109px;
    margin: auto;
    border: 1px solid #000;
}
.list-show p {
    text-align: center;
    font-size: 14px;
    margin-top: 5px;
    padding-bottom: 10px;
    border-bottom: 1px solid #000;
}
.list-show .operate-box {
    display: flex;
    justify-content: space-around;
    width: 111px;
    height: 30px;
    margin: 10px auto;
    border: 1px solid #000;
    opacity: 0;
}
.operate-box .download,
.operate-box .delete {
    font-size: 20px;
}
.list-show:hover .operate-box {
    opacity: 1;
}
.add-more {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
}
.add-more i {
    font-size: 100px;
    color: #ccc;
}
.el-dialog .content {
    text-align: center;
}
</style>