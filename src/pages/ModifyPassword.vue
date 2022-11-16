<template>
  <div class="modify-password">
    <form action="" id="form2">
      旧密码: &nbsp;&nbsp;<input type="text" class="oldpass" placeholder="请输入旧密码">
      <br><br>
      新密码: &nbsp;&nbsp;<input type="text" class="newpass" placeholder="请输入新密码">
      <br><br>
      重复密码: &nbsp;&nbsp;<input type="text" class="repeatpass" placeholder="请重复输入新密码">
    </form>
    <div class="savepass">保存密码</div>
  </div>
</template>

<script>
export default {

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