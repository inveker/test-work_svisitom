<template>
  <form class="form" @submit.prevent="save">
    <legend>{{ legend }}</legend>
    <label>
      <span>{{ placeholder }}:</span>
      <input class="input" type="text" v-model="value">
    </label>
    <input class="submit" type="submit" value="Save">
  </form>
</template>



<script>
export default {
  props: {
    legend: {
      type: String,
      required: true,
    },
    initialValue: {
      type: String,
      required: true
    },
    placeholder: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      value: this.initialValue,
    }
  },
  methods: {
    save() {
      this.$emit('save', this.value)
    }
  }
}
</script>



<style scoped>
  .form {
    margin: 0;
    padding: 20px 30px;
    background-color: #fff;
    border-radius: 5px;
  }

  .form legend {
    margin-bottom: 20px;
  }

  .input {
    margin-bottom: 5px;
  }

  .submit {
    margin-top: 5px;
  }
</style>