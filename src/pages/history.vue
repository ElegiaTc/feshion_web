<template>
<div class="record-main">
    <div class="record">
    <ul class="history-module">
        <li v-for="(h,index) in historyList" :key="index"
        :class="{hover: changeStyle == index}" @click="changeHistory(index)">{{h.name}}</li>
    </ul>
    </div>
    <div class="record-show">
        <router-view></router-view>
    </div>
</div>
</template>

<script>
export default {
    name: 'myHistory',
    data() {
        return {
            historyList:[
                {'name':'浏览记录'},
                {'name':'下载记录'}
            ],
            changeStyle:'0'
        }
    },
    methods:{
        changeHistory(index) {
            this.changeStyle = index;
            if(index) {
                this.$router.push('/message/history/download');
            }
            else {
                this.$router.push('/message/history/browse');
            }
        }
    }
}
</script>

<style scoped>
.history-module {
    width: 160px;
    height: 50px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding: 0 40px;
    font-size: 13px;
}
.history-module li {
    width: 60px;
    height: 25px;
    text-align: center;
    box-sizing: border-box;
    /* background-color: #000; */
    color: #888;
    cursor: pointer;
}
.history-module .hover {
    color: #333;
    border-bottom: 1px solid #000;
}
.history-module li:hover {
    color: #333;
    border-bottom: 1px solid #000;
}
</style>