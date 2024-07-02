<template>
    <img :src="getImg(prop.url)"/>
    <!-- <div>{{prop.url}}</div> -->
</template>
<script setup>
import { defineProps } from 'vue';

const prop = defineProps({
    url : String
})
const getImg = (img) =>{
  return require(`../IMG/${img}`)
}
</script>
<style scoped>
img {
    margin: 0 auto;
}
</style>