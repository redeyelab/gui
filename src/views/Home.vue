<template>
    <div class="home">
        <Navbar />
        <img alt="Vue logo" src="../assets/redeye-small.png">
        <HelloWorld msg="RedEye Computer Vision Network"/>
        <VideoPlayer camera="http://10.24.10.10:8887/mjpeg" />
    </div>
</template>

<script>
 // @ is an alias to /src
 import HelloWorld from '@/components/HelloWorld.vue'
 import VideoPlayer from '@/components/VideoPlayer.vue'

 export default {
     name: 'Home',
     components: {
         HelloWorld,
         VideoPlayer
     }
 }
</script>
