<template>
  <form action="">
    <legend>Login</legend>

    <VLabelPlaceholder placeholder="Username" :active="username.length" class="placeholder">
      <input v-model="username" type="text" name="username" required>
    </VLabelPlaceholder>

    <VLabelPlaceholder placeholder="Password" :active="password.length" class="placeholder">
      <input v-model="password" name="password" type="password" required/>
    </VLabelPlaceholder>

    <input type="submit" value="Enter">
  </form>
</template>

<script>
import VLabelPlaceholder from "../components/ui/VLabelPlaceholder.vue";

export default {
  data() {
    return {
      username: '',
      password: '',
    };
  },
  components: {
    VLabelPlaceholder,
  }
}
</script>

<style scoped>
  form {
    background-color: #fff;
    display: inline-block;
    padding: 20px;
    border-radius: 5px;
    margin: 0 auto;
  }
  legend {
    font-size: 21px;
    padding: 0;
    text-align: center;
    margin-bottom: 20px;
  }
  .placeholder {
    display: block;
    margin-bottom: 20px;
  }
  input[type="password"],
  input[type="text"] {
    outline: none;
    border: none;
    border-bottom: 1px solid #000;
    padding: 5px;
  }
</style>