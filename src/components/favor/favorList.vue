<template>
    <ul class="favor-list">
        <li class="list-show" @click="clickToChoose('001')">
            <div class="picture-show" >
                <img src="" alt="">
            </div>
            <p>这是标题</p>
            <div class="operate-box">
                <div class="download">下载</div>
                <div class="delete">删除</div>
            </div>
        </li>
        <li class="list-show" @click="clickToChoose('001')">
            <div class="picture-show" >
                <img src="" alt="">
            </div>
            <p>这是标题</p>
            <div class="operate-box">
                <div class="download">下载</div>
                <div class="delete">删除</div>
            </div>
        </li>
        <li class="list-show" @click="clickToChoose('001')">
            <div class="picture-show" >
                <img src="" alt="">
            </div>
            <p>这是标题</p>
            <div class="operate-box">
                <div class="download">下载</div>
                <div class="delete">删除</div>
            </div>
        </li>
        <li class="list-show" @click="clickToChoose('001')">
            <div class="picture-show" >
                <img src="" alt="">
            </div>
            <p>这是标题</p>
            <div class="operate-box">
                <div class="download">下载</div>
                <div class="delete">删除</div>
            </div>
        </li>
        <li class="list-show" @click="clickToChoose('001')">
            <div class="picture-show" >
                <img src="" alt="">
            </div>
            <p>这是标题</p>
            <div class="operate-box">
                <div class="download">下载</div>
                <div class="delete">删除</div>
            </div>
        </li>
        <li class="list-show" @click="clickToChoose('001')">
            <div class="picture-show" >
                <img src="" alt="">
            </div>
            <p>这是标题</p>
            <div class="operate-box">
                <div class="download">下载</div>
                <div class="delete">删除</div>
            </div>
        </li>
        <li class="list-show" @click="clickToChoose('001')">
            <div class="picture-show" >
                <img src="" alt="">
            </div>
            <p>这是标题</p>
            <div class="operate-box">
                <div class="download">下载</div>
                <div class="delete">删除</div>
            </div>
        </li>
        <li class="add-more"></li>
    </ul>
</template>

<script>
export default {
    name: 'favorList',
    data() {
        return {
            checkedList:[],
            isChecked: false
        }
    },
    methods: {
        clickToChoose(id) {
            this.checkedList.push(id);
            this.isChecked = !this.isChecked
        },
    }
}
</script>

<style scoped>
.favor-list {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    width: 926px;
}
.list-show,
.add-more{
    box-sizing: border-box;
    margin: 0 90px 30px 0;
    padding: 40px 25px 5px 25px;
    width: 163px;
    /* max-width: calc((100%-240px)/4);
    min-width: calc((100%-240px)/4); */
    height: 240px;
    border: 1px solid #aaa;
    box-shadow: 0 0 2px 1px #aaa;
    cursor: pointer;
}
.list-show:nth-child(4n),
.add-more{
    margin-right: 0;
}
.list-show .picture-show {
    width: 111px;
    height: 109px;
    border: 1px solid #000;
}
.list-show p {
    text-align: center;
    font-size: 14px;
    margin-top: 5px;
    padding-bottom: 10px;
    border-bottom: 1px solid #000;
}
.list-show .operate-box {
    display: flex;
    justify-content: space-around;
    width: 111px;
    height: 30px;
    margin-top: 10px;
    border: 1px solid #000;
    opacity: 0;
}
.list-show:hover .operate-box {
    opacity: 1;
}
</style>