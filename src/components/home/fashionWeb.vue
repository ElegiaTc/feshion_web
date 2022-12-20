<template>
  <div class="fashion-web">
    <div class="fashion-container">
        <div class="title">
            <strong>
                <span>SHILIU</span>
                时流网
            </strong>
        </div>
        <div class="fashion-nav">
            <ul class="nav-list">
                <li>今日·推荐</li>
                <li>时流·风尚</li>
                <li>视觉·焦点</li>
            </ul>
        </div>
        <ul class="picture-list">
            <li v-for="p in pictureList" :key="p.id">
                <img :src="p.path" alt="">
            </li>
        </ul>
        <div class="news-part">
            <ul>
                <li v-for="n in news1List" :key="n.id">
                    <a :href="n.path">{{n.title}}</a>
                </li>
            </ul>
            <ul>
                <li v-for="n in news2List" :key="n.id">
                    <a :href="n.path">{{n.title}}</a>
                </li>
            </ul>
            <ul>
                <li v-for="n in news3List" :key="n.id">
                    <a :href="n.path">{{n.title}}</a>
                </li>
            </ul>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'fahionWeb',
    data() {
        return {
            pictureList:[
                {
                    id: '001',
                    path: require('../../assets/img4.jpg')
                },
                {
                    id: '002',
                    path: require('../../assets/img5.jpg')
                },
                {
                    id: '003',
                    path: require('../../assets/img6.jpg')
                }
            ],
            news1List:[
                {
                    id: '001',
                    path: '',
                    title:'爱迪达斯宣布破产！！！'
                },
                {
                    id: '002',
                    path: '',
                    title: '大师傅大师傅似的给VS的格式发给是否关闭b..'
                },
                {
                    id: '003',
                    path: '',
                    title: '大师傅大师傅似的给VS的格式发给是否关闭b..'
                },
                {
                    id:'004',
                    path:'',
                    title: '大师傅大师傅似的给VS的格式发给是否关闭b..'
                }
            ],
            news2List:[
                {
                    id: '001',
                    path: '',
                    title:'著名时尚博主ailing出演三国义!'
                },
                {
                    id: '002',
                    path: '',
                    title: '大师傅大师傅似的给VS的格式发给是否关闭b..'
                },
                {
                    id: '003',
                    path: '',
                    title: '大师傅大师傅似的给VS的格式发给是否关闭b..'
                },
                {
                    id:'004',
                    path:'',
                    title: '大师傅大师傅似的给VS的格式发给是否关闭b..'
                }
            ],
            news3List:[
                {
                    id: '001',
                    path: '',
                    title:'爱迪达斯宣布破产！！！'
                },
                {
                    id: '002',
                    path: '',
                    title: 'NIKE彻底退出历史舞台,将成为一代人的记忆...'
                },
                {
                    id: '003',
                    path: '',
                    title: '大师傅大师傅似的给VS的格式发给是否关闭b..'
                },
                {
                    id:'004',
                    path:'',
                    title: '大师傅大师傅似的给VS的格式发给是否关闭b..'
                }
            ]
        }
    },
    created() {
    }
}
</script>

<style scoped>
.fashion-web {
    width: 1026px;
    height: 750px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: rgb(219,229,234);
}
.fashion-web .fashion-container {
    position: relative;
    width: 936px;
    height: 630px;
    margin: auto;
    border-top: 2px solid #000;
}
.fashion-web .fashion-container .title {
    position: absolute;
    top: -23px;
    left: 50%;
    transform: translateX(-50%);
    width: 220px;
    height: 30px;
    font-size: 26px;
    text-align: center;
    background-color: rgb(219,229,234);
    z-index: 99;
}
.fashion-web .fashion-container .title span {
    font-size: 28px;
    margin-top: 3px;
    color: rgb(92,31,31);
}
.fashion-container .fashion-nav ul {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 936px;
    height: 40px;
    margin-top: 80px;
    border-radius: 15px;
    font-weight: 700;
    font-size: 18px;
    background-color: rgb(100,100,100,.1)
}
.picture-list {
    display: flex;
    justify-content: space-around;
    width: 936px;
    height: 145px;
    margin-top: 10px;
    /* background-color: #fff; */
}
.picture-list li {
    width: 280px;
    height: 145px;
    background-color: #aaa;
    border-radius: 10px;
}
.picture-list li img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
}
.news-part {
    display: flex;
}
.news-part ul {
    width: 310px;
    height: 300px;
    margin-top: 30px;
    border-right: 1px solid #000;
}
.news-part ul:last-child {
    border: none;
}
.news-part ul li {
    width: 270px;
    margin: 0 auto 15px
}
</style>