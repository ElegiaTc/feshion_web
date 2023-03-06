<template>
    <div id="clothe">
        <div class="left">
            <div class="title">
                <img src="../assets/clothe-logo.png" alt="">
            </div>
            <div class="upload-image">
                <img :src="modelUrl" alt="">
            </div>
        </div>
        <div class="right">
            <div class="suit">
                <h2>上装</h2>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
            <div class="suit">
                <h2>下装</h2>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
            <div class="suit">
                <h2>套装</h2>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
            <div class="confirm btn-confirm">确认生成</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'clothe',
    data() {
        return {
            modelUrl: ''
        }
    },
    created() {
        this.modelUrl = sessionStorage.getItem('modelUrl')
    },
}
</script>

<style scoped>
#clothe {
    display: flex;
    width: 1026px;
    height: 698px;
    margin: 70px auto 0;
}
img {
    width: 100%;
    height: 100%;
}
.left {
    width: 500px;
    height: 698px;
}
.left .title {
    width: 490px;
    height: 168px;
    margin-left: 20px;
    margin-bottom: 30px;
    background-color: #cdcdcd;
}
.left .upload-image {
    width: 500px;
    height: 500px;
    background-color: #ababab;
}
.right {
    width: 356px;
    margin-left: 60px;
    margin-top: 110px;
}
.right .suit {
    width: 356px;
    margin-bottom: 48px;
}
.right .suit ul {
    display: flex;
    justify-content: space-between;
    width: 356px;
    margin-top: 12px;
}
.right .suit ul li {
    width: 80px;
    height: 80px;
    border-radius: 12px;
    background-color: #efefef;
}
.confirm {
    margin: 0 auto;
}
</style>