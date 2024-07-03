<template>
  <div class="body-wrapper">
    <div class="body">
      <div class="article_col">
        <article class="article_block" v-for="(item) in al_odd" :key="item.id">
          <a class="article_pic" @click="getArticleRouter(item.id)">
              <img :src="getImg(item.img)" />
          </a>
          <span class="label"> {{ item.tag }}</span>
          <a class="title_brief" @click="getArticleRouter(item.id)">{{ item.name }}</a>
          <span class="article_time">{{item.date}}</span>
          <div class="article_description">{{item.des}}</div>
        </article>
      </div>
      <div class="article_col">
        <article class="article_block" v-for="(item) in al_even" :key="item.id">  
          <a class="article_pic" @click="getArticleRouter(item.id)">
              <img :src="getImg(item.img)" />
          </a>
          <span class="label"> {{ item.tag }}</span>
          <a class="title_brief" @click="getArticleRouter(item.id)">{{ item.name }}</a>
          <span class="article_time">{{item.date}}</span>
          <div class="article_description">{{item.des}}</div>
        </article>
      </div>             
    </div>
  </div>
</template>

<style scoped>
.body-wrapper {
    width: 100%;
    margin-top: 16px;
}

@media screen and (min-width:1200px) {
  .body{
    width: 1200px;
    margin: 0 auto;
  }
}

.body {
  display: flex;
  flex: 0 0 0.5;
}

.article_col {
  width: 50%;
}

.article_block {
  padding: 40px;
  width: 100%;
  box-sizing: border-box;
  background-color: var(--block-color-white);
  border: var(--hr-color) 0.5px solid;
  transition: all 0.2s;
}

.article_block:hover {
  transform: scale(1.025);
}

.article_time {
  font-size: 0.8rem;
  color: var(--main-color-grey);
}

.label {
  font-size: 16px;
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  position: relative;
  color: var(--main-color-grey);
  /* font-family: "Smiley-Sans"; */
}

.label:hover {
  color: var(--main-color-black);
}

.label::after {
  content: "";
  width: 0;
  height: 1px;
  position: absolute;
  top: 100%;
  left: 50%;
  transition: all .3s;
}

.label:hover::after {
    left: 0%;
    width: 100%;
    background-color: var(--main-color-black);
}

.article_pic {
  display: block;
  width: 100%;
  position: relative;
  margin: 0.5rem 0 2rem 0;
  transition: all 0.3s;
}

.article_pic img {
  width: 100%;
  background-size: contain;
  vertical-align: bottom;
}

.article_pic:hover::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--main-background-color-black);
}

.article_pic:hover::after {
  content: "阅读更多";
  color: var(--main-color-white);
  font-size: 1.1rem;
  font-weight: 700;
  width: 100%;
  text-align: center;
  vertical-align: middle;
  position: absolute;
  left: 0;
  top: calc(40%);
  z-index: 5;
}

.title_brief {
  display: block;
  width: 100%;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
  font-weight: 500;
  transition: all .2s;
  color: var(--main-color-black);
  text-decoration: none;
}

.title_brief:hover {
  color: var(--main-color-black-tran);
}

.article_description {
  display: inline-block;
  margin-top: 1rem;
  width: 100%;
  font-size: 1rem;
  font-family: "Open Sans", "\5FAE\8F6F\96C5\9ED1";
  font-weight: 100;
}
</style>

<script setup>
import articleList from '@/JS/data'
import { useRouter } from "vue-router";
const router = useRouter()

var al_odd = [];
var al_even = [];
for(let i=articleList.articleDatabase.length-1;i>=0;i--){
  if(i%2!=0){
    al_odd.push(articleList.articleDatabase[i]);
  }else{
    al_even.push(articleList.articleDatabase[i]);
  }
}

const getImg = (img) =>{
  return require(`../IMG/${img}`)
}

const getArticleRouter = (id) => {
  router.push({
    path : '/article' + id,
  }),
  router.afterEach(() => {
  let bodySrcollTop = document.body.scrollTop
  if (bodySrcollTop !== 0) {
    document.body.scrollTop = 0
    return
  }
  let docSrcollTop = document.documentElement.scrollTop
  if (docSrcollTop !== 0) {
    document.documentElement.scrollTop = 0
  }
})
}
</script>