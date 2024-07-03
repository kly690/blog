<template>
    <div id="aplayer"></div>
</template>
<script setup>
import 'aplayer/dist/APlayer.min.css';
import aplayer from 'aplayer/dist/APlayer.min.js';
import { defineProps, onMounted } from 'vue';


const prop = defineProps({
    id : String 
})

const musicId = [
    {
        id: 3,
        title: '我怕的是',
        author: '派克特（PACT）,于嘉萌',
        url: 'https://music.163.com/song/media/outer/url?id=1372035117.mp3',
        pic: 'http://p1.music.126.net/H15H1GhZLCwfZGxJj-pi5g==/109951164149912612.jpg?param=300x300',
        lrc: '../LRC/PACT.lrc'
    }, {
        id: 5,
        title: 'Dream',
        author: 'Rabpit',
        url: 'https://music.163.com/song/media/outer/url?id=28377225.mp3',
        pic: 'http://p1.music.126.net/nxVZ033DIAM7JNHvT-DRMA==/109951163598059944.jpg?param=300x300',
    }
]
// 
onMounted (()=> {
    if(document.getElementById('aplayer') != null){
        for(let i=0;i<musicId.length;i++){
            if(prop.id == musicId[i].id){
                const ap = new aplayer({
                container: document.getElementById('aplayer'),
                volume: 0.5,
                loop: 'all',
                theme: '#F5F5F5',
                audio: [
                    {
                        title: musicId[i].title,
                        author: musicId[i].author,
                        url: musicId[i].url,
                        pic: musicId[i].pic
                    }
                ]
            })
            ap.pause()
            }
        }
    }
})
</script>
<style scoped>
#aplayer {
    width: 680px;
    margin: 0 auto;
}
</style>