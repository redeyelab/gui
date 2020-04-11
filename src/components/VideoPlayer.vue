<template>
    <div id="video-player">
        <div class="container-fluid mt-5">

            <div class="row">
                <!-- ====================== ------ Sidebar ------ ========================= -->
                <div class="col-md-4">

                    <!-- ====================  Status  ======================== -->
                    <div class="card mb-4">
                        <div class="card-body">
                            <div class="card-text">
                                <h4 class="p-4 text-center" :class="playerColor">{{ playerStatus }}</h4>
                            </div>
                        </div>
                    </div>

                    <!-- ==================== A/I List ======================== -->
                    <div class="card mb-4">
                        <div class="card-body">
                            <h5 class="card-title">Pipelines</h5>
                            <div class="card-text">
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item" v-for="pipeline in pipelines" :key="pipeline.name">
                                        {{ pipeline.name }}
                                    </li>
                                </ul>

                            </div>
                        </div>
                    </div>

                    <!-- ==================== Thumbnail ======================== -->
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Thumbnail</h5>
                            <img width="100%" class="card-image-top" src="../assets/redeye-thumbnail.png" />
                            <p class="card-text">last Snapshot: {{ lastSnapshot }}</p>
                        </div>
                    </div>

                </div>

                <!-- ==================== Video Player and Buttons ======================== -->
                <div class="col">
                    <img width="100%" id="video" class="video mb-4" src="http://10.24.10.10:8887/mjpeg" alt="streaming video" />
                    <button v-on:click="play" id="play" type="button" class="btn btn-success btn-lg btn-block">Play</button>
                    <button v-on:click="pause" id="pause" type="button" class="btn btn-secondary btn-lg btn-block">Pause</button>
                    <button v-on:click="snap" id="snap" type="button" class="btn btn-info btn-lg btn-block">Snapshot</button>
                </div>

            </div> <!-- row -->

        </div> <!-- container -->
    </div>
</template>

<script>
 export default {
     name: 'RedEye',
     created() {
         // TODO Query the camera to determine its state
         // TODO If a thumbnail does not exist, find one.
         console.log("I have been created!")
     },
     mounted() {
         console.log("I have been mounted!")         
     },
     updated() {
         console.log("I have been updated!")         
     },
     destroyed() {
         console.log("I am being destroyed!")         
     },
     data() {
         return {
             playerStatus: "Playing",
             playerColor: "bg-success",
             lastSnapshot: new Date().toLocaleString(),
             activePipelineId: 1,
             pipelines: [
                 { id: 0, name: 'Raw' },
                 { id: 1, name: 'Face Detect' },
                 { id: 2, name: 'Motion Detect' }
             ]
         }
     },
     computed: {
         playStatus() {
             return this.$store.state.playStatus
         }
     },
     methods: {
         play() {
             var sendmsg = {
                 t: "video",
                 l: 1,
                 v: "play"
             }
             this.playerStatus = "Playing"
             this.playerColor = "bg-success"
             // ws.send(JSON.stringify(sendmsg));
             //store.commit('play')
             console.log(sendmsg)
         },
         pause() {
             var sendmsg = {
                 t: "video",
                 l: 1,
                 v: "pause"
             }
             // ws.send(JSON.stringify(sendmsg));
             //store.commit('pause')
             this.playerColor = "bg-secondary"
             this.playerStatus = "Paused"
             console.log(sendmsg);
         },
         snap() {
             var sendmsg = {
                 t: "video",
                 l: 1,
                 v: "snap"
             }
             // ws.send(JSON.stringify(sendmsg));
             //store.commit('pause')
             console.log(sendmsg);
             this.lastSnapshot = new Date().toLocaleString()
         }
     }
 }
</script>

<style>
 #video {
     border: 3px solid #333;
 }
</style>
