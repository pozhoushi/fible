<script setup lang="ts">
import { useBackTop } from "../stores/backTop";
import { onMounted, ref } from "vue";
import This from "../components/js/This.vue";
const scroller = ref();
onMounted(() => {
  const service = useBackTop();
  service.setScrollDom(scroller.value);
});
const catalog = [
  "closure",
  "this",
  "call, apply",
  "bind",
  "prototype",
  "promise",
  "async/await",
  "copy",
  "eventLoop",
  "es6",
];
const elementScrollIntoView = (id: number) => {
  document.querySelector(`#js-${id}`)?.scrollIntoView({ behavior: "smooth" });
};
</script>
<template>
  <div class="route-js" ref="scroller">
    <h1>Vanilla JS</h1>
    <ul>
      <li
        v-for="(item, index) of catalog"
        @click="elementScrollIntoView(index)"
      >
        {{ item }}
      </li>
    </ul>

    <div id="js-0">closure</div>

    <div id="js-1"><This /></div>
  </div>
</template>

<style scoped>
.route-js {
  width: 100%;
  height: 100%;
  overflow: hidden;
  overflow-y: auto;
}
</style>
