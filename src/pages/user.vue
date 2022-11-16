<template>
    <div class="message-main">
    <ul class="user-module">
        <li v-for="(u,index) in userList" :key="index"
        :class="{hover: changeStyle == index}" @click="changeUser(index)">{{u.name}}</li>
    </ul>
    <div class="message-show">
        <router-view></router-view>
    </div>
    </div>
</template>

<script>
export default {
    name: 'myUser',
    data() {
        return {
            userList:[
                {'name':'基础信息'},
                {'name':'修改密码'}
            ],
            changeStyle:'0'
        }
    },
    methods:{
        changeUser(index) {
            this.changeStyle = index;
            if(index) {
                this.$router.push('/message/user/modifyPassword');
            }
            else {
                this.$router.push('/message/user/baseMessage');
            }
        }
    }
}
</script>

<style scoped>
.user-module {
    width: 160px;
    height: 50px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 0 40px;
    font-size: 13px;
}
.user-module li {
    width: 60px;
    height: 25px;
    text-align: center;
    box-sizing: border-box;
    /* background-color: #000; */
    color: #888;
    cursor: pointer;
}
.user-module .hover {
    color: #333;
    border-bottom: 1px solid #000;
}
.user-module li:hover {
    color: #333;
    border-bottom: 1px solid #000;
}
</style>