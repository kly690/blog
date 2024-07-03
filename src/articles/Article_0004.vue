<template>
    <div>
        <TopButton/>
        <HeaderWapper/>
        <ArticleTitle :articleId="aid"/>
        <div class="body-wrapper">
        <div class="body">
            <div class="content">
                <p>
                    最近双十一入了xbox series 2手柄，1200分6期免息，但是下单完第二天就发现京东电竞店1100就能买到，属于是亏麻了。
                </p>
                <p>
                    不过到手后真的太香了，虽然是第一次用手柄，没有一个具体的参照系，但我还是可以说，真的很令人满意！
                </p>
                <p>
                    首先是摇杆和按键很舒适，摇杆阻尼感特别好，按到边缘不用很费力，但是能让你感觉到，按键按下去回弹不会让人觉得不舒服，唯一的介意点是我有点不适应手柄按键的键程，经常按轻了然后没反应。
                </p>
                <p>
                    然后手柄持握的部位是用橡胶包裹的，手感很好，对我来说就是有点容易出汗，不过玩着玩着就注意不到这些了，隔一阵子擦一下手到还好。
                </p>
                <p>
                    然后我发现有些游戏用手柄和键鼠完全是两个游戏，到手后立刻试了一下死亡搁浅，我的天这手柄的震动手感，太爽了。不仅有正常的跳跃摔倒震动，连过水流时都有模拟的震感让你觉得就是自己在过河，太惊人了。
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


const aid = "0004";
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