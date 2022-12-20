<template>
  <div class="bg">
    <div class="message-box">
    <div class="message-left">
        <div class="login-id">
            登录帐号：<br>
            <div class="userid">
                {{username}}
            </div>
        </div>
        <div class="function">
            &nbsp;&nbsp;功能
            <ul class="function-module">
                <li  v-for="(f,index) in functionList" :key="index"
                :class="{hover: changeStyle == index}" @click="changeFunction(index)">{{f.name}}</li>
            </ul>
        </div>
    </div>
    <div class="message-right">
        <div class="function-list">功能 / {{functionName}}</div>
        <div class="function-show">
            <router-view></router-view>
        </div>
    </div>
  </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    name: 'myMessage',
    components: {

    },
    data() {
        return {
            functionList:[
                {'name':'历史记录'},
                {'name':'个人信息'}
            ],
            changeStyle:'0',
            functionName:'历史记录',
        }
    },
    methods:{
        changeFunction(index) {
            this.changeStyle = index;
            if(index) {
                this.$router.push('/message/user');
                this.functionName = '个人信息';
            }
            else {
                this.$router.push('/message/history');
                this.functionName = '历史记录';
            }
        }
    },
    computed: {
        ...mapState(['username'])
    }
}
</script>

<style scoped>
.bg {
    width: 1026px;
    height: 826px;
    margin: 0 auto;
    padding-top: 40px;
    background-color: rgb(255,251,251);
}

.message-box {
    width: 996px;
    height: 666px;
    margin: 0 auto;
    padding-top: 60px;
    display: flex;
    justify-content: space-between;
}
.message-left {
    display: flex;
    flex-direction: column;
    width: 148px;
    height: 664px;
    box-shadow: 0 0 1px 1px #eee;
    background-color: #fff;
}
.message-left .login-id {
    width: 150px;
    height: 60px;
    padding: 20px 10px;
    font-size: 13px;
    color: #888;
}
.message-left .login-id .userid {
    margin: 15px;
    font-size: 13px;
    color: #333;
}
.message-left .function {
    width: 150px;
    height: 150px;
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    /* padding: 0 10px; */
    font-size: 13px;
    color: #888;
}
.message-left .function .function-module {
    width: 148px;
    height: 118px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    box-sizing: border-box;
    margin-top: 10px;
    /* background-color:#000;  */
}
.message-left .function .function-module li {
    height: 30px;
    line-height: 29px;
    color: #888;
    text-align: center;
    cursor: pointer;
}
.message-left .function .function-module li:hover {
    color: #000;
    border-right: 6px solid #000;
    border-left: 6px solid #fff;
}
.message-right {
    display: flex;
    flex-direction: column;

    width: 836px;
    height: 664px;
}
.message-right .function-list {
    height: 50px;
    line-height: 60px;
    margin-left: 20px;
    font-size: 12px;
}
.message-right .function-show {
    width: 826px;
    height: 616px;
    background-color: #fff;
    box-shadow: 0 0 1px 1px #eee;
}
.hover {
    color: #000 !important;
    border-right: 6px solid #000;
    border-left: 6px solid #fff;
}
</style>