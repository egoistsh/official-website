// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

//采用cdn加速
// import Vue from 'vue'
// import VueI18n from 'vue-i18n'
// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
/* bootstarp */
// import './assets/css/bootstrap.min.css'
// import './assets/js/bootstrap.min'
// import 'animate.css'
// import 'jquery'




import App from './App'
import locale from 'element-ui/lib/locale/lang/zh-CN' // vue lang i18n
import DrawerLayout from 'vue-drawer-layout'

// font awesome图标库
import fontawesome from '@fortawesome/fontawesome'
import solid from '@fortawesome/fontawesome-free-solid'

// Vue.use(VueI18n)
// Vue.use(ElementUI,{locale})
Vue.use(DrawerLayout)

//实例化vue-i18n
const i18n = new VueI18n({
  // 从本地存储中取，如果没有默认为中文，
  // 这样可以解决切换语言后，没记住选择的语言，刷新页面后还是默认的语言
  locale: localStorage.getItem('lang') || 'zh-cn',

  messages: {
    'zh-cn': require('./assets/lang/zh-cn'), // 中文语言包
    'zh-hk':require('./assets/lang/zh-hk'),//中文繁体包
    'en': require('./assets/lang/en'), // 英文语言包
  }
})

/* 路由 */
import router from './router'

/* axios */
import axios from './api'
import api from './api/api'

Vue.prototype.http = axios
Vue.prototype.api = api

/* swiper */
import 'swiper/dist/css/swiper.min.css'

/* 重置样式 */
import './assets/css/reset.min.css'

/* 通用样式 */
import './assets/css/index.css'





/* onepage */
/*import './assets/css/onepage-scroll.css'
import './assets/js/jquery.onepage-scroll'*/

/* fullPage */
import VueFullPage from 'vue-fullpage.js';
Vue.use(VueFullPage);


/* 头部组件 */
import Header from './components/Header'

Vue.component(Header.name, Header)

/* 尾部组件 */
import Footer from './components/Footer'
import FooterImage from './components/FooterImage'

Vue.component(Footer.name, Footer)
Vue.component(FooterImage.name,FooterImage)

/* 回到顶部 */
import GoTop from './components/GoTop'

Vue.component(GoTop.name, GoTop)

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

new Vue({
  el: '#app',
  router,
  i18n,
  components: {App},
  template: '<App/>',
})
