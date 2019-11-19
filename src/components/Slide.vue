<template>
  <!-- <ul v-else>
     <carousel :autoplay="true" :nav="false" :margin="20" :items="5" :dots="false">
       <li v-for="item in articles">
         <img class="img-owl img-responsive" v-bind:src="item.imageUrl"/>
       </li>
     </carousel>
   </ul>-->
  <img v-if="loading" src="/static/img/loading.gif">
  <div v-else>
    <carousel :autoplay="true" :nav="false" :margin="20" :items="4" :dots="false"
              :responsive="{300:{items:3},600:{items:4}}">
      <div v-for="item in articles" align="center" class="item">
<!--        <a :href="'#/productDetail/'+item.id" target="_blank">-->
        <img class="img-owl img-responsive" v-bind:src="item.imageUrl"/>
<!--        </a>-->
      </div>
    </carousel>
  </div>
</template>

<script>
  import carousel from 'vue-owl-carousel'
  import { listArticle } from '@/api/portal.js'

  export default {
    name: 'Slide',
    components: {
      carousel,
    },
    data () {
      return {
        loading: true,
        articles: [],
        imgs: [
          {'url': 'http://myd-official.com/image/upimg_1572485681068163959.jpg'},
          {'url': 'http://myd-official.com/image/upimg_1572485681068163959.jpg'},
          {'url': 'http://myd-official.com/image/upimg_1572485681068163959.jpg'},
          {'url': 'http://myd-official.com/image/upimg_1572485681068163959.jpg'},
          {'url': 'http://myd-official.com/image/upimg_1572485681068163959.jpg'},
          {'url': 'http://myd-official.com/image/upimg_1572485681068163959.jpg'},
          {'url': 'http://myd-official.com/image/upimg_1572485681068163959.jpg'},
          {'url': 'http://myd-official.com/image/upimg_1572485681068163959.jpg'},
        ],
      }
    },
    mounted () {
      // this.listArticle()
    },
    created () {
      this.listArticle()
    },
    methods: {
      listArticle () {
        const data = {
          params: {
            featureId: '1189714214260969472',
            size: 10,
            // pubTime:moment(new Date().getTime()).format('YYYY-MM-DD HH:mm:ss'),
            enabled: 1,
            sort: 'viewCount,desc',
            // sort:'showOrder,asc'
          },
        }
        listArticle(data).then((response) => {
          this.articles = response.data.content
          console.log('success')
          console.log(this.articles)
          // this.$nextTick()
        }).catch((error) => {
          console.log(error)
        }).then(
          () => this.loading = false,
        )
      },
    },
  }
</script>

<style scoped>
  .img-owl {
  }

  .item {
    width: 100%;
    height: 23rem;
    margin: 0 auto;

    display: flex;
    align-items: center;
  }

  @media screen and (max-width: 768px) {
    .item {
      height: 12rem;
    }
  }
</style>
