<template>
  <label>
    <span :class="{active}">{{ placeholder }}</span>
    <slot/>
  </label>
</template>

<script>
export default {
  name: "LabelPlaceholder",
  props: {
    placeholder: {
      type: String,
      required: true
    },
    active: {
      type: Number,
      required: true
    }
  }
}
</script>

<style scoped>
  label {
    position: relative;
    padding-top: .7em;
  }
  span {
    position: absolute;
    transition: .2s;
  }
  .active,
  label:focus-within span {
    transform: translateY(-100%);
    font-size: .7em;
  }
</style>