<!-- <script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue'
</script> -->

<!-- <template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
</template> -->

<script setup lang="ts">
import Menu from './components/Menu.vue'
import Topper from './components/Topper.vue'
</script>

<template>
  <router-view></router-view>
  <Menu />
  <Topper />
</template>


<style>
@import './assets/base.css';
#app{
  width: 100%;
  height: 100%;
}
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
