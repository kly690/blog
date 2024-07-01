<template>
  <div class="head-wrapper">
    <div class="head">
      <nav class="nav_tag">
        <div class="nav_index">
          <a href="#"><i class="fa-solid fa-k "></i></a>
          <span class="nav_version">2.0.0</span>
        </div>
        <!-- <div class="nav_blank"></div> -->
        <!-- <div><a href="#" class="nav_a nav_a_active">首页</a></div> -->
        <div><a href="./category_write.html" class="nav_a">随记</a></div>
        <div><a href="./category_game.html" class="nav_a">小说</a></div>
        <div><a href="./category_life.html" class="nav_a">生活</a></div>
        <div><a href="./category_book.html" class="nav_a">像素画</a></div>
        <!-- <div class="nav_middle"><i class="fa-solid fa-arrows-left-right"></i></div> -->
        <!-- <div><a href="./diary.html" class="nav_a"> <i class="fa-solid fa-heart-pulse"></i> 心情日记</a></div> -->
        <!-- <div><a href="tech.html" class="nav_a"> <i class="fa-solid fa-pen"></i> 技术分享</a></div> -->
        <div><a href="" class="nav_a"> <i class="fa-sharp fa-solid fa-magnifying-glass"></i> 搜索</a></div>
        <!-- <div class="nav_blank"></div> -->
      </nav>
    </div>
  </div>
</template>

<style scoped>
.head-wrapper {
  width: 100%;
  height: 20px;
  position: sticky;
  top: 0px;
  padding: 16px 0;
  background-color: var(--title-background-color);
  z-index: 10;
  border-bottom: var(--hr-color) solid 1px;
}

.nav_index a {
  color: var(--main-color-black);
}

.nav_version {
  display: block;
  margin-left: 5px;
  float: right;
  width: 40px;
  height: 20px;
  line-height: 20px;
  font-size: 12px;
  font-weight: 600;
  color: #0958d9;
  background: #e6f4ff;
  border: solid 1px;
  border-color: #91caff;
  border-radius: 3px;
}

.nav_tag {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.nav_tag div {
  text-align: center;
}
.nav_a {
  color: var(--main-color-black);
  font-size: 0.9rem;
  font-weight: 500;
  text-decoration: none;
  position: relative;
}

.nav_a_heart {
  color: var(--diary-heart-color-red);
}

.nav_a::after {
  content: "";
  width: 0;
  height: 2px;
  background-color: var(--underline-color);
  position: absolute;
  top: 100%;
  left: 50%;
  transition: all .3s;
}

.nav_a_heart::after {
  background-color: var(--diary-heart-color-red);
}

.nav_a:hover::after {
  left: 0%;
  width: 100%;
}

.nav_a_active::after {
  left: 0%;
  width: 100%;
}

.nav_middle {
  width: 160px;
}


@media screen and (min-width:1200px) {
  .head{
    width: 1200px;
    margin: 0 auto;
  }
  .nav_blank {
    width: 120px;
  }
}


</style>