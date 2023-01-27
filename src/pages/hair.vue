<template>
  <div id="hair">
    <div class="left">
        <div class="title">
            <img src="../assets/hair-logo.png" alt="">
        </div>
        <div class="upload-image">
            <img src="" alt="">
        </div>
    </div>
    <div class="right">
        <div class="hair">
            <h2>发型</h2>
            <el-select v-model="hair">
                <el-option
                v-for="item in hairs"
                :key="item.value"
                :label="item.label"
                :value="item.value">
                </el-option>
            </el-select>
        </div>
        <div class="hair-color">
            <h2>发色</h2>
            <el-select v-model="hairColor">
                <el-option
                v-for="item in hairColors"
                :key="item.value"
                :label="item.label"
                :value="item.value">
                </el-option>
            </el-select>
        </div>
        <div class="bg">
            <h2>背景</h2>
            <div class="color-button">
                <div class="color black"></div>
                <div class="color green"></div>
                <div class="color red"></div>
                <div class="btn-plain">收藏夹上传</div>
                <div class="btn-plain">本地上传</div>
            </div>
        </div>
        <div class="btn-confirm">确认生成</div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'hair',
    data() {
        return {
            hairs: [{
                value: '选项1',
                label: '波浪卷1'
                }, {
                value: '选项2',
                label: '波浪卷2'
                }, {
                value: '选项3',
                label: '短发1'
            }],
            hair: '波浪卷1',
            hairColors: [{
                value: '选项1',
                label: '黑色'
                }, {
                value: '选项2',
                label: '棕色'
                }, {
                value: '选项3',
                label: '红色'
            }],
            hairColor: '黑色'
        }
    }
}
</script>

<style scoped>
#hair {
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
    width: 270px;
    height: 622px;
    margin-left: 24px;
}
.left .title {
    width: 270px;
    height: 156px;
    margin-top: 4px;
    background-color: #ababab;
}
.left .upload-image {
    width: 270px;
    height: 405px;
    margin-top: 57px;
    background-color: #efefef;
}
.right {
    width: 440px;
    height: 640px;
    margin-left: 180px;
    margin-top: 55px;
}
.right /deep/ .el-select {
    width: 419px;
    height: 32px;
    margin-top: 2px;
}
.right /deep/ .el-option {
    height: 24px;
}
.right .hair-color {
    margin-top: 80px;
}
.right .bg {
    margin-top: 80px;
}
.right .color-button {
    display: flex;
    justify-content: space-between;
}
.color-button .color {
    position: relative;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    margin-top: 4px;
    padding: 4px;
    cursor: pointer;
}
.black {
    border: 1px solid rgb(56,56,56);
}
.black::before {
    position: absolute;
    content: '';
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background-color: rgb(56,56,56);
}
.green {
    border: 1px solid rgb(0,186,173);
}
.green::before {
    position: absolute;
    content: '';
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background-color: rgb(0,186,173);
}
.red {
    border: 1px solid rgb(212,48,48);
}
.red::before {
    position: absolute;
    content: '';
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background-color: rgb(212,48,48);
}
.btn-confirm {
    margin: 100px auto;
}
</style>