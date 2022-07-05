<script setup lang="ts">
import catalog from "../catalog.json";
import EquilateralTriangle from "./EquilateralTriangle.vue";
const emit = defineEmits(["toggleCatalog"]);
const pick = () => emit('toggleCatalog')
</script>
<template>
  <div class="catalog full-screen">
    <ul>
      <li v-for="item of catalog" :key="item.route" @click="pick">
        <router-link :to="`/${item.route}`">{{ item.name }}</router-link>
      </li>
    </ul>
    <div class="btn central">
      <EquilateralTriangle :rotate="90" @click="emit('toggleCatalog')" />
    </div>
  </div>
</template>

<style scoped>
.catalog {
  background: #fff;
  z-index: 1000;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
.btn {
  cursor: pointer;
  width: 10vw;
  height: 10vw;
  border-radius: 50%;
  box-shadow: 0 0 20px #ccc;

  position: absolute;
  right: 6vw;
  bottom: 6vw;
}
</style>
