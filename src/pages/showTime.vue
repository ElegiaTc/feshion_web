<template>
  <div class="show-time">
    <div class="show-main">
      <div class="main-top">
        <div class="main-title">
          <p>
            S P R I N G &nbsp;&nbsp;F E S T I V O L <br>
            2 0 1 8&nbsp;&nbsp; C R I S T M I S&nbsp;&nbsp; A N D<br>
            I D O N T K N O W <br>
            W A N T H A P E E N
          </p>
          <p>{{showName}}</p>
          <div class="labels">
            <p>标签：<br>
            {{introduction}}</p>
          </div>
        </div>
        <div class="main-picture">
          <div class="picture-show">
            <img :src="picturePath" alt="">
          </div>
          <div class="picture-operate">
            <div class="operate-left">
              <div class="fado">
                <div class="favor">收藏</div>
                <div class="download">下载</div>
              </div>
              <div class="search">点击搜索相似图</div>
            </div>
            <div class="operate-right">
              <div class="last-one" @click="lastPicture"><i class="el-icon-arrow-left"></i></div>
              <div class="next-one" @click="nextPicture"><i class="el-icon-arrow-right"></i></div>
            </div>
          </div>
        </div>
      </div>
      <!-- <div class="main-bottom">
        <p>Christion Dior: <br><br>
        “我要成为未来的一部分，”香奈儿女士如是说。
        这种雄心壮志与远见卓识的结合，造就了香奈儿这个独一无二的品牌。
        从20世纪初品牌创立伊始，香奈儿女士的创作语汇超越...</p>
      </div> -->
    </div>
    <div class="show-carousel">
      <div class="last-page" @click="lastPage()"></div>
      <div class="hover-box">
        <ul class="picture-container" ref="showImg">
          <li v-for="(p,index) in pictureList" :key="p.id">
            <img :src="p.path" alt="">
            <div class="hover-num"
            @click="changePicture(index,p.path)">{{index+1}}</div>
          </li>
        </ul>
      </div>
      <div class="next-page" @click="nextPage()"></div>
    </div>
  </div>
</template>

<script>
  import {getShowDetail} from '../api'
export default {
  name: 'showTime',
  data() {
    return {
      pictureList:[],           //所有图片列表
      introduction: '',         //存放标签的数组
      showName: '',             //秀场名字
      picturePath:'',           //当前显示图片路径
      pictureHeight:15,         //每张图片的高度（vh）
      pageHeight:89,            //每一页（六张）的高度
      nowHeight:0,              //当前高度
      toPicture:0,              //需要到达哪张图片
      totalPicture:0,           //图片总数
      pictureFlag:true,         //是否在滑动图片的标志
      pageFlag:true             //是否可以翻页标志
    }
  },
  methods: {
    changePicture(id,path) {
        this.pictureFlag = false;
        this.toPicture = id;
        this.picturePath = path;
        
        if(this.totalPicture - id < 6 && this.pictureFlag) {
          this.toPicture = this.totalPicture-6
        }
        let step = 1;
        let count = 8;
        if(this.toHeight - this.nowHeight > 45) {count=1;}
        else if(this.toHeight - this.nowHeight > 30) {count=2}
        else if(this.toHeight - this.nowHeight > 15) {count=4}
        else if(this.toHeight - this.nowHeight > 0) {}
        else if(this.toHeight - this.nowHeight == 0) {step=0;}
        else if(this.toHeight - this.nowHeight >= -15) {count=4;step=-1}
        else if(this.toHeight - this.nowHeight >= -30) {count=2;step=-1}
        else if(this.toHeight - this.nowHeight >= -45) {count=1;step=-1}
        let swiper = setInterval(() => {
          this.nowHeight+=step;
          if(this.nowHeight == this.toHeight) {
            clearInterval(swiper);
            this.pictureFlag = true;
          }
          this.$refs.showImg.style.transform = 'translateY('+'-'+ this.nowHeight + 'vh)';
        }, count);
    },
    lastPage() {
      this.toPicture -= 6;
      if(this.toPicture < 0) this.toPicture = 0
      console.log(this.toPicture);
      let swiper = setInterval(() => {
          if(this.nowHeight == this.toHeight) {
            clearInterval(swiper);
            this.pageFlag = true;
          }
          else this.nowHeight--;
          this.$refs.showImg.style.transform = 'translateY('+'-'+ this.nowHeight + 'vh)';
        }, 1);
      console.log(this.toHeight);
    },
    lastPicture() {
      if(this.toPicture) {
        this.toPicture -= 1
        console.log(this.toPicture);
        this.picturePath = this.pictureList[this.toPicture].path
        let swiper = setInterval(() => {
          this.nowHeight--
          if(this.nowHeight == this.toHeight) {
            clearInterval(swiper)
            this.pageFlag = true
          }
          this.$refs.showImg.style.transform = 'translateY('+'-'+ this.nowHeight + 'vh)'
        }, 1);
      }
    },
    nextPage() {
      this.toPicture += 6;
      if(this.toPicture + 6 >= this.totalPicture) {
        this.toPicture = this.totalPicture - 6;
      }
      let swiper = setInterval(() => {
          this.nowHeight++;
          if(this.nowHeight == this.toHeight) {
          clearInterval(swiper);
          this.pageFlag = true;
          }
          this.$refs.showImg.style.transform = 'translateY('+'-'+ this.nowHeight + 'vh)';
          
        }, 1);
    },
    nextPicture() {
      if(this.toPicture !== this.totalPicture - 1) {
        this.toPicture += 1
        console.log(this.toPicture);
        this.picturePath = this.pictureList[this.toPicture].path
        let swiper = setInterval(() => {
          if(this.nowHeight == this.toHeight) {
            clearInterval(swiper)
            this.pageFlag = true
          }
          else this.nowHeight++
          this.$refs.showImg.style.transform = 'translateY('+'-'+ this.nowHeight + 'vh)'
        }, 1);
      }
    },
  },
  computed: {
    toHeight() {
      if(this.toPicture>2) {
        return (this.toPicture-2) * this.pictureHeight
      } else return 0;
    }
  },
  mounted() {
    getShowDetail(this.$route.query.photoId,this.$route.query.showId)
    .then(res => {
      console.log(res.data)
      this.pictureList = Object.freeze(res.data.photoShowVos)
      this.picturePath = this.pictureList[0].path
      this.totalPicture = res.data.photoShowVos.length
      this.showName = res.data.name
      this.introduction = eval('(' + res.data.introduction + ')').join(' ')
    })
    .catch(err => {
      console.log(err);
    })
  }
}
</script>

<style scoped>

.show-time {
  box-sizing: border-box;
  padding-top: 45px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  background-color: #333;
}
.show-main {
  width: 896px;
  height: 850px;
}
.show-main .main-top {
  display: flex;
  width: 750px;
  height: 600px;
  margin-top: 35px;
  margin-left: 60px;
  /* background-color: #fff; */
}
.main-top .main-title {
  padding-top: 20px;
  width: 235px;
  height: 320px;
  margin: 80px 30px 0 100px;
  background-color: #222;
}
.main-title p {
  width: 235px;
  text-align: center;
  color: #fff;
  font-size: 14px;
  margin-bottom: 30px;
}
.main-title .labels {
  position: relative;
  margin-top: 80px;
}
.main-title .labels p{
  font-size: 13px;
}
.main-title .labels::before {
  position: absolute;
  top: -30px;
  left: 40px;
  content: '';
  width: 155px;
  height: 1px;
  background-color: #444;
}
.show-main .picture-show {
  position: relative;
  width: 28vw;
  height: 81vh;
}
.picture-show img {
  position: absolute;
  min-width: 450px;
  width: 28vw;
  height: 81vh;
  /* background-color: pink; */
  z-index: 9;
}
.picture-operate {
  display: flex;
  justify-content: space-between;
  min-width: 450px;
  width: 28vw;
  height: 70px;
  margin-top: 5px;
  /* background-color: #fff; */
}
.operate-left .fado {
  display: flex;
  justify-content: space-between;
  width: 140px;
  margin-left: 15px;
  margin-top: 5px;
}
.operate-left .favor,
.operate-left .download {
  width: 40px;
  height: 20px;
  color: #fff;
  font-size: 13px;
  cursor: pointer;
}
.operate-left .search {
  margin-top: 16px;
  margin-left: 15px;
  color: #fff;
  font-size: 13px;
  cursor: pointer;
}
.operate-right {
  display: flex;
  justify-content: space-between;
  width: 85px;
  height: 40px;
  padding-top: 10px;
}
.operate-right div {
  width: 38px;
  height: 48px;
  text-align: center;
  line-height: 47px;
  border: 1px solid #333;
  border-radius: 5px;
  font-size: 28px;
  background-color: #111;
  color: #fff;
  cursor: pointer;
}
.operate-right div:hover {
  background-color: #333;
  border: 1px solid #555;
}
.main-bottom {
  box-sizing: border-box;
  width: 650px;
  height: 200px;
  padding: 30px 100px 30px 30px;
  margin-top: 20px;
  margin-left: 150px;
  background-color: #222;
  color: #fff;
}

.show-carousel {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 7vw;
  height: 96vh;
  margin-right: 30px;
  margin-top: -10px;
  /* background-color: #fff; */
}
.show-carousel .last-page {
  width: 0;
  height: 0;
  border-bottom: 13px solid #888;
  border-top: 13px solid transparent;
  border-left: 53px solid transparent;
  border-right: 53px solid transparent;
  cursor: pointer;
}
.show-carousel .next-page {
  width: 0;
  height: 0;
  border-top: 13px solid #888;
  border-bottom: 13px solid transparent;
  border-left: 53px solid transparent;
  border-right: 53px solid transparent;
  cursor: pointer;
}
.show-carousel .last-page:hover {
  border-bottom: 13px solid #ccc;
}
.show-carousel .next-page:hover{
  border-top: 13px solid #ccc;
}
.hover-box {
  width: 7vw;
  height: 89vh;
  overflow: hidden;
}
.picture-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 7vw;
  min-width: 105px;
  /* transform: translateY(-135px); */
}
.picture-container li {
  position: relative;
  width: 7vw;
  min-width: 105px;
  height: 14vh;
  margin-bottom: 1vh;
}
.picture-container li:hover .hover-num {
  opacity: 1;
}
.picture-container li .hover-num {
  opacity: 0;
  user-select: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 7vw;
  height: 14vh;
  line-height: 14vh;
  text-align: center;
  font-size: 60px;
  color: #000;
  background-color: rgba(0,0,0,.3);
  transition: .3s;
  cursor: pointer;
}
.picture-container li img {
  width: 100%;
  height: 100%;
}
</style>