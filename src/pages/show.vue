<template>
  <div id="show">
    <div class="title">
        <img src="../assets/show-logo.png" alt="">
    </div>
    <div class="show-place">
        <div class="picture">
            <img :src="baseURL" alt="">
        </div>
        <div class="upload-button">
            <div class="btn-plain" @click="returnHome">返回AILab首页</div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'show',
    data() {
        return {
            baseURL:''
        }
    },
    methods: {
        returnHome() {
            this.$router.push('/ailab')
        }
    },
    mounted() {
        this.baseURL = this.$route.query.baseURL
    }
}
</script>

<style scoped>
#show {
    width: 1026px;
    height: 698px;
    margin: 70px auto;
}
.title {
    width: 350px;
    height: 160px;
    margin-left: 25px;
}
img {
    width: 100%;
    height: 100%;
}
.show-place {
    width: 270px;
    margin: auto;
}
.picture {
    width: 270px;
    height: 405px;
    margin-bottom: 10px;
}
.upload-button {
    display: flex;
    justify-content: center;
    width: 270px;
}
</style>