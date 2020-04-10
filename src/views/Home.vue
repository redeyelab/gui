<template>
    <VideoPlayer camera="http://10.24.10.10:8887/mjpeg" />
</template>

<script>
 // @ is an alias to /src
 import VideoPlayer from '@/components/VideoPlayer.vue'

 export default {
     name: 'Home',
     components: {
         VideoPlayer
     }
 }
</script>
