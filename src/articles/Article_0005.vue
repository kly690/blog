<template>
    <div>
        <TopButton/>
        <HeaderWapper/>
        <ArticleTitle :articleId="aid"/>
        <div class="body-wrapper">
        <div class="body">
            <div class="content">
                <p>
                    当我冲过第九圈的时候，一股成就感油然而生。这并不是什么很卓越的成绩，甚至对于大部分不怎么运动的大学生来说都是不值一提的距离，但是对于当下的我，有极大的鼓励作用。
                </p>
                <p>
                    我气喘吁吁地走出田径场，穿过火车头旁的小径，走过篮球场和体育馆，慢慢悠悠地爬上宿舍下的斜坡。我真的很想对着宿舍呐喊，但就这一点点小成就而骄傲，我有些害羞。
                </p>
                <MusicComponent :id="aid"/>
                <span>Deemo没有版权了，只好放Wings of piano了</span>
                <p>
                    一步一步走上去，正好耳机里放着Deemo的最经典的钢琴曲Dream，随着钢琴和节奏，听着富有生活气息的采样，我忽然有一种想要落泪的感动。我突然能理解听音乐而落泪是一种什么样的心情。我的新生活似乎开始了，伴随着这首歌的节奏，也许它是螺旋向上，也许偶尔会有下沉，但是我渐渐摆脱生活的泥沼，或者说，我摆脱了思想上的禁锢。
                </p>
                <p>
                    两天跑一次或者三天跑一次又有什么关系呢，一次跑不到四公里又有什么关系呢。丢掉那些世俗的坐标系，慢下来生活，是为了感受自己的身体，感受自己的思想漂浮在何处。我们深处社会秩序和评价体系之中，于是忘记了自己是谁，忘记了自己能做什么。
                </p>
                <p>
                    我总是给自己加压，我总是害怕，我害怕做错。我一直期盼着一个秩序，因为我的怠惰，我像旧时代的人类，迷信神灵，迷信一个神，供奉他就可以获得风调雨顺的环境，信仰他就可以在神的信条下成为更优秀的人。这个神是社会规则，是学校，是家庭，是身边的每一个人。我忘记了这个世界是没有神的。
                </p>
                <p>
                    明天是否会继续跑下去，我不知道，至少今天跑了。明天会变得更好吗，我不知道，至少今天还不错。
                </p>
            </div>
        </div>
    </div>
        <FooterWapper/>
    </div>
</template>

<script setup>
import HeaderWapper from '../components/HeaderWapper.vue'
import FooterWapper from '../components/FooterWapper.vue'
import TopButton from '../components/TopButton.vue'
import ArticleTitle from '../components/ArticleTitle.vue'

import MusicComponent from '../components/MusicComponent.vue'

const aid = "0005";
</script>

<style scoped>
.body-wrapper {
    width: 100%;
    margin: 0 auto;
}

.body {
    width: 1200px;
    margin: 0 auto;
}

.content {
  margin: 0 auto;
  width: 680px;
  color: var(--main-color-black);
  font-family: "Open Sans", "\5FAE\8F6F\96C5\9ED1";
  font-size: 1rem;
  font-weight: 200;
  line-height: 1.5;
  letter-spacing: 0.05rem;
  text-align: center;
}

.content p {
  text-align: justify;
  text-indent: 2rem;
}

.content img {
  width: 80%;
  margin: 0 auto;
  object-fit: contain;
}

.content span {
  display: block;
  text-align: center;
  font-size: 0.8rem;
  font-weight: 200;
  color: var(--main-color-grey);
}
</style>