<template>
  <div id="posture" v-loading='loading'>
    <input type="file" @change="onchangemd" ref="uploadFromLocal">
    <div class="left">
        <div class="title">
            <img src="../assets/pose-logo.png" alt="">
        </div>
        <div class="upload-image">
            <img :src="modelUrl" alt="">
        </div>
    </div>
    <div class="right">
        <div class="pose-change">
            <p>姿势变化</p>
            <div class="picture">
                <div class="add">
                    <img :src="baseURL" alt="" v-if="baseURL!=''">
                </div>
                <div class="add" @click="localUpload">
                    <i class="el-icon-plus"></i>
                </div>
            </div>
        </div>
        <div class="btn-confirm" @click="formModel">确认生成</div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import {mapState} from 'vuex'
export default {
    name: 'posture',
    data() {
        return {
            loading: false,
            modelUrl: '',
            baseURL:'',
            fileArr: []
        }
    },
    methods: {
        localUpload() {
        this.$refs.uploadFromLocal.dispatchEvent(new MouseEvent('click'));
        },
        onchangemd(e){
            this.fileArr = this.modelFile
            this.fileArr.push(e.target.files[0])
            console.log(this.fileArr)
            
            let file = e.target.files[0]
            // 创建文件读取对象
            var reader = new FileReader()
            var that = this 
            //  将文件读取为DataURL
            reader.readAsDataURL(file)
            // 读取成功调用方法
            reader.onload = e => {
                console.log('读取成功');
                // e.target.result 获取 读取成功后的  文件DataURL
                that.baseURL = e.target.result
            }
        },
        formModel() {
            if(this.baseURL !== '') {
                this.loading = true
                let formdata = new FormData()
                formdata.append('source_img',this.fileArr[0])
                formdata.append('target_img',this.fileArr[1])
                axios.post('http://42.192.160.69:8891/api/v1/poseTransfer',formdata)
                .then(res => {
                    this.loading = false;
                    console.log(res);
                    // base64编码的图片
                    var base64Img = 'data:image/png;base64,'+ res.data.target_img;
                    //转换图片文件
                    var imgFile = this.base64ImgtoFile(base64Img); 
                    var baseURL = this.getObjectURL(imgFile);
                    console.log(baseURL);
                    this.$router.push({
                        name: 'show',
                        query: {
                            baseURL
                        }
                    })
                    this.$message({
                        message: '生成成功！',
                        type: 'success'
                    });
                })
                .catch(() => {
                    this.loading = false;
                    this.$message({
                        message: '生成失败！',
                        type: 'error'
                    });
                })
            } else {
                this.$message({
                    message: '请先上传图片！',
                    type: 'warning'
                });
            }
        },
        base64ImgtoFile(dataurl, filename = 'file') {
            let arr = dataurl.split(',')
            let mime = arr[0].match(/:(.*?);/)[1]
            let suffix = mime.split('/')[1]
            let bstr = atob(arr[1])
            let n = bstr.length
            let u8arr = new Uint8Array(n)
            while (n--) {
            u8arr[n] = bstr.charCodeAt(n)
            }
            return new File([u8arr], `${filename}.${suffix}`, {
            type: mime
            })
        },
        getObjectURL(file) {
            var url = null
            if (window.createObjectURL != undefined) {
            url = window.createObjectURL(file)
            } else if (window.URL != undefined) {
            url = window.URL.createObjectURL(file)
            } else if (window.webkitURL != undefined) {
            url = window.webkitURL.createObjectURL(file)
            }
            return url
        },
    },
    computed: {
        ...mapState(['modelFile'])
    },
    created() {
        this.modelUrl = sessionStorage.getItem('modelUrl')
    },
}
</script>

<style scoped>
#posture {
    display: flex;
    width: 1026px;
    height: 698px;
    margin: 70px auto;
}
#posture>input {
    display: none;
}
img {
    width: 100%;
    height: 100%;
}
.left {
    width: 490px;
    height: 698px;
    /* background-color: #bbb; */
}
.left .title {
    width: 333px;
    height: 175px;
    background-color: #cdcdcd;
}
.left .upload-image {
    width: 490px;
    height: 490px;
    margin-top: 33px;
    background-color: #efefef;
}
.right {
    width: 330px;
    margin-left: 64px;
    margin-top: 200px;
}
.right .pose-change p {
    font-size: 24px;
}
.right .picture {
    display: flex;
    justify-content: space-between;
}
.right .add {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 160px;
    height: 160px;
    border-radius: 12px;
    margin-top: 18px;
    background-color: #eee;
    cursor: pointer;
}
.add i {
    font-size: 90px;
    font-weight: 900;
    color: rgb(196,196,196);
}
.btn-confirm {
    margin: 208px auto;
}
</style>