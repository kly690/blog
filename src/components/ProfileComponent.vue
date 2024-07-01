<template>
  <div class="title-wrapper-author">
    <div class="title-wrapper-body">

      <div class="title_des">
        <div>休息一小时</div>
        <!-- <div>二休 · 21岁初探世界的新人</div> -->
        <div>「繁星纵变，智慧永恒」</div>
        <div class="title_tel">
          <a href="https://github.com/kly690"><i class="fa-brands fa-github"></i></a>
          <a><i class="fa-brands fa-steam"></i></a>
          <a href="https://space.bilibili.com/38680851"><i class="fa-brands fa-bilibili"></i></a>
        </div>
        <span>图片仅供参考，实物以真人为准</span>
      </div>

      <div class="title_profile">
      </div>

    </div>
  </div>
</template>

<style scoped>
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

.title_tel {
  display: flex;
  width: 50%;
  margin: 12px auto;
  font-size: 1.25rem;
  justify-content: space-around;
}

.title_tel a {
  color: var(--main-color-black);
}

.title_tel a:hover {
  color: var(--main-color-grey);
}

.title_des {
  float: right;
  /* margin-right: 50px; */
}

.title_des div:first-child {
  font-size: 84px;
  height: 100px;
  color: #0958d9;
}

.title_des div:nth-child(even) {
  font-size: 18px;
  font-weight: 300;
  height: 60px;
  /* padding-top: 20px; */
  line-height: 60px;
  text-align: center;
  margin-bottom: 50px;
}

.title_des span {
  display: inline-block;
  width: 100%;
  margin-top: calc(1rem + 2px);
  vertical-align: baseline;
  text-align: center;
  font-size: 12px;
  font-weight: 100;
}
</style>