<template>
  <div @click="click" class="wrapper">
    <div @click.stop class="position">
      <slot/>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    click() {
      this.$emit('close');
    }
  }
}
</script>

<style scoped>
  .wrapper {
    position: fixed;
    z-index: 1000;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 5px;
    background-color: #000a;
  }
  .position {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
</style>