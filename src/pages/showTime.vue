<template>
  <div class="show-time">
    <div class="show-main">
      <div class="main-top">
        <div class="main-title">
          <p>
            S P I N G &nbsp;&nbsp;F E S T I V O L <br>
            2 0 1 8&nbsp;&nbsp; C R I S T M I S&nbsp;&nbsp; A N D<br>
            I D O N T K N O W <br>
            W A N T H A P E E N
          </p>
          <p>2 0 1 8 迪 奥 冬 季 秀 场</p>
          <div class="labels">
            <p>标签：<br>
            高级 成衣 Chanel <br>
            时装周 巴黎细节</p>
          </div>
        </div>
        <div class="main-picture">
          <div class="picture-show">
            <img :src="picturePath" alt="">
            <div class="shadow1"></div>
            <div class="shadow2"></div>
            <div class="shadow3"></div>
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
              <div class="last-one">左</div>
              <div class="next-one">右</div>
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
      pictureList:[],
      picturePath:'',
      pictureHeight:135,
      pageHeight:810,
      nowHeight:0,
      toPicture:0,
      totalPicture:0,
      pictureFlag:true,
      pageFlag:true
    }
  },
  methods: {
    changePicture(id,path) {
      if(this.pictureFlag) {
      this.pictureFlag = false;
      this.toPicture = id;
      this.picturePath = path;
      console.log(id);
      if(this.totalPicture - id < 6) {
        this.toPicture = this.totalPicture-6
      }
        let step = 0;
        let count = 1;
        // this.$refs.showImg.style.transform = 'translateY('+'-'+ this.toHeight + 'px)';
        if(this.toHeight - this.nowHeight > 405) {step=15;}
        else if(this.toHeight - this.nowHeight > 270) {step=9;}
        else if(this.toHeight - this.nowHeight > 135) {step=9;count=2}
        else if(this.toHeight - this.nowHeight > 0) {step=3;}
        else if(this.toHeight - this.nowHeight == 0) step=0;
        else if(this.toHeight - this.nowHeight >= -135) {step=-3;}
        else if(this.toHeight - this.nowHeight >= -270) {step=-9;count=2}
        else if(this.toHeight - this.nowHeight >= -405) {step=-15;}
        let swiper = setInterval(() => {
          this.nowHeight+=step;
          if(this.nowHeight == this.toHeight) {
          clearInterval(swiper);
          this.pictureFlag = true;
          }
          this.$refs.showImg.style.transform = 'translateY('+'-'+ this.nowHeight + 'px)';
          
        }, count);
      }
    },
    lastPage() {
      this.toPicture -= 6;
      let swiper = setInterval(() => {
          this.nowHeight-=15;
          if(this.nowHeight == this.toHeight) {
          clearInterval(swiper);
          this.pageFlag = true;
          }
          this.$refs.showImg.style.transform = 'translateY('+'-'+ this.nowHeight + 'px)';
          
        }, 1);
    },
    nextPage() {
      this.toPicture += 6;
      if(this.toPicture + 6 >= this.totalPicture) {
        this.toPicture = this.totalPicture - 6;
      }
      let swiper = setInterval(() => {
          this.nowHeight+=15;
          if(this.nowHeight == this.toHeight) {
          clearInterval(swiper);
          this.pageFlag = true;
          }
          this.$refs.showImg.style.transform = 'translateY('+'-'+ this.nowHeight + 'px)';
          
        }, 1);
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
      console.log(res);
      this.pictureList = res.data.photoShowVos;
      this.picturePath = this.pictureList[0].path;
      this.totalPicture = res.data.photoShowVos.length;
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
  width: 215px;
  height: 300px;
  margin: 80px 30px 0;
  background-color: #222;
}
.main-title p {
  width: 220px;
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
  width: 140px;
  height: 1px;
  background-color: #444;
}
.show-main .picture-show {
  position: relative;
  width: 350px;
  height: 500px;
  background-color: pink;
}
.picture-show img {
  position: absolute;
  width: 500px;
  height: 800px;
  background-color: pink;
  z-index: 9;
}
.picture-show .shadow1 {
  position: absolute;
  top: 3px;
  left: 3px;
  width: 348px;
  height: 498px;
  border: 1px solid #fff;
  background-color: #000;
  z-index: 3;
}
.picture-show .shadow2 {
  position: absolute;
  top: 7px;
  left: 7px;
  width: 348px;
  height: 498px;
  border: 1px solid #fff;
  background-color: #000;
  z-index: 2;
}
.picture-show .shadow3 {
  position: absolute;
  top: 11px;
  left: 11px;
  width: 348px;
  height: 498px;
  border: 1px solid #fff;
  z-index: 1;
}
.picture-operate {
  display: flex;
  justify-content: space-between;
  width: 350px;
  height: 70px;
  margin-top: 25px;
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
  border: 1px solid #333;
  border-radius: 5px;
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
  width: 105px;
  height: 875px;
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
  width: 105px;
  height: 805px;
  overflow: hidden;
}
.picture-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 105px;
  /* transform: translateY(-135px); */
}
.picture-container li {
  position: relative;
  width: 105px;
  height: 130px;
  margin-bottom: 5px;
  background-color: #fff;
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
  width: 105px;
  height: 130px;
  line-height: 128px;
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