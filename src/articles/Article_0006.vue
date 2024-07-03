<template>
    <div>
        <TopButton/>
        <HeaderWapper/>
        <ArticleTitle :articleId="aid"/>
        <div class="body-wrapper">
        <div class="body">
            <div class="content">
                <p>
                    沙滩上脚印延绵，延向随风起伏的浪。
                </p>
                <p>
                    天空消散在海的轻吟中。
                </p>
                <p>
                    化作海洋的一缕水流，
                </p>
                <p>
                    向远处游，向远处游。
                </p>
                <p>
                    <br>
                </p>
                <p>
                    已忘记来时的足迹，来时的沙滩，来时的晴天。
                </p>
                <p>
                    水流的终焉之地，
                </p>
                <p>
                    那里是终点吗？
                </p>
                <p>
                    到达彼岸前，我一直游，游到下一片陆地。
                </p>
                <p>
                    <br>
                </p>
                <p>
                    我见到血色的珊瑚，是无数洋流的尸骨，经万年的沉淀，
                </p>
                <p>
                    这里是终点吗？
                </p>
                <p>
                    拼命向前游，到达彼岸前，海底的沉静仍是我们的睡床。
                </p>
                <p>
                    <br>
                </p>
                <p>
                    每一簇水流永恒地存在，聚成永不停歇的海洋。
                </p>
                <p>
                    万年后，海洋会重回原貌，
                </p>
                <p>
                    到达彼岸前，它的运动仍在延续。
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


const aid = "0006";
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