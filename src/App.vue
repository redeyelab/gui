<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<style lang="scss">
 #app {
     font-family: Avenir, Helvetica, Arial, sans-serif;
     -webkit-font-smoothing: antialiased;
     -moz-osx-font-smoothing: grayscale;
 }

 #nav {
     padding: 20px;
     a {
         color: #333;
         
         font-weight: bold;
         &.router-link-exact-active {
         }
     }
 }
</style>
