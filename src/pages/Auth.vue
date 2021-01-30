<template>
  <MainLayout>
    <form action="">
      <legend>Login</legend>

      <LabelPlaceholder placeholder="Username" :active="username.length" class="placeholder">
        <input v-model="username" type="text" name="username" required>
      </LabelPlaceholder>

      <LabelPlaceholder placeholder="Password" :active="password.length" class="placeholder">
        <input v-model="password" name="password" type="password" required/>
      </LabelPlaceholder>

      <input type="submit">
    </form>
  </MainLayout>
</template>

<script>
import LabelPlaceholder from "../components/ui/LabelPlaceholder.vue";
import MainLayout from "../layouts/Main.vue";

export default {
  data() {
    return {
      username: '',
      password: '',
    };
  },
  components: {
    LabelPlaceholder,
    MainLayout
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
    text-align: left;
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