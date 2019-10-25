<template>
  <div id="footer" class="container-fluid">
    <div class="logo">
      <img src="@/assets/img/logo.svg" width="80px">
    </div>
<!--    <p class="title">MYD公司</p>-->
    <p class="address_tel_fax">
      <span>地址：公司地址公司地址公司地址公司地址</span>
      <span>Tel：888-888-888</span>
      <span>Fax：8888-88888888</span>
    </p>
    <p class="email_wx">
      <span>邮箱：g_billy@163.com</span>
      <span>公司微信号：312205172</span>
    </p>
    <p class="copy">Copyright &copy; 2019 - 2020 公司名称公司名称</p>
  </div>
</template>
<script>
export default {
  name: "Footer",
  data() {
    return {};
  }
};
</script>
<style scoped>
#footer {
  width: 100%;
  height: 100%;
  color: #fff;
  background: #007dbb;
  overflow: hidden;
  text-align: center;
}
.logo {
  width: 95px;
  height: 45px;
  margin: 20px auto 50px;
}
.title {
  font-size: 25px;
  margin-bottom: 20px;
}
.address_tel_fax {
  color: #d3d3d3;
  font-size: 14px;
  margin: 10px 0;
}
.email_wx {
  color: #d3d3d3;
  font-size: 14px;
}
.copy {
  color: #d3d3d3;
  font-size: 14px;
  margin: 40px 0 10px;
}
@media screen and (max-width: 997px) {
  .title {
    font-size: 20px;
  }
  .address_tel_fax {
    font-size: 12px;
  }
  .email_wx {

  font-size: 12px;
}
.copy {
  font-size: 12px;
  margin: 30px 0 10px;
}
}
</style>

