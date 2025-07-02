<template>
  <div class="app">
    <h2>app</h2>
  </div>
</template>

<script setup>
// 组件中使用环境变量
console.log("import.meta.env.MODE=>", import.meta.env.MODE); //production

const isDEV = import.meta.env.DEV;
console.log("isDEV=>>", isDEV);

const envFlag = import.meta.env.VITE_ENV;
console.log("envFlag=>>>", envFlag);
</script>

<style scoped></style>
