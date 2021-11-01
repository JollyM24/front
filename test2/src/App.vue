<template>
<div id="app">   
        <!-- <div id="logo">
          <img :src="image"/>
        </div> -->
      <router-view/>
  </div>
</template>

<script>
import home from '@/views/home.vue'
import diagrams from '@/views/diagrams.vue'

export default {
  name: 'App',
  props: {
    home,
    diagrams
  }
}
</script>

<style>
html {
    min-height: 100%;
}
body {
    margin: 0;
    background: linear-gradient(0deg, hsl(240, 65%, 73%), #ffffff);
    min-height: 100%;
}

/* #logo{
    position: relative;
    text-align: center;
    margin: 40px auto;
    width:60%;
    text-transform: uppercase;
    
    font-family: Impact;
    font-size: 24px;
    letter-spacing: 0.18em;
    color: #354F67;
} */
</style>