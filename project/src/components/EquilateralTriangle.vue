<script setup lang="ts">
const props = withDefaults(
  defineProps<{ rotate?: number }>(),
  { rotate: 0 }
)
const rotate = `${props.rotate}deg`

const triangleSideLength = 2.6

const triangleHalfSideLength = triangleSideLength / 2
const triangleHalfSideLengthWithUnit = `${triangleHalfSideLength}vw`
const equilateralTriangleHeightWithUnit = `${triangleHalfSideLength * Math.sqrt(3)}vw` // 等边三角形高度
</script>
<template>
  <div class="triangle"></div>
</template>

<style scoped>
.triangle {
  height: v-bind(equilateralTriangleHeightWithUnit);
  box-sizing: border-box;
  border-left: v-bind(triangleHalfSideLengthWithUnit) solid transparent;
  border-right: v-bind(triangleHalfSideLengthWithUnit) solid transparent;
  border-bottom: v-bind(equilateralTriangleHeightWithUnit) solid #000;

  transform-origin: center center;
  transform: rotate(v-bind(rotate));
}
</style>