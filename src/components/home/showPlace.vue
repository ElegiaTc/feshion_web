<template>
  <div class="show-place">
    <div class="title">
        — — S H I L I U 秀 场 — —
    </div>
    <ul class="pictures">
        <li v-for="p in pictureList" :key="p.id">
            <div class="picture-place">
                <img :src="p.path" alt="">
                <div class="hover-page" @click="turnToShow(p.id)">
                    <div class="operate-box">
                        <div class="download">下载</div>
                        <div class="favor">收藏</div>
                        <div class="search">搜索</div>
                    </div>
                </div>
            </div>
            <div class="picture-name">{{p.name}}</div>
        </li>
    </ul>
    <Pop/>
  </div>
</template>

<script>
import Pop from '../common/addFavorPop.vue'
export default {
    name: 'showPlace',
    components: [
        Pop
    ],
    data() {
        return {
            pictureList:[
                {
                    id: '001',
                    path: '',
                    name:'DIAO2018GRLS'
                },
                {
                    id: '002',
                    path: '',
                    name:'DIAO2018GRLS'
                },
                {
                    id: '003',
                    path: '',
                    name:'DIAO2018GRLS'
                },
                {
                    id: '004',
                    path: '',
                    name:'DIAO2018GRLS'
                },
                {
                    id: '005',
                    path: '',
                    name:'DIAO2018GRLS'
                },
                {
                    id: '006',
                    path: '',
                    name:'DIAO2018GRLS'
                },
            ]
        }
    },
    methods: {
        turnToShow(id) {
            this.$router.push({
            name: 'showTime',
                params: {
                showId: id
                }
            })
        }
    }
}
</script>

<style scoped>
.show-place {
    width: 1026px;
    margin: 0 auto;
    background-color: rgb(219,229,234);
}
.show-place .title {
    text-align: center;
    font-weight: 700;
    font-size: 24px;
}
.show-place .pictures {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
}
.show-place .pictures li {

    width: 290px;
    height: 460px;
    margin-top: 50px;
    /* background-color: pink; */
}
.show-place .pictures li .picture-place {
    position: relative;
    width: 290px;
    height: 400px;
    background-color: skyblue;
    cursor: pointer;
}
.show-place .pictures li .picture-place img {
    width: 290px;
    height: 400px;
}
.pictures li .picture-place .hover-page {
    display: flex;
    align-items: flex-end;
    position: absolute;
    top: 0;
    left: 0;
    width: 290px;
    height: 400px;
    background-color: #888;
    opacity: 0;
    transition: 0.5s all;
}
.pictures li .picture-place:hover .hover-page{
    opacity: 0.6;
}
.hover-page .operate-box {
    display: flex;
    width: 290px;
    height: 25px;
    justify-content: space-around;
    margin-bottom: 15px;
}
.hover-page .operate-box div {
    background-color: #fff;
}
.show-place .pictures li .picture-name {
    line-height: 50px;
    text-align: center;
}
</style>