<template>
    <header>
        <div class="header">
            <router-link to="/home" style='margin-left:40px'>首 页</router-link>
            <router-link to="/aiLab">A I L a b</router-link>
            <span class="shiliu">
                <b>S</b>
                <b>H</b>
                <b>I</b>
                <b>L</b>
                <b>I</b>
                <b>U</b>
            </span>
            <div class="favority" @click="clickToFavor"><i class="el-icon-folder"></i>收 藏 夹</div>
            <!-- <router-link to="/Message" style='margin-right:40px'>石 榴 君</router-link> -->
            <div class="user-lab" @click="clickToShow" v-show="isLogin"><i class="el-icon-user"></i>{{nickname||username}}</div>
            <div class="to-login" @click="clickToLogin" v-show="!isLogin">登 录</div>
            <div class="user-nav" v-show="userShow">
                <div class="my-message" @click="clickToMessage">我的信息</div>
                <div class="logout" @click='clickToLogout'>退出登陆</div>
            </div>
        </div>
    </header>
</template>

<script>
    import {mapState} from 'vuex'
export default {
    name: 'myHeader',
    data() {
        return {
            userShow:false
        }
    },
    computed: {
        ...mapState(['isLogin','nickname','username'])
    },
    methods:{
        clickToShow() {
            this.userShow = !this.userShow;
        },
        clickToFavor() {
            if(this.isLogin) {
            // window.removeEventListener("scroll",this.throttleFun,true);
            this.$router.push('/favority');
            }
        },
        clickToMessage() {
            // window.removeEventListener("scroll",this.throttleFun,true);
            this.$router.push('/message');
            this.userShow = !this.userShow;
        },
        clickToLogin() {
            window.removeEventListener("scroll",this.throttleFun,true);
            this.$router.push('/login');
        },
        clickToLogout() {
            sessionStorage.removeItem('token')
            this.$store.commit('CHANGE_LOGIN')
            this.userShow = !this.userShow;
            this.$router.push('/home');
        }
    }
}
</script>

<style>
header {
    position: fixed;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    height: 40px;
    width: 1026px;
    margin: 0 auto;
    z-index: 999;
}
.header {
    width: 1026px;
    height: 35px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: rgba(100,100,100,.3);
    border-radius: 0 0 35px 35px / 0 0 15px 15px;
}
.header::after {
    position: fixed;
    top: 35px;
    left: 50%;
    transform: translateX(-55%);
    content: '';
    width: 142px;
    height: 7px;
    border-radius: 0 0 71px 71px / 0 0 7px 7px;
    background-color: rgba(100,100,100,.3);
}
.header .shiliu {
    display: flex;
    justify-content: space-between;
    width: 165px;
    font-size: 24px;

    color: rgb(255,229,161);
}
.header a {
    font-size: 14px;
    color: #fff;
}
.header a:hover {
    color: rgb(153,153,153);
}
.header .favority {
    font-size: 14px;
    color: #fff;
    cursor: pointer;
}
.header .user-lab,
.header .to-login {
    margin-right:40px;
    font-size: 14px;
    color: #fff;
    cursor: pointer;
}
.header .favority:hover,
.header .user-lab:hover,
.header .to-login:hover {
    color: rgb(153,153,153);
}
.header .user-nav {
    position: absolute;
    top: 40px;
    right: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 70px;
    height: 55px;
    padding: 10px 0;
    border-radius: 5px;
    font-size: 12px;
    color: #fff;
    background-color: rgb(80,80,80);
}
.header .user-nav div {
    text-align: center;
    cursor: pointer;
    color: #ddd;
}
.header .user-nav div:hover {
    color: #fff;
}
</style>