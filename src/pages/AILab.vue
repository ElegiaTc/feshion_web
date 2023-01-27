<template>
    <div id="AILab">
        <img src="../assets/AILab-logo.png" alt="">
        <div class="bg-circle"></div>
        <div class="clothe" @click="clickToClothe">服饰</div>
        <div class="makeup" @click="clickToMakeup">妆容</div>
        <div class="hair" @click="clickToHair">发型</div>
        <div class="posture" @click="clickToPosture">姿势</div>
        <div class="girl">
            <img src="../assets/girl.png" alt="">
        </div>
    </div>
</template>

<script>

export default {
    name: 'AILab',
    components:{

    },
    methods: {
        clickToClothe() {
            this.$router.push('/model')
            sessionStorage.setItem('AILabType','clothe')
        },
        clickToMakeup() {
            this.$router.push('/model')
            sessionStorage.setItem('AILabType','makeup')
        },
        clickToHair() {
            this.$router.push('/model')
            sessionStorage.setItem('AILabType','hair')
        },
        clickToPosture() {
            this.$router.push('/model')
            sessionStorage.setItem('AILabType','posture')
        },
    }
}
</script>

<style scoped>
#AILab {
    position: relative;
    margin: 0 auto;
    width: 1026px;
    height: 768px;
    /* background-color: pink; */
    overflow: hidden;
}
#AILab>img {
    width: 360px;
    height: 205px;
    margin-top: 60px;
    margin-left: 30px;
}
.bg-circle {
    position: absolute;
    left: -43px;
    bottom: -755px;
    width: 1111px;
    height: 1105px;
    border-radius:50%;
    background-color: rgb(76,75,103);
}
.clothe,.hair,.makeup,.posture{
    position: absolute;
    left: 860px;
    top: 532px;
    width: 128px;
    height: 128px;
    text-align: center;
    line-height: 128px;
    border-radius: 50%;
    background: #fff;
    box-shadow: 0px 6px 12px 0px rgba(199, 210, 255, 1);
    cursor: pointer;
    user-select: none;
    z-index: 9;
}
.clothe {
    left: 170px;
    top: 449px;
}
.makeup {
    left: 664px;
    top: 415px;
}
.posture {
    left: 30px;
    top: 560px;
}
.girl {
    position: absolute;
    left: 247px;
    top: 151px;
    width: 476px;
    height: 713px;
}
.girl img {
    width: 100%;
    height: 100%;
}
</style>