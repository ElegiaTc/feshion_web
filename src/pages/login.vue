<template>
  <div class="login-bg">
    <div class="main-page">
      <h4>{{loginMsg}}</h4>
      <div class="msg">A&nbsp;&nbsp;I&nbsp;&nbsp;
        改&nbsp;&nbsp;变&nbsp;&nbsp;
        世&nbsp;&nbsp;界</div>
        <form action="" method="post">
          <input type="text" class="username" placeholder="点击输入用户名" v-model="username">
          <input type="password" class="password"
          @keyup.enter='toConfirm' placeholder="点击输入密码" v-model="password">
          <div class="btn" @click="toConfirm">{{btnMsg}}</div>
        </form>
        <div class="bottom">
          <div class="remember" v-show="isLoginPage">
          <input type="checkbox" v-model='isChecked'
           value="true">&nbsp;记 住 密 码
          </div>
          <div class="space" v-show="!isLoginPage"></div>
          <div class="tips" @click="changeModule">{{tipsMsg}}</div>
        </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import {register,login,showUserDetail} from '../api'
export default {
    name: 'loginPage',
    data() {
        return {
          loginMsg: '登 录',
          btnMsg: '登 录',
          isLoginPage: true,
          tipsMsg:'无 账 号？点 击 注 册',
          isChecked:'',
          username:'',
          password:'',
        }
    },
    methods: {
      toConfirm() {
        if (this.isLoginPage) {   //走登录流程
          if(this.isChecked) {    //记住密码
            console.log(1);
          }
          login(this.username,this.password)
          .then(res => {
            if(res.status == 200) {
              console.log(res);
              sessionStorage.setItem('token',res.data);
              this.$store.commit('CHANGE_LOGIN');
              showUserDetail().then(res => {
                console.log(res);
                this.$store.commit('CHANGE_USERMESSAGE',
                [res.data.nickname,res.data.username,res.data.id])
                this.$router.push('/home');
              })
              this.$message({
                  message: '登陆成功！',
                  type: 'success'
                });
            } else {
                console.log(res);
                this.$message({
                  message: res.message,
                  type: 'warning'
                });
              }
          })
        } else {                  //走注册流程
            register({username:this.username,password:this.password})
            .then(res => {
              if(res.status == 200) {
                console.log(res);
                this.loginMsg = '登 录'
                this.btnMsg = '登 录'
                this.isLoginPage = true
                this.tipsMsg = '无 账 号？点 击 注 册'
                this.$message({
                  message: res.data,
                  type: 'success'
                });
              } else {
                console.log(res);
                this.$message({
                  message: res.message,
                  type: 'warning'
                });
              }
            })
          }
      },
      changeModule() {
        if (this.isLoginPage) {
          this.loginMsg = '注 册'
          this.btnMsg = '确 认'
          this.isLoginPage = false
          this.tipsMsg = '已 有 账 号？去 登 录'
          this.isChecked = ''
        } else {
          this.loginMsg = '登 录'
          this.btnMsg = '登 录'
          this.isLoginPage = true
          this.tipsMsg = '无 账 号？点 击 注 册'
        }
      },
    },
    computed: {
      ...mapState(['isLogin'])
    }
}
</script>

<style>
.login-bg {
    position: fixed;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 1026px;
    height: 513px;
    background-image: url('.././assets/img7.jpg');
    background-size: contain;
    z-index: -1;
}
.login-bg .main-page {
  position: relative;
    width: 350px;
    height: 230px;
    margin-top: 170px;
    margin-left: 60px;
    padding: 20px 30px;
    box-sizing: border-box;
    border-radius: 30px;
    background-color: rgba(200,200,200,.7);
}
.login-bg h4 {
  margin-left: 5px;
  margin-top: 5px;
}
.login-bg .msg {
  position: absolute;
  top: 30px;
  right: 30px;
  font-size: 13px;
}
.login-bg form {
  padding-top: 10px;
}
.login-bg form input {
  width: 290px;
  height: 32px;
  margin-top: 10px;
  border: none;
  border-radius: 5px;
  outline: none;
  text-indent: 5px;
  background-color: rgb(211,211,211);
}
.login-bg form input::placeholder {
  color: #999;
}
.login-bg form .btn {
  width: 290px;
  height: 30px;
  line-height: 29px;
  border-radius: 5px;
  text-align: center;
  margin-top: 20px;
  font-size: 13px;
  background-color: #000;
  color: #fff;
  cursor: pointer;
}
.login-bg .bottom {
  display: flex;
  justify-content: space-between;
}
.login-bg .remember {
  display: flex;
  align-items: center;
  margin-top: 10px;
  margin-left: 10px;
  font-size: 12px;
  color: #666;
}
.login-bg .tips {
  margin-top: 10px;
  margin-right: 10px;
  font-size: 12px;
  color: rgb(86,56,22);
  cursor: pointer;
}
</style>