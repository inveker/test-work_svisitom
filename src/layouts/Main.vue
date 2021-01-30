<template>
  <div class="main-template">
    <slot></slot>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
  .main-template {
    padding: 20px 0;
    height: 100%;
    background: linear-gradient(to right, #5acafd, #458ef4);
    text-align: center;
  }
</style>