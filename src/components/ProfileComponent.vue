<template>
  <div class="title-wrapper-author">
    <div class="title-wrapper-body">
      <div class="title_des">
        <span>在忙碌生活中好好</span>
        <div class="title">休息一小时</div>
        <!-- <div>二休 · 21岁初探世界的新人</div> -->
        <div class="title_sub">
          <div>HI，这里是我的个人博客</div>
          <div>
            我的其他主页：
            <a href="https://space.bilibili.com/38680851" class="i_bili"><i class="fa-brands fa-bilibili"></i> bilibili</a> | 
            <a href="https://github.com/kly690" class="i_git"><i class="fa-brands fa-github"></i> Github</a>
          </div>
        </div>
      </div>
      <div class="title_profile">
      </div>
    </div>
  </div>
</template>

<style scoped>
.i_bili, .i_git{
  text-decoration: none;
}

.i_bili:hover {
  color: var(--diary-heart-color-red);
}

.i_git:hover {
  color: var(--main-color-grey);
}

.title-wrapper-author {
  box-sizing: border-box;
  padding-top: 60px;
  width: 100%;
  height: 420px;
  font-family: 'Smiley-Sans';
  /* font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; */
  color: var(--main-color-black);
  background-color: var(--title-background-color);
}

.title-wrapper-body {
  width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.title_profile {
  width: 260px;
  height: 360px;
  /* border-radius: 50%; */
  background-image: url('../IMG/profile.png');
  background-position: center center;
  background-size: cover;
}

.title_profile::before {
  content: "本人手绘仅供参考，实物以真人为准";
  width: 260px;
  display: block;
  color: var(--main-color-grey);
  font-size: 16px;
  text-align: center;
}

.title_des {
  float: right;
}

.title {
  font-size: 84px;
  height: 100px;
  color: #0958d9;
}

.title_sub {
  font-size: 18px;
  font-weight: 300;
  height: 60px;
  line-height: 60px;
  text-align: center;
  margin-top: 40px;
}

.title_sub div:last-child{
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 12px;
  color: var(--main-color-black);
}

.title_des span {
  display: inline-block;
  width: 100%;
  margin-top: calc(1rem + 2px);
  vertical-align: baseline;
  text-align: center;
  font-size: 18px;
  font-weight: 200;
}
</style>