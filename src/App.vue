<template>
  <div class="position">
    <router-view/>
  </div>
</template>

<style>
  html {
    height: 100%;
  }
  body {
    margin: 0;
    height: 100%;
    background: linear-gradient(to right, #5acafd, #458ef4);
    font-family: sans-serif;
  }
</style>

<style scoped>
  .position {
    display: inline-block;
    position: absolute;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
  }
</style>