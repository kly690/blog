<template>
    <div>
        <TopButton/>
        <HeaderWapper/>
        <ArticleTitle :articleId="aid"/>
        <div class="body-wrapper">
        <div class="body">
            <div id="music"></div>
            <div class="content">
                <p>
                    我最喜欢的阿图尔叔叔在同船员们一起享受完美食盛宴后安静地离开了，我再也无法在浆果林旁看见他高兴地拍肚子，听不见他兴奋地吹奏笛曲，与暴雨共舞。我一时有些想哭，但是却哭不出来，在漫长的旅途中，我接受了每一位船员最终都会进入永恒之门，永远地离开，包括我自己。
                </p>
                <p>
                    这款游戏是我在游研社年度游戏推荐中看见的，可能我天然喜欢这种带着温和的悲痛和悠长的感触的内容，仅仅是简单了解玩法之后，就对这个游戏一见钟情，很快就找到盗版体验了几个小时，然后在steam上补了正版。
                </p>
                <ImgComponent url="3-2.png"/>
                <span>当事人就是非常后悔，因为盗版存档导致前几个成就没有获得</span>
                <p>
                    灵魂摆渡者的玩法真的很简单，核心就是围绕平台跳跃来进行收集材料和提升技能，收集材料可以交换物资，升级船只，在船上可以加工各种材料，包括矿石、木板、纺线等等，还可以种菜种树养鸡养羊养牛，甚至可以用地窖和磨坊。提升技能可以去更多地方，解锁更多内容，以推进剧情任务的进度。
                </p>
                <p>
                    剧情方面，主角黛维丝就像是临终护工一样，在灵魂们临别前完成他们的遗愿，尽量让他们欣喜若狂，在完成所有任务后，会将他们送到永恒之门。
                </p>
                <ImgComponent url="3-3.jpg"/>
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
import ImgComponent from '../components/ImgComponent.vue'

const aid = "0003";
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
  font-size: 1.25rem;
  font-weight: 100;
  line-height: 1.7;
  letter-spacing: 0.05rem;
  text-align: center;
}

.content p {
  text-align: left;
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