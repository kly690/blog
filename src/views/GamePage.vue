<template>
    <div>
        <TopButton />
        <HeaderWapper />
        <div class="title-wrapper-category">
        <div class="title-wrapper-body">
            <div class="title_category">
            <span>浏览分类</span>
            <div>游戏</div>
            <span>共 {{ number }} 篇</span>
            </div>
        <div class="title_des title_des_category">
          <div></div>
          <div></div>
          <span>Sidere mens eadem mutato -「繁星纵变，智慧永恒」</span>
        </div>
        </div>
      </div>
    <FooterWapper />
    </div>
</template>

<script setup>
import HeaderWapper from '../components/HeaderWapper.vue'
import FooterWapper from '../components/FooterWapper.vue'
import TopButton from '../components/TopButton.vue'
import articleList from '@/JS/data'

var number = 0;
for(let i=0;i < articleList.articleDatabase.length;i++){
    if(articleList.articleDatabase[i].tag=="游戏"){
        number++;
    }
}
</script>

<style scoped>
.title-wrapper-category {
  box-sizing: border-box;
  width: 100%;
  height: 200px;
  font-family: 'Smiley-Sans';
  color: var(--main-color-white);
  background: #2193b0;
  background: -webkit-linear-gradient(to left, #6dd5ed, #2193b0);
  background: linear-gradient(to left, #6dd5ed, #2193b0);
}

.title-wrapper-body {
    display: flex;
    padding-top: 20px;
    margin: 0 auto;
    width: 900px;
}

.title_category {
  float: left;
  box-sizing: border-box;
}

.title_category div {
  font-size: 5rem;
  font-weight: 500;
  margin: 0.75rem 0 0.5rem;
}

.title_category span:first-child {
  position: relative;
  font-size: 0.8rem;
  font-weight: 200;
}

.title_category span:first-child::after {
  content: '';
  position: absolute;
  background-color: var(--main-color-white);
  height: 1px;
  width: 100%;
  top: 1rem;
  left: 0;
}

.title_category span:last-child {
  font-size: 1rem;
  font-weight: 300;
}

.title_des_category {
    margin: 0 auto;
    width: 40%;
    text-align: center;
  float: right;
  text-align: right;
}
</style>