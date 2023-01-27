<template>
  <div id="model">
    <input type="file" @change="onchangemd" ref="uploadFromLocal">
    <div class="top-nav">
      <div class="title">
        <img src="../assets/model-logo.png" alt="">
      </div>
      <div class="top-right">
        <div class="nav-name">
          <div class="boy">男模特</div>
          <div class="girl">女模特</div>
          <div class="child">儿童模特</div>
        </div>
        <div class="upload-button">
          <div class="btn-plain" @click="test2">收藏夹上传</div>
          <div class="btn-plain" @click="localUpload">本地上传</div>
        </div>
      </div>
    </div>
    <div class="upload-image">
      <img :src="baseURL" alt="" v-if="baseURL!=''">
    </div>
    <div class="confirm btn-confirm"
     @click="gotoType">确认生成</div>
  </div>
</template>

<script>
import axios from 'axios'
import {getPhotos} from '../api'
export default {
    name: 'model',
    components: {
      
    },
    data() {
      return {
        baseURL: '',
      }
    },
    methods: {
      toShow() {
        this.$router.push('/show')
      },
      test2() {
        getPhotos(10).then(res => {
          console.log(res);
        })
      },
      test() {
        axios.get('http://159.75.217.15:8891/api/v1/poseTransfer')
        .then(res => {

        // base64编码的图片
        var base64Img = 'data:image/png;base64,'+ res.data.target_img;
        //转换图片文件
        var imgFile = this.base64ImgtoFile(base64Img); 
        this.baseURL = this.getObjectURL(imgFile);
        console.log(this.baseURL);
        })
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
      localUpload() {
        this.$refs.uploadFromLocal.dispatchEvent(new MouseEvent('click'));
      },
      onchangemd(e){
        console.log(e.target.files[0])//这个就是选中文件信息
        this.$store.commit('ADD_MODELFILE',e.target.files[0]);
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

        // 如果要将图片上传服务器，就在这里调用后台方法
          // axios.post('http://159.75.217.15:8891/api/v1/poseTransfer',formdata)
          // .then(res => {
          //  console.log(res);
          // })
        }
      },
      gotoType() {
        if(this.baseURL !== '') {
          let url = '/'+sessionStorage.getItem('AILabType');
          console.log(url);
          this.$router.push(url)
        }
        else {
          this.$message({
            message: '请先上传图片！',
            type: 'warning'
          });
        }
      }
    },
}
</script>

<style scoped>
#model {
  width: 1026px;
  height: 698px;
  margin: 70px auto 0;
  /* background-color: pink; */
}
#model>input {
  display: none;
}
.top-nav {
  display: flex;
  width: 1026px;
  height: 210px;
  /* background-color: skyblue; */
}
.top-nav .title {
  width: 325px;
  height: 135px;
  margin-left: 30px;
  background-color: #acacac;
}
img {
  width: 100%;
  height: 100%;
}
.top-nav .top-right {
  width: 616px;
  height: 210px;
  /* background-color: #aaa; */
}
.top-nav .top-right .nav-name {
  display: flex;
  justify-content: space-around;
  width: 616px;
  height: 45px;
  margin-top: 87px;
  font-size: 20px;
  /* background-color: #aabbcc; */
  color: rgb(150,150,150);
}
.top-right .upload-button {
  display: flex;
  width: 268px;
  justify-content: space-between;
  margin-left: 300px;
}
.upload-button .folder,
.upload-button .local {
  width: 130px;
  height: 48px;
  border-radius: 8px;
  border: 1px solid rgb(66,42,42);
  text-align: center;
  line-height: 48px;
  cursor: pointer;
  user-select: none;
}

.upload-image {
  width: 270px;
  height: 405px;
  margin: 0 auto;
  background-color: #efefef;
}
.confirm {
  margin: 8px auto 0;
}
</style>