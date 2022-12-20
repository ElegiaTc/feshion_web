<template>
  <div class="modify-password">
    <form action="" id="form2">
      旧密码: &nbsp;&nbsp;<input type="text" class="oldpass" placeholder="请输入旧密码" v-model="oldPassword">
      <br><br>
      新密码: &nbsp;&nbsp;<input type="text" class="newpass" placeholder="请输入新密码" v-model="newPassword">
      <br><br>
      重复密码: &nbsp;&nbsp;<input type="text" class="repeatpass" placeholder="请重复输入新密码" v-model="repeatPassword">
    </form>
    <div class="savepass" @click="modifyPassword">保存密码</div>
  </div>
</template>

<script>
import {changePassword} from '../api'
export default {
  data() {
    return {
      oldPassword:'',
      newPassword:'',
      repeatPassword:''
    }
  },
  methods: {
    modifyPassword() {
      if(this.newPassword == this.repeatPassword) {
        changePassword({oldPassword:this.oldPassword,newPassword:this.newPassword})
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        })
      } else {
        console.log('两次密码不一致！');
      }
    }
  }
}
</script>

<style scoped>
#form2 {
  margin-left: 80px;
  margin-top: 20px;
  font-size: 13px;
}
#form2 input {
  width: 210px;
  border: none;
  outline: none;
  border-bottom: 1px solid #000;
  text-indent: 5px;
}
#form2 input:last-child {
  width: 197px;
}
.savepass {
  width: 198px;
  height: 28px;
  line-height: 27px;
  margin-top: 25px;
  margin-left: 85px;
  text-align: center;
  border: 1px solid #777;
  border-radius: 10px;
  font-size: 13px;
}
.savepass:hover {
  background-color: rgb(121,121,121);
  color: #fff;
}
</style>