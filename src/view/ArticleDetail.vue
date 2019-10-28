<template>
  <div class="textbox">
    <div v-if="article">
      <h2>{{article.title}}</h2>
      <div class="infor">
        <span class="pr22">{{article.pubTime | formatDate}}</span>
        <span class="pr22">{{article.author}}</span>
        浏览({{article.viewCount|nullToZero}})
      </div>
    </div>
    <div v-if="article" class="content">
      <div v-html="article.content"></div>
    </div>
  </div>
</template>

<script>
  import moment from 'moment'
  import { findArticleById,updateArticle } from '@/api/portal.js'

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
    watch:{
      article(){
        this.viewArticle()
      }
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
        this.article.viewCount = this.article.viewCount+1
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
  /* 正文 */
  .textbox {
    width: 80%;
    margin: auto;
  }

  .textbox h2 {
    font-size: 30px;
    text-align: center;
    line-height: 50px;
  }

  .textbox .infor {
    border-bottom: 1px solid #dcdcdc;
    height: 45px;
    line-height: 28px;
    padding-bottom: 5px;
    font-size: 16px;
    color: #999;
    text-align: center
  }

  .textbox .content {
    margin: 0 auto;
    padding-top: 25px;
  }

  /*.textbox span {
    font-size: 20px;
    line-height: 40px;
    text-indent: 38px;
  }

  .textbox .img {
    text-align: center;
    margin-bottom: 30px;
  }

  .textbox .img span {
    display: block;
    color: #666;
    line-height: 40px;
  }*/

  .pr22 {
    padding-right: 22px;
  }
</style>
<style>
  .content img {
    display: inline-block;
  }
</style>
