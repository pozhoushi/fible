<script setup lang="ts">
import EquilateralTriangle from "./EquilateralTriangle.vue";
import { useBackTop } from "../stores/backTop";
const goTop = () => {
  const service = useBackTop();
  service.goTop();
};
</script>
<template>
  <div class="topper central" @click="goTop">
    <EquilateralTriangle />
  </div>
</template>

<style scoped>
.topper {
  background-color: #fff;
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
