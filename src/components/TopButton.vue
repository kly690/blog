<template>
    <div class="top topButton" @click="setTopButton">
        <i class="fa-solid fa-circle-up" @click="setTopButton"></i>
    </div>
</template>

<style scoped>
.topButton {
    position: fixed;
    width: 2rem;
    height: 2rem;
    right: 1rem;
    bottom: 1rem;
    text-align: center;
    font-size: 2rem;
    color: var(--main-background-color-black);
}

.topButton:hover {
    cursor: pointer;
}
</style>

<script setup>
const setTopButton = () =>{
    var topButton = document.getElementsByClassName('top')[0];
    if (topButton != undefined) {
        topButton.onclick = function () {
            var scrollTop = document.body.scrollTop || window.pageYOffset || document.documentElement.scrollTop;
            if (scrollTop != 0) {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth',
                })
            }
        }
    }
}
</script>