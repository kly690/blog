<template>
  <div>
      <HeaderWapper />
      <ProfileComponent />
      <TopButton />
      <ArticleList />
      <FooterWapper />
  </div>
</template>

<script>
import HeaderWapper from '../components/HeaderWapper.vue'
import ProfileComponent from '../components/ProfileComponent.vue'
import TopButton from '../components/TopButton.vue'
import ArticleList from '../components/ArticleList.vue'
import FooterWapper from '../components/FooterWapper.vue'
export default {
  name: 'App',
  components: {
    HeaderWapper,
    ProfileComponent,
    TopButton,
    ArticleList,
    FooterWapper
  }
}
</script>