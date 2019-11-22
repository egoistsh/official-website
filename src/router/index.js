import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      redirect: '/',
    }, {
      path: '/',
      name: 'PageView',
      component: resolve => require(['@/view/PageView'], resolve),
      children: [
        {
          path: '/',
          redirect: '/home',
        }, {
          path: '/home',
          name: 'home',
          component: resolve => require(['@/view/HomePage'], resolve),
          meta: {
            title: '首页',
          },
        }, {
          path: '/service',
          name: 'service',
          component: resolve => require(['@/view/Service'], resolve),
          meta: {
            title: '相关服务',
          },
        }, {
          path: '/newsinformation',
          name: 'newsinformation',
          component: resolve => require(['@/view/NewsInformation'], resolve),
          meta: {
            title: '新闻动态',
          },
        }, {
          path: '/companyintroduction',
          name: 'companyintroduction',
          component: resolve => require(['@/view/CompanyIntroduction'],
            resolve),
          meta: {
            title: '公司介绍',
          },
        }, {
          path: '/contactus',
          name: 'contactus',
          component: resolve => require(['@/view/ContactUs'], resolve),
          meta: {
            title: '联系我们',
          },
        },
        {
          path: '/servicedetail',
          name: 'servicedetail',
          component: resolve => require(['@/view/ServiceDetail'], resolve),
          meta: {
            title: '相关服务',
          },
        },
        {
          path: '/productShow',
          name: 'productShow',
          component: resolve => require(['@/view/ServiceDetail'], resolve),
          meta: {
            title: '产品展示',
          },
        },
        {
          path: '/live',
          name: 'live',
          component: resolve => require(['@/view/Article'], resolve),
          meta: {
            title: '动态',
          },
          children: [
            {
              path: '/live',
              redirect: '/live/latest',
            },
            {
              path: '/live/latest',
              name: 'latest',
              component: resolve => require(['@/view/LatestArticle'], resolve),
              meta: {
                title: '最新活动',
              },
            },
            {
              path: '/live/news',
              name: 'news',
              component: resolve => require(['@/view/NewsArticle'], resolve),
              meta: {
                title: '新闻事件',
              },
            },
          ],
        },
        {
          path: '/articleDetail/:id',
          name: 'articleDetail',
          component: resolve => require(['@/view/ArticleDetail'], resolve),
          meta: {
            title: '文章详情',
          },
          props: (route) => ({
            articleId: route.params.id,
          }),
        },
        {
          path: '/productDetail/:id',
          name: 'productDetail',
          component: resolve => require(['@/view/ProductDetail'], resolve),
          meta: {
            title: '产品详情',
          },
          props: (route) => ({
            articleId: route.params.id,
          }),
        },
        {
          path: '/dessertStation',
          name: 'dessertStation',
          component: resolve => require(['@/view/DessertStation'], resolve),
          meta: {
            title: '甜品站',
          },
        },
        {
          path: '/dessertStation2',
          name: 'dessertStation2',
          component: resolve => require(['@/view/DessertStation2'], resolve),
          meta: {
            title: '甜品站',
          },
        },
      ],
    },
  ],
})
