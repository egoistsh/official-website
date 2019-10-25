<template>
<!--  <div class="load" v-show></div>-->
  <div class="articles">
    <div class="load" v-loading='loading' v-show="loading" element-loading-text="拼命加载中"></div>
    <br>
    <ul class="graphic mb20">
      <li v-for="(item,index) in articles" :key="index">
        <a :href="'#/articleDetail/'+item.id">
          <div class="img hidden-xs" v-show="item.imageUrl">
            <el-image :src="item.imageUrl" :alt="item.title" :style="coverImageSize">
            </el-image>
          </div>
          <div class="content">
            <h2>
              <span class="title">{{item.title}}</span>
            </h2>
            <!--          <p>{{item.content}}</p>-->
            <div class="contentStr">{{item.brief}}</div>
            <div class="tip">
              <span>{{item.author}}</span>
              <span><i class="ico icon1"></i>{{item.viewCount | nullToZero}}</span>
              <span class="layout">{{item.pubTime| formatDate}}</span>
            </div>
          </div>
        </a>
      </li>
    </ul>
    <!--分页组件-->
    <el-pagination
      :total="total"
      :current-page="page + 1"
      style="margin:40px 0;"
      layout="total, prev, pager, next, sizes"
      @size-change="sizeChange"
      @current-change="pageChange"/>
  </div>
</template>
<script>
  import moment from 'moment'
  import { listArticle } from '@/api/portal.js'

  export default {
    name: 'News',
    filters: {
      formatDate (date) { return date ? moment(date).format('YYYY-MM-DD HH:mm:ss') : '' },

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
        size:10,

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
  a:link, a:visited { text-decoration: none; color: #000; }

  .load {
    width: 100%;
    height: 500px;
  }

  .articles {
    width: 60%;
    margin:auto;
  }

  /* 图文式 */
  .graphic li {
    padding: 30px 5px;
    overflow: hidden;
    zoom: 1
  }

  .graphic .img {
    width: 200px;
    height: 136px;
    float: left;
    margin-right: 25px;
  }

  .graphic h2 {
    font-size: 24px;
    color: #333;
    padding-bottom: 5px;
  }

  .graphic h2.layout {
    font-size: 30px;
    font-weight: bold;
    padding-bottom: 14px;
  }

  .graphic div {
    color: #999;
    font-size: 14px;
    line-height: 24px;
  }

  .graphic .tip {
    font-size: 14px;
    padding-top: 10px;
    line-height: 20px;
  }

  .graphic .tip span {
    display: inline-block;
    color: #999;
    margin-right: 15px;
    float: left;
  }

  .graphic .tip span.layout {
    float: right;
    margin-right: 0;
    margin-left: 15px;
  }

  .graphic i {
    width: 24px;
    height: 14px;
    float: left;
    margin: 3px 5px 0 0
  }

  .graphic i.icon1 {
    background-position: -140px -104px;
  }

  .graphic a.name {
    color: #5e779c
  }

  .mb20 {
    margin-bottom: 20px;
  }

  .ico {
    display: inline-block;
    background: url(../assets/img/icon.png) no-repeat;
  }

  .content {
    overflow: hidden;
  }

  .title {
    overflow: hidden;
    text-overflow: ellipsis;
    display: block;
    white-space: nowrap;
  }

  /* 图文式内容超出高估后，最后一行渐变消失处理 */
  .contentStr {
    position: relative;
    text-indent: 2em;
    line-height: 24px;
    max-height: 72px;
    overflow: hidden;
  }

  .contentStr:after {
    content: '\00A0\00A0\00A0\00A0';
    position: absolute;
    bottom: 0;
    right: 0;
    padding-left: 100px;
    background: -webkit-linear-gradient(left, transparent, #fff 55%);
    background: -o-linear-gradient(right, transparent, #fff 55%);
    background: -moz-linear-gradient(right, transparent, #fff 55%);
    background: linear-gradient(to right, transparent, #fff 70%);
  }
</style>

