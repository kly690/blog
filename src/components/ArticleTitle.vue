<template>
    <div class="title">
        <div class="title_img" :style="background">
            <div class="label">{{ tag }}</div>
            <div class="title_h1">
                {{ title }}
            </div>
            <div class="title_info">
                <a class="title_info_author">{{ author }}</a>
                <span class="title_info_time">{{ date }}</span>
                <span class="title_info_words">{{ word }}</span>
            </div>
            <span class="title_description">
                {{ des }}
            </span>
        </div>
    </div>
</template>

<script setup>
import articleList from '@/JS/data'
import { defineProps } from 'vue';

const props = defineProps({
    articleId : String
});

var tag;
var title;
var author;
var date;
var des;
var word;
var img;

let list = articleList.articleDatabase;
for(let i=0; i<list.length; i++){
    if(list[i].id == props.articleId){
        tag = list[i].tag;
        title = list[i].name;
        author = list[i].author;
        date = list[i].date;
        des = list[i].des;
        word = list[i].word;
        img = list[i].img;
    }
}

const imgUrl = require("../IMG/" + img);
const background = "background-image: url("+ imgUrl + ")";

</script>

<style scoped>
.title {
    /* display: flex;
    justify-content: center; */
    width: 100%;
    height: 500px;
    overflow: hidden;
    /* vertical-align: middle; */
  }
  
  .title_h1 {
    margin-top: 130px;
    margin-bottom: 20px;
    font-size: 4rem;
    font-weight: 600;
    color: var(--main-color-white);
  }
  
.title_img {
    position: relative;
    width: 100%;
    height: 400px;
    padding: 48px 40px;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    z-index: -3;
}

.title_img::before {
  content: '';
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 0.3;
  z-index: -2;
}
  
  .title_img_mask {
    position: absolute;
    left: 0;
    top: 0;
    background-color: rgba(0, 0, 0, 0.3);
    width: 100%;
    height: 100%;
    z-index: -2;
  }
  .title_info {
    font-size: 0.8rem;
    color: var(--main-color-white-tran);
  }
  
  .title_info_author {
    color: var(--main-color-white);
  }
  
  .title_info_author:hover {
    color: var(--main-color-white-tran);
    cursor: pointer;
  }
  
  .title_info::before {
    content: '作者';
    margin-right: 0.5rem;
  }
  
  .title_info_time::before {
    content: '·';
    margin: 0 0.75rem;
  }
  
  .title_info_words {
    color: var(--main-color-white);
  }
  
  .title_info_words::before {
    content: '·';
    margin: 0 0.75rem;
    color: var(--main-color-grey);
  }
  
  .title_info_words::after {
    content: '字';
    margin: 0 0.5rem;
    color: var(--main-color-grey);
  }
  
  .title_description {
    display: inline-block;
    margin: 2.25rem auto;
    font-size: 1.25rem;
    font-family: "Open Sans", "\5FAE\8F6F\96C5\9ED1";
    font-weight: 100;
    color: var(--main-color-white);
  }

.label {
  font-size: 36px;
  /* display: inline-flex; */
  align-items: center;
  text-decoration: none;
  position: relative;
  z-index: 10;
  color: var(--main-color-white);
  font-family: "Smiley-Sans";
}
</style>