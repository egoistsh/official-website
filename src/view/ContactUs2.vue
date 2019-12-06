<template>
  <div id="ContactUs">
    <Header></Header>
    <div class="page-title">
      <h1><a href="#">Contact</a></h1>
    </div>
    <div class="container hidden-xs">
      <el-form label-position="left" label-width="170px" :model="form" class="app">
        <el-form-item :label="this.$t('contact.company')">
          <el-input v-model="form.company" class="formItem"></el-input>
        </el-form-item>
        <el-form-item :label="this.$t('contact.name')">
          <el-input v-model="form.name" class="formItem"></el-input>
        </el-form-item>
        <el-form-item :label="this.$t('contact.email')">
          <el-input v-model="form.email" class="formItem"></el-input>
        </el-form-item>
        <el-form-item :label="this.$t('contact.address')">
          <el-input v-model="form.address" class="formItem"></el-input>
        </el-form-item>
        <el-form-item :label="this.$t('contact.phone')">
          <el-input v-model="form.phone" class="formItem"></el-input>
        </el-form-item>
        <el-form-item :label="this.$t('contact.message')">
          <el-input type="textarea" :rows="4" v-model="form.message" class="formItem"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">{{$t('contact.submit')}}</el-button>
        </el-form-item>
      </el-form>
    </div>
    <!--app-->
    <div class="container visible-xs">
      <el-form label-position="left" :model="form" class="app">
        <el-form-item :label="this.$t('contact.company')">
          <el-input v-model="form.company" class="formItem"></el-input>
        </el-form-item>
        <el-form-item :label="this.$t('contact.name')">
          <el-input v-model="form.name" class="formItem"></el-input>
        </el-form-item>
        <el-form-item :label="this.$t('contact.email')">
          <el-input v-model="form.email" class="formItem"></el-input>
        </el-form-item>
        <el-form-item :label="this.$t('contact.address')">
          <el-input v-model="form.address" class="formItem"></el-input>
        </el-form-item>
        <el-form-item :label="this.$t('contact.phone')">
          <el-input v-model="form.phone" class="formItem"></el-input>
        </el-form-item>
        <el-form-item :label="this.$t('contact.message')">
          <el-input type="textarea" :rows="4" v-model="form.message" class="formItem"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">{{$t('contact.submit')}}</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
  import BMap from 'BMap'

  export default {
    name: 'ContactUs',
    data () {
      return {
        form: {
          company: '',
          name: '',
          email: '',
          address: '',
          phone: '',
          message: '',
        },
      }
    },
    mounted () {
    },
  }
</script>
<style scoped>
  a {
    color: #1d496f;
  }

  a:hover, a:link {
    text-decoration: none;
  }

  .page-title {
    position: relative;
    padding: 6rem 0;
    text-align: center;
    font-family: HalisGR-SLight;
    height: 21vh;
  }

  .page-title h1 {
    margin-bottom: 18px;
    /*color: #C8A062;*/
    font-size: 37px;
    letter-spacing: 0.08em;
  }

  .container {
    width: 700px;
    position: absolute;
    left: 46%;
    transform: translate(-50%, 0);
  }

  .formItem {
    width: 500px;
  }

  /*app*/
  @media screen and (max-width: 997px) {
    .container {
      width: 27rem;
    }

    .formItem {
      width: 21rem;
    }
  }
</style>

