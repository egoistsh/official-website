<template>
  <!-- 头部整体盒子 -->
  <div id="header" class="container-fuild">
    <!-- 电脑导航 -->
    <div class="header-nav hidden-xs">
      <!-- 导航logo -->
      <div class="header-nav-logo">
        <img src="@/assets/img/logo.svg">
      </div>
      <!-- 导航内容 -->
      <ul class="header-nav-wrapper">
        <li
          v-for="(item,index) in navList"
          :key="index"
          :class="index==navIndex?'active':''"
          @click="navClick(index,item.name)"
        >
          <router-link :to="item.path">
            {{item.name}}
            <span v-if="item.children.length>0" class="glyphicon glyphicon-menu-down"></span>
            <i class="underline"></i>
          </router-link>
          <dl v-if="item.children.length>0">
            <dt v-for="(i,n) in item.children" :key="n">
              <router-link :to="i.path">{{i.name}}</router-link>
<!--              <router-view></router-view>-->
            </dt>
          </dl>
        </li>
      </ul>
      <div class="header-language">
        <a href="#"><img src="../assets/img/tianmao.jpg" style="width: 30px;height: 30px;display: inline-block;margin-bottom: 5px;margin-right: 3px"></a>
        <a href="#"><img src="../assets/img/weibo2.jpg" style="width: 35px;height: 35px;display: inline-block;margin-bottom: 5px"></a>
        <el-dropdown @command="changeLanguage" class="lang-dropdown">
          <span class="el-dropdown-link ">
          {{$t('nav.language')}}<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item v-for="item in options" :key="item.value" :command="item.value">{{item.label}}
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <!--        <a href="http://weixin.com"><img src="@/assets/img/tianmao.jpg" style="height: 30px;width: 30px;float: right">天猫</a>-->
        <!--        <a href="http://weibo.com">&lt;!&ndash;<img src="@/assets/img/weibo.png">&ndash;&gt;微博</a>-->
      </div>

    </div>
    <!-- 手机导航 -->
    <div class="header-nav-m container-fuild visible-xs">
      <div class="header-nav-m-logo">
        <!--        <img class="center-block" src="@/assets/img/logo_black.png" alt="logo">-->
        <img src="@/assets/img/logo.svg">
      </div>
      <!-- 导航栏 -->
      <div class="header-nav-m-menu text-center">
        {{menuName}}
        <div
          class="header-nav-m-menu-wrapper"
          data-toggle="collapse"
          data-target="#menu"
          @click="menuClick"
        >
          <span :class="menuClass"></span>
        </div>
        <!-- 导航内容 -->
        <ul id="menu" class="header-nav-m-wrapper collapse">
          <li
            v-for="(item,index) in navList"
            :key="index"
            :class="index==navIndex?'active':''"
            @click="navClick(index,item.name)"
            data-toggle="collapse"
            data-target="#menu"
          >
            <router-link :to="item.path">
              {{item.name}}
              <i class="underline"></i>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'Header',
    data () {
      return {
        navIndex: sessionStorage.getItem('navIndex') ? sessionStorage.getItem('navIndex') : 0,
        menuName: '首页',
        menuClass: 'glyphicon glyphicon-menu-down',
        options: [
          {
            value: 'zh-cn',
            label: '简体中文',
          }, {
            value: 'zh-hk',
            label: '繁體中文',
          }, {
            value: 'en',
            label: 'English',
          }],
        value: '',
        /*navList: [
          {
            name: this.$t('nav.home'),
            path: "/",
            children: []
          },
          /!*{
            name: "软件产品",
            path: "/software",
            children: [
              {
                name: "智能小镇管理系统",
                path: "/software/smartTown"
              },
              {
                name: "大数据管理系统",
                path: "/software/bigData"
              }
            ]
          },
          {
            name: "相关服务",
            path: "/service",
            children: []
          },
          {
            name: "新闻动态",
            path: "/newsinformation",
            children: []
          },
          {
            name: "公司介绍",
            path: "/companyintroduction",
            children: []
          },
          {
            name: "工作机会",
            path: "/jobchance",
            children: []
          },
          {
            name: "联系我们",
            path: "/contactus",
            children: []
          },*!/
          {
            name: "关于我们",
            path: "/companyintroduction",
            children: []
          },
          {
            name: "产品展示",
            path: "/productShow",
            children: []
          },
          {
            name: "品牌形象",
            path: "/brandImage",
            children: []
          },
          {
            name: "MYD咨询",
            path: "/informationMyd",
            children: []
          },
          {
            name: "联系我们",
            path: "/contactus",
            children: []
          },
        ],*/
      }
    },
    computed: {
      navList () {
        return [
          {
            name: this.$t('nav.home'),
            path: '/',
            children: [],
          },
          /*{
            name: "软件产品",
            path: "/software",
            children: [
              {
                name: "智能小镇管理系统",
                path: "/software/smartTown"
              },
              {
                name: "大数据管理系统",
                path: "/software/bigData"
              }
            ]
          },
          {
            name: "相关服务",
            path: "/service",
            children: []
          },
          {
            name: "新闻动态",
            path: "/newsinformation",
            children: []
          },
          {
            name: "公司介绍",
            path: "/companyintroduction",
            children: []
          },
          {
            name: "工作机会",
            path: "/jobchance",
            children: []
          },
          {
            name: "联系我们",
            path: "/contactus",
            children: []
          },*/
          {
            name: this.$t('nav.dessertStation'),
            path: '/dessertStation',
            children: [],
          },
          /*{
            name: this.$t('nav.companyintroduction'),
            path: '/companyintroduction',
            children: [],
          },*/
          /*{
            name: '产品展示',
            path: '/productShow',
            children: [],
          },*/
          {
            name: this.$t('nav.brandStory'),
            path: '/service',
            children: [],
          },
          {
            name: this.$t('nav.live'),
            path: '/live',
            children: [
              {
                name: this.$t('nav.latest'),
                path: '/live/latest',
              },
              {
                name: this.$t('nav.news'),
                path: '/live/news',
              },
            ],
          },
          {
            name: this.$t('nav.contactus'),
            path: '/contactus',
            children: [],
          },
        ]
      },

    },
    methods: {
      navClick (index, name) {
        this.navIndex = index
        sessionStorage.setItem('navIndex', index)
        this.menuName = name
      },
      menuClick () {
        if (this.menuClass == 'glyphicon glyphicon-menu-down') {
          this.menuClass = 'glyphicon glyphicon-menu-up'
        } else {
          this.menuClass = 'glyphicon glyphicon-menu-down'
        }
      },
      changeLanguage (language) {
        this.$i18n.locale = language
      },
      handleCommand (command) {
        this.$message('click on item ' + command)
      },
    },
  }
</script>
<style scoped>
  /* 顶部 */
  #header {
    background: #FFFFFF;
    transition: all ease 0.6s;
  }

  #header .header-top {
    height: 50px;
    color: #fff;
    font-size: 12px;
    line-height: 50px;
    background: #007dbb;
  }

  /* 顶部的图标 */
  #header .header-top span {
    margin: 0 8px;
  }

  /* 导航栏 */
  #header .header-nav {
    height: 110px;
    margin: 0 95px;
    /*width: 80%;*/
    /*margin: auto;*/
  }

  /* 导航栏logo */
  #header .header-nav .header-nav-logo {
    width: 100px;
    height: 100%;
    float: left;
    position: relative;
  }

  /* 导航栏logo图片 */
  #header .header-nav .header-nav-logo img {
    width: 95px;
    /*height: 45px;*/
    height: 100px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
  }

  /* 导航栏 导航容器 */
  #header .header-nav-fixed .header-nav-wrapper {
    line-height: 50px;
  }

  #header .header-nav .header-nav-wrapper {
    line-height: 110px;
    /*float: right;*/
    margin: 0;
    /*max-width: 800px;*/
  }

  /* 导航栏 每个导航 */
  #header .header-nav .header-nav-wrapper > li {
    float: left;
    margin: 0 15px;
    position: relative;
  }

  /* 导航栏 每个导航下面的 a 链接 */
  #header .header-nav .header-nav-wrapper > li > a {
    color: #000;
    font-size: 15px;
    font-weight: bold;
    padding: 15px 0;
    position: relative;
  }

  /* 导航栏 每个导航下面的 a 链接的下划线 */
  #header .header-nav .header-nav-wrapper > li > a > i {
    display: block;
    position: absolute;
    bottom: -2px;
    left: 50%;
    width: 0;
    height: 2px;
    opacity: 0;
    transition: all 0.6s ease;
    background-color: #1e73be;
  }

  /* 导航栏 每个导航下面的 a 链接的右侧小三角 */
  #header .header-nav .header-nav-wrapper > li > a > span {
    font-size: 12px;
    transition: transform ease 0.5s;
  }

  /* 导航栏 每个导航下面的 a 链接 鼠标滑上去的样式 */
  #header .header-nav .header-nav-wrapper > li > a:hover {
    color: #1e73be;
    text-decoration: none;
  }

  /* 导航栏 每个导航下面的 a 链接 鼠标滑上去下划线的样式 */
  #header .header-nav .header-nav-wrapper > li > a:hover .underline {
    opacity: 1;
    width: 100%;
    left: 0;
  }

  /* 导航栏 每个导航下面的 a 链接 鼠标滑上去三角标的样式 */
  #header .header-nav .header-nav-wrapper > li > a:hover span {
    transform: rotate(180deg);
  }

  /* 导航栏 每个导航下面的 a 链接 鼠标点击后的样式 */
  #header .header-nav .header-nav-wrapper > li.active > a {
    color: #1e73be;
    text-decoration: none;
    border-bottom: 2px solid #1e73be;
  }

  /* 导航栏 每个导航下面的二级导航容器 */
  #header .header-nav .header-nav-wrapper > li > dl {
    display: none;
    position: absolute;
    width: 168px;
    top: 80%;
    left: 0;
    z-index: 999999;
    box-shadow: 0 0 3px 1px #ccc;
    background: #fff;
  }

  /* 导航栏 每个导航下面的二级导航容器的每个导航 */
  #header .header-nav .header-nav-wrapper > li > dl > dt {
    width: 100%;
    padding: 10px;
    border-bottom: 1px solid #ccc;
  }

  /* 导航栏 每个导航下面的二级导航容器的每个导航 当鼠标滑上时的样式*/
  #header .header-nav .header-nav-wrapper > li > dl > dt > a:hover {
    text-decoration: none;
  }

  /* 导航栏 滑上一级导航显示二级导航 */
  #header .header-nav .header-nav-wrapper > li:hover dl {
    display: block;
  }

  #header .header-nav .header-nav-wrapper > li > dl > dt:hover {
    cursor: pointer;
    background: #ccc;
  }

  /* 切换语言 */
  .header-language {
    float: right;
    /*line-height: 110px;*/
    margin-top: 36px;
  }

  /* 切换语言下拉框样式 */
  .lang-dropdown {
    color: black;
    font-size: 15px;
    font-weight: bold;
  }

  @media screen and (max-width: 997px) {
    #header .header-nav-m {
      position: relative;
    }

    /* 导航栏logo容器 */
    #header .header-nav-m .header-nav-m-logo {
      height: 80px;
      position: relative;
    }

    /* 导航栏logo图片 */
    #header .header-nav-m .header-nav-m-logo img {
      width: 95px;
      height: 80px;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: auto;
    }

    /* 导航栏  菜单容器 */
    #header .header-nav-m .header-nav-m-menu {
      color: #fff;
      height: 50px;
      font-size: 20px;
      line-height: 50px;
      background: #1197d6;
      position: relative;
    }

    /* 导航栏 菜单图标 */
    #header .header-nav-m .header-nav-m-menu-wrapper {
      position: absolute;
      top: 50%;
      right: 20px;
      margin-top: -20px;
      width: 50px;
      height: 40px;
      color: #fff;
      z-index: 999999;
      font-size: 12px;
    }

    /* 导航栏 */
    #header .header-nav-m .header-nav-m-wrapper {
      position: absolute;
      top: 50px;
      left: 0;
      width: 100%;
      background: #474747;
      z-index: 9999999;
    }

    /* 导航栏 每个导航 */
    #header .header-nav-m .header-nav-m-wrapper > li {
      height: 40px;
      line-height: 40px;
      border-bottom: 1px solid #ccc;
    }

    /* 导航栏 每个导航下面的 a 链接 */
    #header .header-nav-m .header-nav-m-wrapper > li > a {
      color: #fff;
      font-size: 15px;
      font-weight: bold;
      padding: 15px 0;
      position: relative;
    }

    /* 导航栏 每个导航下面的 a 链接的右侧小三角 */
    #header .header-nav .header-nav-wrapper > li > a > span {
      font-size: 10px;
    }

    .el-dropdown-link {
      cursor: pointer;
      color: #fffdfd;
    }

    .el-icon-arrow-down {
      font-size: 12px;
    }

    .link {
      display: inline-block;
      /*background: url('../assets/img/weibo2.jpg');*/
      /*background: black;*/
    }
  }
</style>
