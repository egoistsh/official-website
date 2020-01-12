import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode:'history',
  base: '/',
  routes: [
    {
      path: '/',
      redirect: '/home',
    }, {
      path: '/home',
      name: 'home',
      // component: resolve => require(['@/view/HomePage'], resolve),
      component: () => import(/* webpackChunkName: "home" */ '@/view/HomePage'),
      meta: {
        title: 'MYD官网',
      },
    }, {
      path: '/contactus',
      name: 'contactus',
      // component: resolve => require(['@/view/ContactUs2'], resolve),
      component: () => import(/* webpackChunkName: "contactus" */ '@/view/ContactUs2'),
      meta: {
        title: 'MYD-联系我们',
      },
    },
    {
      path: '/productShow',
      name: 'productShow',
      // component: resolve => require(['@/view/ServiceDetail'], resolve),
      component: () => import(/* webpackChunkName: "productShow" */ '@/view/ServiceDetail'),
      meta: {
        title: '产品展示',
      },
    },
    {
      path: '/live',
      name: 'live',
      // component: resolve => require(['@/view/Article'], resolve),
      component: () => import(/* webpackChunkName: "live" */ '@/view/LatestArticle'),
      meta: {
        title: 'MYD动态',
      },
      /*children: [
        {
          path: '/live',
          redirect: '/live/latest',
        },
        {
          path: '/live/latest',
          name: 'latest',
          // component: resolve => require(['@/view/LatestArticle'], resolve),
          component: () => import(/!* webpackChunkName: "HelloWorld" *!/ '@/view/LatestArticle'),
          meta: {
            title: '最新活动',
          },
        },
        {
          path: '/live/news',
          name: 'news',
          // component: resolve => require(['@/view/NewsArticle'], resolve),
          component: () => import(/!* webpackChunkName: "HelloWorld" *!/ '@/view/NewsArticle'),
          meta: {
            title: '新闻事件',
          },
        },
      ],*/
    },
    {
      path: '/articleDetail/:id',
      name: 'articleDetail',
      // component: resolve => require(['@/view/ArticleDetail'], resolve),
      component: () => import(/* webpackChunkName: "articleDetail" */ '@/view/ArticleDetail'),
      meta: {
        title: '文章详情',
      },
      props: (route) => ({
        articleId: route.params.id,
      }),
    },
    /*{
      path: '/productDetail/:id',
      name: 'productDetail',
      // component: resolve => require(['@/view/ProductDetail'], resolve),
      component: () => import(/!* webpackChunkName: "productDetail" *!/ '@/view/ProductDetail'),
      meta: {
        title: '产品详情',
      },
      props: (route) => ({
        articleId: route.params.id,
      }),
    },*/
    /*{
      path: '/dessertStation',
      name: 'dessertStation',
      // component: resolve => require(['@/view/DessertStation'], resolve),
      component: () => import(/!* webpackChunkName: "dessertStation" *!/ '@/view/DessertStation'),
      meta: {
        title: '甜品站',
      },
    },*/
    {
      path: '/dessertStation2',
      name: 'dessertStation2',
      // component: resolve => require(['@/view/DessertStation2'], resolve),
      component: () => import(/* webpackChunkName: "dessertStation2" */ '@/view/DessertStation2'),
      meta: {
        title: 'MYD甜品站',
      },
    },
    {
      path: '/brand',
      name: 'brand',
      // component: resolve => require(['@/view/Brand'], resolve),
      component: () => import(/* webpackChunkName: "brand" */ '@/view/Brand'),
      meta: {
        title: 'MYD-品牌故事',
      },
    },
  ],
})
