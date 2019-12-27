<template>
  <div>
    <div v-loading="loading" class="loading"></div>
    <div class="article-contents" v-show="!loading">
      <div class="page-title">
        <h1><a href="/live">News / Blog</a></h1>
        <nav class="nav-article">
          <a href="#">All</a>
          <a href="#">news</a>
          <a href="#">event</a>
        </nav>
      </div>
      <div class="article-list">
        <article v-for="(item,index) in articles" :key="index">
          <a :href="'myd-official.com/articleDetail/'+item.id">
            <time>{{item.pubTime | formatDate}} / news</time>
            <el-image class="img" :src="item.imageUrl" :alt="item.title"></el-image>
            <h2>{{item.title}}</h2>
            <p>{{item.brief}}</p>
          </a>
        </article>
      </div>
    </div>
  </div>
</template>
<script>
  import moment from 'moment'
  import { listArticle } from '@/api/portal.js'

  export default {
    name: 'News',
    filters: {
      formatDate (date) { return date ? moment(date).format('YYYY.MM.DD') : '' },

      /**
       * 如果为空，那么转换为0
       * @param number
       * @returns {*}
       */
      nullToZero (number) {
        if (!number) {
          number = 0
        }
        return number
      },
    },
    data () {
      return {
        articles: [],
        coverImageSize: {width: '200px', height: '136px'},

        //分页
        total:0,
        page:0,
        size:12,

        loading:true
      }
    },
    mounted () {
      this.listArticle()
    },
    methods: {
      listArticle () {
        const data = {
          params:{
            featureId:'1183252644685287424',
            page:this.page,
            size:this.size,
            pubTime:moment(new Date().getTime()).format('YYYY-MM-DD HH:mm:ss'),
            enabled:1,
            sort:'pubTime,desc'
            // sort:'showOrder,asc'
          }
        }
        listArticle(data).then((response) => {
          this.articles = response.data.content
          this.total = response.data.totalElements
          this.loading = false
        }).catch((error) => {
          console.log(error)
        })
      },

      pageChange(e) {
        this.page = e - 1
        this.listArticle()
      },
      sizeChange(e) {
        this.page = 0
        this.size = e
        this.listArticle()
      },
    },

  }
</script>
<style scoped>
  a {
    color: #1d496f;
    text-decoration: none;
    transition: .15s ease-out;
  }

  a:hover {
    opacity: 0.5;
    text-decoration: none;
  }

  .loading {
    position: absolute;
    width: 100%;
    height: 80%;
  }

  .page-title {
    position: relative;
    padding: 6rem 0;
    text-align: center;
    font-family: HalisGR-SLight;
  }

  .page-title h1 {
    margin-bottom: 18px;
    /*color: #C8A062;*/
    font-size: 37px;
    letter-spacing: 0.08em;
  }

  .nav-article, .nav-article a {
    color: #1d496f;
    font-size: 16px;
    letter-spacing: 0.12em;
    text-transform: capitalize;
    padding: 9px;
  }

  .article-list {
    width: 1060px;
    margin: 0 auto;
  }

  .article-list time {
    font-size: 13px;
    letter-spacing: 0.12em;
    font-family: 'Optima', 'Belleza', sans-serif;
    margin-bottom: 17px;
    display: inline-block;
  }

  .article-list h2 {
    margin-bottom: 14px;
    color: #1d496f;
    font-size: 15px;
    font-weight: bold;
    line-height: 1.6;
    letter-spacing: 0.1em;
  }

  .article-list p {
    font-size: 13px;
    text-align: justify;
    line-height: 1.8;
    letter-spacing: 0.06em;
    opacity: 0.6;
  }

  .article-list article {
    float: left;
    width: 302px;
    height: 462px;
    text-align: center;
    margin: 0 77px 60px 0;
  }

  .img {
    width: 303px;
    height: 204px;
    border-radius: 12px;
  }

  .article-list article a {
    position: relative;
    display: block;
    box-sizing: border-box;
    min-height: 450px;
    padding: 38px 0 30px;
  }

  .article-list article:nth-of-type(3n) {
    margin-right: 0;
  }

  .article-list article a:after {
    display: block;
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    background-color: #dbf7ff;
    border-radius: 121px;
    width: 242px;
    height: 100%;
    transform: translateX(-50%);
    z-index: -1;
  }
</style>

