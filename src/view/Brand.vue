<template>
  <div style="height: 100%">
<!--    <Header></Header>-->
    <div>
      <div class="page-title">
        <h1><a href="#">Brand Story</a></h1>
        <nav class="nav-article">
          <a href="#">Meaning</a>
          <a href="#">Concept</a>
          <a href="#">Course</a>
        </nav>
      </div>
      <div class="contents" v-loading=loading>
        <div class="col-md-4" v-for="(item,index) in list">
          <a href="#" @click="showDialog(index)">
            <div class="block" :style="{'background-image':'url('+ item.imageUrl + ')'}">
              <h2 v-if="index===0">{{$t('brand.meaning')}}</h2>
              <h2 v-if="index===1">{{$t('brand.concept')}}</h2>
              <h2 v-if="index===2">{{$t('brand.course')}}</h2>
              <p>Brand story</p>
            </div>
          </a>
        </div>
        <el-dialog :visible.sync="dialogTableVisible" width="50%" top="8.5vh" center :modal=true custom-class="dialog"
                   class="element animated jackInTheBox" @close="close" @open="open" ref="dialog">
          <div slot="title" class="dialog-title">{{title}}</div>
          <div class="dialog-content">{{content}}</div>
        </el-dialog>
      </div>

    </div>
  </div>
</template>

<script>
  import { listPictureConfigs } from '@/api/portal.js'
  import { WOW } from 'wowjs'

  export default {
    name: 'Brand',
    data () {
      return {
        list: undefined,

        //弹出对话框
        dialogTableVisible: false,
        title: '',
        content: '',
        // dialogClass:'dialog'
        loading: true
      }
    },
    computed: {
      brandList () {
        return [
          {
            title: this.$t('brand.meaning'),
            content: this.$t('brand.meaningDetail'),
          },
          {
            title: this.$t('brand.concept'),
            content: this.$t('brand.conceptDetail'),
          },
          {
            title: this.$t('brand.course'),
            content: this.$t('brand.courseDetail'),
          },
        ]
      },
    },
    mounted () {
      /* wowjs动画 */
      var wow = new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 0,
        mobile: true,
        live: false,
      })
      wow.init()

      this.listBrand()
    },
    methods: {
      listBrand () {
        const data = {
          params: {
            typeName: '品牌故事',
            sort: 'showOrder,asc',
          },
        }
        listPictureConfigs(data).then((response) => {
          this.list = response.data.content
          this.loading = false
        }).catch((error) => {
          console.log(error)
        })
      },
      showDialog (index) {
        this.dialogTableVisible = true
        /*this.title = item.name
        this.content = item.description*/
        this.title = this.brandList[index].title
        this.content = this.brandList[index].content
        console.log(this.content)
      },
      close() {
        // this.dialogTableVisible = false
        // this.$refs.dialog.className = 'element'
        $('.element').removeClass('animated');
      },
      open() {
        $('.element').addClass('animated');

      }
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

  .page-title .nav-article a {
    margin: 0 1rem;
  }

  .contents {
    /*position: relative;*/
  }

  .contents > div {
    padding: 0;
  }

  .block {
    text-align: center;
    /*height: 615px;*/
    height: 68vh;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    border: 0 solid #FFF;
    /*transition: transform 3s ease-out, filter 2s ease-out, opacity 0.3s ease-out;*/
    transition: all 0.3s ease-out;
    font-family: serif;
  }

  .block::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #FFF;
    border: 0 solid #FFF;
    opacity: 0;
    transition: all 0.3s ease-out;
  }

  .contents > div :hover .block {
    /*opacity: 0;*/
    border: 25px solid #FFF;
    transition: all 0.3s ease-out;
  }

  .contents > div :hover .block::after {
    background-color: black;
    border: 25px solid #FFF;
    opacity: 0.6;
    transition: all 0.3s ease-out;
  }

  .block h2 {
    position: absolute;
    top: 12rem;
    right: calc(50% - 1rem);
    -ms-writing-mode: tb-rl;
    writing-mode: vertical-rl;
    color: white;
    z-index: 2;
  }

  .block p {
    position: absolute;
    top: 0;
    right: 3rem;
    padding-top: 8rem;
    font-size: 1.4rem;
    font-weight: normal;
    white-space: nowrap;
    iting-mode: tb-rl;
    writing-mode: vertical-rl;
    color: white;
  }

  .block p::before {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    content: "";
    width: 1px;
    height: 6rem;
    margin: auto;
    background-color: #FFF;
  }

  .dialog-title {
    font-size: 20px;
  }

  .dialog-content {
    font-size: 20px;
    letter-spacing: 4px;
    text-indent: 0px;
    line-height: 50px;
    white-space: pre-wrap;
  }

  /*去除滚动条*/
  .element::-webkit-scrollbar {
    width: 0 !important
  }

  .element {
    animate-duration: 2s;

  }

</style>
<style>
  .dialog {
    opacity: 0.8;
  }
</style>
