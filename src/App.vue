<template>
  <div id="app">
    <Header></Header>
    <router-view/>
<!--    <FooterImage></FooterImage>-->
<!--    <Footer></Footer>-->
<!--    <GoTop></GoTop>-->
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  @media screen and (min-width: 768px){
    #app {
      padding-top: 100px;
    }
  }
</style>
