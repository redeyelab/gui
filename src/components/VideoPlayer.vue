<template>
    <div id="video-player">
        <img width="100%" id="video" class="video mb-4" src="http://10.24.10.10:8887/mjpeg" alt="streaming video" />
        <button v-on:click="play" id="play" type="button" class="btn btn-primary btn-lg btn-block">Play</button>
        <button v-on:click="pause" id="pause" type="button" class="btn btn-secondary btn-lg btn-block">Pause</button>
    </div>
</template>

<script>
 module.exports = {
     props: ['websocket'],
     methods: {
         play: function() {
             var sendmsg = {
                 t: "video",
                 l: 1,
                 v: "play"
             }
             console.log(sendmsg);
             // ws.send(JSON.stringify(sendmsg));
         },
         pause: function() {
             var sendmsg = {
                 t: "video",
                 l: 1,
                 v: "pause"
             }
             console.log(sendmsg);
             // ws.send(JSON.stringify(sendmsg));
         }
     }
 };     
</script>

<style>
 #video {
     border: 3px solid #333;
 }
</style>
