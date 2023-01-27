<template>
  <div id="makeup">
    <div class="left">
        <div class="title">
            <img src="../assets/makeup-logo.png" alt="">
        </div>
        <div class="upload-image">
            <img src="" alt="">
        </div>
        <div class="upload-button">
            <div class="btn-plain">收藏夹上传</div>
            <div class="btn-plain">本地上传</div>
        </div>
    </div>
    <div class="right">
        <h4>妆容编辑</h4>
        <p>上传您想要的妆容图片，<br>我们将在模特上生成结果。</p>
        <div class="picutre">
            <img src="" alt="">
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'makeup',
    data() {
        return {
            
        }
    }
}
</script>

<style scoped>
#makeup {
    display: flex;
    justify-content: space-between;
    width: 1026px;
    height: 698px;
    margin: 70px auto;
}
.left .title {
    width: 260px;
    height: 160px;
    margin-left: 25px;
}
img {
    width: 100%;
    height: 100%;
}
.upload-image {
    width: 210px;
    height: 210px;
    margin-top: 200px;
    margin-left: 100px;
    border-radius: 50%;
    background-color: #efefef;
}
.upload-image img,
.picutre img {
    border-radius: 50%;
}
.left .upload-button {
    display: flex;
    justify-content: space-between;
    width: 270px;
    margin-top: 10px;
    margin-left: 100px;
}
.right {
    width: 240px;
    margin-right: 40px;
}
.right h4 {
    margin-top: 215px;
    font-size: 24px;
}
.right p {
    font-size: 20px;
}
.right .picutre {
    width: 210px;
    height: 210px;
    border-radius: 50%;
    margin-top: 40px;
    background-color: #efefef;
}
</style>