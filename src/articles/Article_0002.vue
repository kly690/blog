<template>
    <div>
        <TopButton/>
        <HeaderWapper/>
        <ArticleTitle :articleId="aid"/>
        <div class="body-wrapper">
        <div class="body">
            <div class="content">
                <p>
                    没有出乎意料的情绪，T1又一次在最终决赛的舞台被3比2击败。上一次这个场景是在MSI，我看见宙斯抬起头望着金色的雨，脸上是不甘的笑容。这一次K博士掩面痛哭，见证了Deft登上顶峰。
                </p>
                <ImgComponent url="2-3.jpeg" />
                <p>
                    好像我们已经习惯了这样的剧本：面对弱队有绝对压制力，让粉丝无比激动自信；面对强队前几局有来有回，后两局开始出现大量操作失误和决策失误，第五局选出团战阵容拖到远古龙团，因为没有抢到远古龙而被结束比赛。好像职业生涯十年的Faker依然不能冷静地面对劣势局。这似乎不意外，如果对比赛和胜利已经麻木，一个人很难在竞技的舞台上坚持这么长的时间。
                </p>
                <p>
                    但我觉得很遗憾，遗憾的是结果，遗憾的是近两年每一年都是最有希望的一年，每一年都没有坚持到最后。这让我想起了去年的DK，同样是MSI决赛落败，同样是S赛决赛先领先赛点被反超，showmaker在经历这样的低谷后说出金句：<strong>“失败总是贯穿人生始终”。</strong>
                </p>
                <p>
                    是的，我们好像只能接受失败，只能接受这样的事实，只能接受Faker离自己的第四冠越来越遥远，我们应该继续相信他对于夺冠偏执的信念吗？
                </p>
                <p>
                    回到比赛中，这几年T1赢得游戏的方式过于单一，我们很难看见他们除了防守反击和中期运营拉扯之外的进攻方式，这种游戏方式是一把双刃剑——面对运营弱队可以稳定获得胜利，但是在英雄池落后或者对面出现非常规组合时，我们可以总是发现，T1的获胜异常艰难。Faker或者说T1这支队伍的风格真的有为了夺冠而改变过吗？我们很难从结果倒推。但是如果想要夺冠，没有在赛场亮剑的决心，我觉得是异常艰难的。
                </p>
                <p>
                    这一次失败对于粉丝无疑是沉重的，被我们寄予厚望的T1又一次失败了。对于我来说，比赛结束的那一刻，看见小K痛哭，我真的很难再保持一种我尽力想要维持的平和心态。这样一种忧伤一直萦绕着我，这一天里我一闭上眼睛就会看到那样的画面，耳边会听到管泽元和米勒的惊叹声。我不敢去看B站、贴吧和微信以及任何有信息的软件，我努力摆脱这种悲伤。但我真的做不到。
                </p>
                <p>
                    Deft十年走到决赛舞台，Faker又何尝不是从鸟巢一路走到旧金山。所有人都沉湎在昔日的荣光，我却迫切地希望他们都能走出来，那已经是逝去的王朝了。我期待一个全新的队伍，一个全新的风格；我期待所有人能像对待一个新兴战队一样对待这群01年的小将，我期待他们有自己的新内容。
                </p>
                <p>
                    <strong>从去年的四强走到今年的亚军，Faker来到了26岁。我们还应该相信奇迹吗？</strong>
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
import ImgComponent from '../components/ImgComponent.vue'
const aid = "0002";

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