<template>
    <div>
        <Navbar />
        <div class="container mt-5">
            <div class="row">

                <div class="col-md-3">
                    <HelloWorld msg="RedEye ~ Smart Video"/>
                </div>

                <div class="col">
                    <VideoPlayer camera="http://10.24.10.10:8887/mjpeg" />
                </div>

            </div> <!-- row -->

        </div> <!-- container -->
    </div>
</template>

<script>
 // @ is an alias to /src
 import HelloWorld from '@/components/HelloWorld.vue'
 import VideoPlayer from '@/components/VideoPlayer.vue'
 import Navbar from '@/components/Navbar.vue'

 export default {
     name: 'Home',
     components: {
         Navbar,
         HelloWorld,
         VideoPlayer
     }
 }
</script>
