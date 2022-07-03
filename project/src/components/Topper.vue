<script setup lang="ts">
import EquilateralTriangle from './EquilateralTriangle.vue'
</script>
<template>
  <div class="menu">
    <EquilateralTriangle :rotate="-90" />
  </div>
</template>

<style scoped>
.menu {
  cursor: pointer;
  width: 10vw;
  height: 10vw;
  border-radius: 50%;
  box-shadow: 0 0 20px #ccc;
  display: flex;
  align-items: center;
  justify-content: center;

  z-index: 100;
  position: fixed;
  right: 6vw;
  bottom: 20vw;
}
</style>