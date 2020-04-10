<template>
    <div id="video-player">
        <div class="container-fluid mt-5">
            <div class="row">
                <div class="col-md-4">
                    <div class="card mb-4">
                        <div class="card-body">
                            <h5 class="card-title">Status</h5>
                            <div class="card-text">
                                <p class="bg-success p-4">Status: {{ playStatus }}</p>
                            </div>
                        </div>
                    </div>

                    <div class="card mb-4">
                        <div class="card-body">
                            <h5 class="card-title">Pipelines</h5>
                            <div class="card-text">
                                <ul>
                                    <li v-for="pipeline in pipelines" :key="pipeline.name">
                                        {{ pipeline.name }}
                                    </li>
                                </ul>

                            </div>
                        </div>
                    </div>

                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Thumbnail</h5>

                            <img width="100%" class="card-image-top" src="http://localhost:1313/img/redeye-screen-600.png" />
                        </div>
                    </div>


                </div>

                <div class="col">
                    <img width="100%" id="video" class="video mb-4" src="http://10.24.10.10:8887/mjpeg" alt="streaming video" />
                    <button v-on:click="play" id="play" type="button" class="btn btn-primary btn-lg btn-block">Play</button>
                    <button v-on:click="pause" id="pause" type="button" class="btn btn-secondary btn-lg btn-block">Pause</button>
                </div>

            </div> <!-- row -->

        </div> <!-- container -->
    </div>
</template>

<script>

 export default {
     name: 'RedEye',
     props: {
         playState: String,
         message: String,
         image: String
     },
     data() {
         return {
             playStatus: "Playing",
             pipelines: [
                 { name: 'Raw' },
                 { name: 'Face Detect' },
                 { name: 'Motion Detect' }
             ]
         }
     },
     methods: {
         play() {
             var sendmsg = {
                 t: "video",
                 l: 1,
                 v: "play"
             }
             // ws.send(JSON.stringify(sendmsg));
             console.log(sendmsg);
         },
         pause() {
             var sendmsg = {
                 t: "video",
                 l: 1,
                 v: "pause"
             }
             // ws.send(JSON.stringify(sendmsg));
             console.log(sendmsg);
         }
     },
 }
</script>

<style>
 #video {
     border: 3px solid #333;
 }
</style>
