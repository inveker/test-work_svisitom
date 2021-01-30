<template>
  <form action="">
    <legend>Login</legend>

    <label-placeholder placeholder="Username" class="placeholder" :active="username.length">
      <input v-model="username" type="text" name="username" required>
    </label-placeholder>

    <label-placeholder placeholder="Password" class="placeholder" :active="password.length">
      <input v-model="password" name="password" type="password" required/>
    </label-placeholder>

    <input type="submit" value="Enter">
  </form>
</template>

<script>
import LabelPlaceholder from "./components/ui/LabelPlaceholder.vue";


export default {
  data() {
    return {
      username: '',
      password: '',
    };
  },
  components: {
    LabelPlaceholder
  },
  methods: {
    a() {
      console.log(this.password)
    }
  }
};
</script>

<style>
  body {
    background: linear-gradient(to right, #5acafd, #458ef4);
  }
</style>

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