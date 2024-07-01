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
import HeaderWapper from './components/HeaderWapper.vue'
import ProfileComponent from './components/ProfileComponent.vue'
import TopButton from './components/TopButton.vue'
import ArticleList from './components/ArticleList.vue'
import FooterWapper from './components/FooterWapper.vue'

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

<style>
:root {
  --main-color-white: rgb(255, 255, 255);
  --main-color-white-tran: rgba(255, 255, 255, 0.7);
  --main-color-black: rgb(0, 0, 0);
  --main-color-black-tran: rgba(0, 0, 0, 0.6);
  --main-background-color-black: rgba(0, 0, 0, 0.5);
  --main-background-color-white: rgba(255, 255, 255, 0.8);
  --main-color-grey: rgb(154, 154, 154);
  --title-background-color: #f8f9fa;
  --tag-color-orange: rgb(242, 199, 119);
  --tag-color-black: rgb(0, 0, 0);
  --tag-color-blue: #2e6bd4;
  --tag-color-green: #dbd3af;
  --tag-color-red: #F37335;
  --block-color-white: rgb(255, 255, 255);
  --hr-color: #e9ecef;
  --vertical-color: #e67762;
  /* --vertical-color: rgb(83, 83, 83); */
  --underline-color: rgb(0, 0, 0);
  --underblock-color: rgb(255, 113, 113);
  --diary-background-color-pink: #ecd9c7;
  --diary-heart-color-red: rgb(214, 85, 85);
  --button-color: #e37444;
}
@font-face {
    font-family: 'Smiley-Sans';
    src: url(./smiley-sans/SmileySans-Oblique.ttf.woff2) format('woff2');
}

html {
  font-size: 18px;
  transition: all 0.3s;
}

body {
  margin: 0;
  padding: 0;
  color: var(--main-color-black);
  font-family: hg-grotesk, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
}

</style>
