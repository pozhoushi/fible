<script setup lang="ts">
import EquilateralTriangle from "./EquilateralTriangle.vue";
const emit = defineEmits(['toggleCatalog'])
</script>
<template>
  <div class="menu central">
    <EquilateralTriangle :rotate="-90" @click="emit('toggleCatalog')" />
  </div>
</template>

<style scoped>
.menu {
  background-color: #fff;
  cursor: pointer;
  width: 10vw;
  height: 10vw;
  border-radius: 50%;
  box-shadow: 0 0 20px #ccc;

  z-index: 100;
  position: fixed;
  right: 6vw;
  bottom: 20vw;
}
</style>
