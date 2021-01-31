<template>
  <div class="wrapper">
    <div class="position">
      <router-view/>
    </div>
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
  .wrapper {
    margin-top: 20px;
    text-align: center;
  }
  .position {
    display: inline-block;
    text-align: left;
  }
</style>