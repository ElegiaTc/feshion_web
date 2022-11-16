<template>
  <div class="base-message">
    <h3>完善您的个人资料，以便我们更好的为您提供服务！</h3>
    <form action="" id="form1">
      账号: <input type="text" class="userid" value="12345678910">
      <br><br>
      昵称: <input type="text" class="username" value="石榴君">更换名称
    </form>
    <div class="confirm">确认</div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.base-message {
  width: 700px;
  height: 300px;
  margin-top: 16px;
  margin-left: 56px;
}
.base-message h3 {
  font-size: 18px;
}
.base-message #form1 {
  margin-top: 20px;
  margin-left: 30px;
  font-size: 13px;
}
#form1 input {
  width: 205px;
  outline: none;
  border: none;
  border-bottom: 1px solid #000;
  text-indent: 5px;
}
.base-message .confirm {
  width: 198px;
  height: 28px;
  line-height: 27px;
  margin-top: 20px;
  margin-left: 30px;
  text-align: center;
  border: 1px solid #777;
  border-radius: 10px;
  font-size: 13px;
}
.base-message .confirm:hover {
  background-color: rgb(121,121,121);
  color: #fff;
}
</style>