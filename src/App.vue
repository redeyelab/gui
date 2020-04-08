<template>
    <div id="app">
        <nav id="nav" class="bg-light">
            <div class="container">
                <router-link to="/">Home</router-link> | 
                <router-link to="/about">About</router-link>
            </div>
        </nav>

        <div class="container text-center">
            <div class="row text-center">
                <div class="col-2"></div>
                <div class="col">
                    <router-view/>
                </div>                
                <div class="col-2"></div>
            </div>
        </div>
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
