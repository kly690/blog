<template>
    <div class="foot-wrapper">
        <footer class="footer">
            <div>2022 - {{ year }}</div>
            <div> | </div>
            <div>联系方式： kly0311040362021@163.com</div>
            <div> | </div>
            <div>B站：热心网友小可 （一个分享美食的UP主）</div>
        </footer>
    </div>
</template>

<style scoped>
.foot-wrapper {
  width: 100%;
  height: 40px;
  background-color: var(--title-background-color);
  z-index: 10;
  border-top: var(--hr-color) solid 0.5px;
}

.footer {
    width: 1200px;
    margin: 0.5rem auto;
    display: flex;
    justify-content: center;
}

.footer div:nth-child(odd){
    font-size: 14px;
    font-weight: 200;
    color: var(--main-color-black);
}

.footer div:nth-child(even){
    font-size: 14px;
    font-weight: 200;
    margin: 0 1rem;
    color: var(--main-color-grey);
}
</style>

<script setup>
const year = (new Date()).getFullYear();
</script>