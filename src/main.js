// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueI18n from 'vue-i18n'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/zh-CN' // vue lang i18n


Vue.use(VueI18n)
Vue.use(ElementUI,{locale})

//实例化vue-i18n
const i18n = new VueI18n({
  // 从本地存储中取，如果没有默认为中文，
  // 这样可以解决切换语言后，没记住选择的语言，刷新页面后还是默认的语言
  locale: localStorage.getItem('lang') || 'zh-cn',

  messages: {
    'zh-cn': require('./assets/lang/zh-cn'), // 中文语言包
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

/* jquery */
import 'jquery'

/* bootstarp */
import './assets/css/bootstrap.min.css'
import './assets/js/bootstrap.min'

/* animate.css */
import 'animate.css'

/* 头部组件 */
import Header from './components/Header'

Vue.component(Header.name, Header)

/* 尾部组件 */
import Footer from './components/Footer'

Vue.component(Footer.name, Footer)

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
