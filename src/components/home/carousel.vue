<template>
  <div class="carousel-box">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">Slide 1</div>
        <div class="swiper-slide">Slide 2</div>
        <div class="swiper-slide">Slide 3</div>
      </div>
      <!-- 如果需要分页器 -->
      <!-- <div class="swiper-pagination"></div> -->
      
      <!-- 如果需要导航按钮 -->
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
      
      <!-- 如果需要滚动条 -->
      <!-- <div class="swiper-scrollbar"></div> -->
    </div>
    <div class="search-modules">
      <select name="searchList">
        <option value="picture" selected>图片</option>
      </select>
      <input type="text" placeholder="输入查找内容"
      v-model.trim="searchKeyWord" @keyup.enter="searchPage">
      <div class="searchBtn" @click="searchPage">搜</div>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'

  // Import Swiper styles

  export default {
    name: 'mynCarousel',
    components: {
    },
    data() {
      return {
        searchKeyWord: ''
      }
    },
    mounted() {
        // this.$nextTick(()=>{this.init()});
      new Swiper ('.swiper-container', {
    // direction: 'vertical', // 垂直切换选项
        loop: true, // 循环模式选项

        autoplay: {     //自动播放
          delay: 3000,
          disableOnInteraction: false,
        },         
    
    // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
        },
      
      // 如果需要前进后退按钮
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        
        // 如果需要滚动条
        // scrollbar: {
        //   el: '.swiper-scrollbar',
        // },
      })     
    },
    methods: {
      searchPage() {
        if (this.searchKeyWord != '') {
          this.$router.push({
            name: 'mySearch',
            params: {
              searchKeyWord: this.searchKeyWord
            }
          })
        }
      }
    }
  };
</script>

<style scoped>
.carousel-box {
  position: relative;
  width: 1026px;
  height: 450px;
  margin: 0 auto;
  background-color: #333;
}
.swiper-container {
    width: 1026px;
    height: 400px;
}
.swiper-button-prev {
  margin-top: 20px;
  margin-left: 30px;
  color: rgb(121,26,13);
}
.swiper-button-next {
  margin-top: 20px;
  margin-right: 30px;
  color: rgb(121,26,13);
}
.search-modules {
  position: absolute;
  top: 230px;
  left: 230px;
  display: flex;
  align-items: center;
  z-index: 2;
}
.search-modules select {
  width: 60px;
  height: 30px;
  outline: none;
  border-radius: 10px 0 0 10px;
}
.search-modules input {
  width: 435px;
  height: 28px;
  outline: none;
  border: 1px solid #000;
  text-indent: 3px;
}
.search-modules input:hover {
  background-color: rgba(255,255,255,0.8);
}
.search-modules .searchBtn {
  width: 60px;
  height: 29px;
  border-radius: 0 10px 10px 0;
  opacity: 0.9;
  background-color: #fff;
  cursor: pointer;
}
.search-modules .searchBtn:hover {
  opacity: 0.1;
}
</style>