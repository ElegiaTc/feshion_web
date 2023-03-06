<template>
  <div class="show-place">
    <div class="title">
        — — S H I L I U 秀 场 — —
    </div>
    <ul class="pictures">
        <li v-for="(p,index) in pictureList" :key="index">
            <div class="picture-place">
                <img :src="p.path" alt="">
                <div class="hover-page" @click="turnToShow(p.photoId,p.id)">
                    <div class="operate-box">
                        <div class="download" @click.stop="downloadImg(p.path)"><i class="el-icon-download"></i></div>
                        <div class="favor" @click.stop="addFavor(p.path,p.name)"><i class="el-icon-folder"></i></div>
                        <div class="search"><i class="el-icon-search"></i></div>
                    </div>
                </div>
            </div>
            <div class="picture-name">{{p.name}}</div>
        </li>
    </ul>
    <el-dialog
        :visible.sync="dialogVisible"
        width="35%"
        title='加入收藏夹'
        :show-close='false'
        top="25vh"
        :close-on-click-modal='false'
        @close='checkList=[];favorList=[];'
        center>
        <el-checkbox-group v-model="checkList">
            <el-checkbox v-for="(f,index) in favorList" :key="index"
            :label="f.id">{{f.name}}</el-checkbox>
        </el-checkbox-group>
        <span slot="footer" class="dialog-footer">
            <el-button type="primary" @click="photoTo">确 定</el-button>
            <el-button @click="dialogVisible = false">取 消</el-button>
        </span>
    </el-dialog>
 </div>
</template>

<script>
import {getShowList,showFolderByPage,addPhotoToFolder} from '../../api'
import {mapState} from 'vuex' 
export default {
    name: 'showPlace',
    components: [
    ],
    data() {
        return {
            pictureList:[],
            onOff:false,
            pageSize:6,
            current:1,
            pages:2,
            nowPhotoPath:'',
            nowPhotoName:'',
            dialogVisible:false,
            favorList:[],
            checkList:[],
            nowFolderId:-1,
        }
    },
    computed: {
        ...mapState(['userId'])
    },
    mounted(){
        getShowList({current:1,pageSize:6}).then(res=>{
            console.log(res);
            this.pictureList = res.data.records;
            this.pages = res.data.pages;
        }),
        window.addEventListener("scroll",this.throttleFun,true);
    },
    beforeDestroy() {
        window.removeEventListener("scroll",this.throttleFun,true);
    },
    activated() {
        
    },
    methods: {
        //点击去秀场
        turnToShow(photoId,showId) {
            window.removeEventListener("scroll",this.throttleFun,true);
            this.$router.push({
            name: 'showTime',
                query: {
                photoId,
                showId
                }
            })
        },
        //点击收藏并展示收藏夹列表
        addFavor(path,name) {
            if(this.userId!=-1) {
                this.nowPhotoPath = path;
                this.nowPhotoName = name;
                console.log(path,name);
                this.dialogVisible = true;
                showFolderByPage({
                    current: 1,
                    userId: this.userId,
                    pageSize: 1,
                    id:this.nowFolderId
                }).then(res => {
                    console.log(res);
                    showFolderByPage({
                        current: 1,
                        userId: this.userId,
                        pageSize: res.data.folders.total,
                        id:this.nowFolderId
                    }).then(res => {
                        console.log(res);
                        this.favorList = res.data.folders.records;
                    })
                 })
            } else {
                this.$router.push('/login');
            }
        },
        //添加图片到收藏夹
        photoTo() {
            this.checkList.forEach(e => {
                addPhotoToFolder({
                    folderId:e,
                    photoName:this.nowPhotoName,
                    photoPath:this.nowPhotoPath,
                    description:'no',
                    note:'no'
                }).then(res => {
                    console.log(res);
                    this.dialogVisible = false;
                    this.$message({
                        message: '添加成功！',
                        type: 'success'
                    });
                })
            });
        },
        handleScroll() {
            //标准浏览器中：定义一个形参event，但当事件触发的时候，并没有给event赋实际的值，则浏览器会把”事件“的对象赋给这个形参e，这时这个e是个系统级的对象：事件；
            const scrollDistance = document.documentElement.scrollHeight - document.documentElement.scrollTop - document.documentElement.clientHeight;

            // 滚动条距离底部小于等于0证明已经到底了，可以请求接口了
            if (scrollDistance <= 5) {
                //这个开关是为了避免请求数据中 再次被请求
                if (this.onOff) return;
                this.onOff = true;
                //当前页数小于总页数 就请求
                if (this.current < this.pages) {
                this.current += 1;
                let data = {current:this.current,pageSize:this.pageSize};
                //请求数据
                getShowList(data).then(res => {
                    console.log(res);
                    this.onOff = false;
                    // this.current = res.data.current;
                    this.pictureList = this.pictureList.concat(res.data.records);
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
            this.throttle(this.handleScroll(), 1000);
        },
        downloadImg(imgsrc) { //下载图片地址和图片名
				// var image = new Image();
				// // 解决跨域 Canvas 污染问题
				// image.setAttribute("crossOrigin", "anonymous");
				// image.onload = function() {
				// 	var canvas = document.createElement("canvas");
				// 	canvas.width = image.width;
				// 	canvas.height = image.height;
				// 	var context = canvas.getContext("2d");
				// 	context.drawImage(image, 0, 0, image.width, image.height);
				// 	var url = canvas.toDataURL("image/png"); //得到图片的base64编码数据
					var a = document.createElement("a"); // 生成一个a元素
					var event = new MouseEvent("click",{
                        bubbles: true,
                        cancelable: true,
                        view: window
                    }); // 创建一个单击事件
					a.download = "photo.jpg"; // 设置图片名称
					a.href = imgsrc; // 将生成的URL设置为a.href属性
					a.dispatchEvent(event); // 触发a的单击事件
				// };
				// image.src = imgsrc;
			},
    }
}
</script>

<style scoped>
.show-place {
    width: 1026px;
    margin: 0 auto;
    background-color: rgb(219,229,234);
}
.show-place .title {
    text-align: center;
    font-weight: 700;
    font-size: 24px;
}
.show-place .pictures {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
}
.show-place .pictures li {

    width: 290px;
    height: 460px;
    margin-top: 50px;
    /* background-color: pink; */
}
.show-place .pictures li .picture-place {
    position: relative;
    width: 290px;
    height: 400px;
    background-color: skyblue;
    cursor: pointer;
}
.show-place .pictures li .picture-place img {
    width: 290px;
    height: 400px;
}
.pictures li .picture-place .hover-page {
    display: flex;
    align-items: flex-end;
    position: absolute;
    top: 0;
    left: 0;
    width: 290px;
    height: 400px;
    background-color: rgba(128,128,128,0.5);
    opacity: 0;
    transition: 0.5s all;
}
.hover-page .operate-box {
    display: flex;
    width: 290px;
    height: 25px;
    justify-content: space-around;
    margin-bottom: 15px;
}
.hover-page .operate-box div {
    background-color: #fff;
}
.show-place .pictures li .picture-name {
    opacity: 0;
    line-height: 50px;
    text-align: center;
    font-size: 14px;
    transition: 0.5s all;
}
.pictures li:hover .hover-page,
.pictures li:hover .picture-name{
    opacity: 1;
}
</style>