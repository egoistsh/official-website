<template>
  <div class="textbox">
    <Header></Header>
    <div v-if="article" class="info">
      <!--<h2>{{article.title}}</h2>
      <div class="infor">
        <span class="pr22">{{article.pubTime | formatDate}}</span>
        <span class="pr22">{{article.author}}</span>
        浏览({{article.viewCount|nullToZero}})
      </div>-->
      <div class="img">
<!--        <img :src="article.imageUrl" class="img-responsive">-->
        <el-image :src='article.imageUrl'></el-image>
      </div>
      <div class="main">
        <dl>
          <dt class="title"><span>{{article.title}}</span></dt>
          <dd class="brief"><span>简介：{{article.brief}}</span></dd>
        </dl>
      </div>
    </div>
    <div class="line"></div>
    <div v-if="article" class="content">
      <div v-html="article.content"></div>
    </div>
  </div>
</template>

<script>
  import moment from 'moment'
  import { findArticleById, updateArticle } from '@/api/portal.js'

  export default {
    name: 'NewsDetail',
    data () {
      return {
        article: undefined,
      }
    },
    filters: {
      formatDate (date) { return date ? moment(date).format('YYYY-MM-DD HH-mm-ss') : '' },

      formatTime (date) { return date ? moment(date).format('HH:mm:ss') : '' },

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
    watch: {
      article () {
        this.viewArticle()
      },
    },
    props: {
      articleId: {
        type: String,
        default: '',
      },
    },
    mounted () {
      this.findArticleById()
      // this.viewArticle()
    },
    methods: {
      findArticleById () {
        findArticleById(this.articleId).then((response) => {
          console.log(response)
          this.article = response.data
        }).catch((error) => {
          console.log(error)
        })
      },
      viewArticle () {
        this.article.viewCount = this.article.viewCount + 1
        const data = this.article
        updateArticle(data).then((response) => {
          console.log(response)
        }).catch(error => {
          console.log(error)
        })
      },
    },
  }
</script>

<style scoped>
  .textbox {
    width: 80%;
    margin: auto;
  }

  .info {
    /*border-bottom: 1px solid #dcdcdc;*/
    width: 100%;
    height: 45rem;
    /*margin: 0 auto;*/
  }

  .info .img {
    width: 30%;
  }

  .info .main {
    margin: auto;
    width: 50%;
    text-align: center;
  }

  .info .title {
    padding-bottom: .2em;
    line-height: 1;
    font-size: 3rem;
    font-weight: 700;
    color: #000;
    margin-bottom: 20px;
    position: absolute;
    top: 15%;
    left: 50%;
  }

  .info .brief {
    font-size: 25px;
    text-align: left;
    position: absolute;
    top: 25%;
    left: 30%;
  }

  .line {
    border-bottom: 1px solid #dcdcdc;
  }

  .content {
    margin-top: 20px;
  }
</style>
<style>
  .content img {
    display: inline-block;
  }
</style>
