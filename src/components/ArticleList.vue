<template>
    <div class="body-wrapper">
        <div class="body">
            <div class="show_article">
                <div class="article_col article_col_1">
                    <article class="article_block">
                        <span class="label"> {{ articleList.articleDatabase[0].tag }}</span>
                        <a class="article_pic" href="./5.html">
                        <img src="../IMG/5-1.jpeg"></a>
                        <a class="title_brief" href="./5.html">{{ articleList.articleDatabase[0].name }}</a>
                        <span>{{articleList.articleDatabase[0].date}}</span>
                        <div class="article_description">{{articleList.articleDatabase[0].des}}</div>
                    </article>
                    <article class="article_block"><a href="./2.html" class="category_num"><div class="category_tag_small category_tag_write"></div><span class="label">随笔与小说</span></a><a class="article_pic" href="./2.html"><img src="../IMG/2-1.jpeg"></a><a class="title_brief" href="./2.html">随笔 - 又一次失败</a><span>2022年11月6日</span><div class="article_description">我们还应该继续相信奇迹吗？</div></article>
                </div>
                <div class="article_col article_col_2">
                    <article class="article_block"><a href="./4.html" class="category_num"><div class="category_tag_small category_tag_life"></div><span class="label">生活</span></a><a class="article_pic" href="./4.html"><img src="../IMG/4-1.jpeg"></a><a class="title_brief" href="./4.html">Xbox Series2上手体验</a><span>2022年11月12日</span><div class="article_description">使用游戏手柄的人生第一次！</div></article>
                    <article class="article_block"><a href="./1.html" class="category_num"><div class="category_tag_small category_tag_write"></div><span class="label">随笔与小说</span></a><a class="article_pic" href="./1.html"><img src="../IMG/1.jpg"></a><a class="title_brief" href="./1.html">随笔 - 陌生人的棺材</a><span>2022年3月14日</span><div class="article_description">我对死亡一向有难言说的恐惧。这种让人入眠前面对黑暗无比心慌的感觉源于曾参加过的两场葬礼。</div></article>
                </div>
                <div class="article_col article_col_3">
                    <article class="article_block"><a href="./3.html" class="category_num"><div class="category_tag_small category_tag_game"></div><span class="label">游戏</span></a><a class="article_pic" href="./3.html"><img src="../IMG/3-1.jpeg"></a><a class="title_brief" href="./3.html">在一次旅途中找寻平静与感动</a><span>2022年11月10日</span><div class="article_description">阿图尔叔叔安静地离去，卸下了我对这个游戏最后的防备</div></article>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.body-wrapper {
    width: 100%;
    margin-top: 16px;
}

.body {
  width: 1200px;
  margin: 0 auto;
}

.show_article {
  margin-top: 2rem;
  display: flex;
  width: 100%;
}

.article_col {
  flex: 0 0 33.3%;
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

.article_block span {
  font-size: 0.8rem;
  color: var(--main-color-grey);
}

/* .category_num {
  display: inline-flex;
  align-items: center;
  text-decoration: none;
}

.category_num::before {
  content: '—';
  order: 1;
  color: var(--main-color-grey);
  margin: 0 0.5rem;
}

.category_num:hover>.label::after {
  left: 0;
  width: 100%;
  background-color: var(--main-color-black);
}

.category_num:hover>.label {
  color: var(--main-color-black);
} */

.label {
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  position: relative;
  color: var(--main-background-color-white);
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
// import { ref } from 'vue';
import articleList from '@/JS/data'
console.log(articleList)
// const articleList = articleDatabase;
// const al = articleList;
// const articleList = ref([
//     {
//         "id": 5,
//         "name": "开始跑步之后",
//         "date": "2022年11月23日",
//         "tag": "跑步",
//         "img": "5-1.jpeg",
//         "md": "20221123",
//         "des": "明天是否会继续跑下去，我不知道，至少今天跑了"
//     },
//     {
//         "id": 4,
//         "name": "Xbox Series2上手体验",
//         "date": "2022年11月12日",
//         "tag": "life",
//         "img": "4-1.jpeg",
//         "md": "20221106",
//         "des": "使用游戏手柄的人生第一次！"
//     },
//     {
//         "id": 3,
//         "name": "在一次旅途中找寻平静与感动",
//         "date": "2022年11月10日",
//         "tag": "game",
//         "img": "3-1.jpeg",
//         "md": "20221110",
//         "des": "阿图尔叔叔安静地离去，卸下了我对这个游戏最后的防备"
//     },
//     {
//         "id": 2,
//         "name": "随笔 - 又一次失败",
//         "date": "2022年11月6日",
//         "tag": "write",
//         "img": "2-1.jpeg",
//         "md": "20221106",
//         "des": "我们还应该继续相信奇迹吗？"
//     },
//     {
//         "id": 1,
//         "name": "随笔 - 陌生人的棺材",
//         "date": "2022年3月14日",
//         "tag": "write",
//         "img": "1.jpg",
//         "md": "20221006",
//         "des": "我对死亡一向有难言说的恐惧。这种让人入眠前面对黑暗无比心慌的感觉源于曾参加过的两场葬礼。"
//     }
// ])
</script>