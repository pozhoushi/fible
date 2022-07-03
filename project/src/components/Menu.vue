<script setup lang="ts">
import EquilateralTriangle from './EquilateralTriangle.vue'
</script>
<template>
  <div class="menu central">
    <EquilateralTriangle />
  </div>
</template>

<style scoped>
.menu {
  cursor: pointer;
  width: 10vw;
  height: 10vw;
  border-radius: 50%;
  box-shadow: 0 0 20px #ccc;

  z-index: 100;
  position: fixed;
  right: 6vw;
  bottom: 6vw;
}
</style>