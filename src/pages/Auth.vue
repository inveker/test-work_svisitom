<template>
  <form @submit.prevent="login">
    <legend>Login</legend>

    <VLabelPlaceholder placeholder="Username" :active="username.length" class="placeholder">
      <input v-model="username" type="text" name="username" required>
    </VLabelPlaceholder>

    <VLabelPlaceholder placeholder="Password" :active="password.length" class="placeholder">
      <input v-model="password" name="password" type="password" required/>
    </VLabelPlaceholder>

    <input type="submit" value="Enter">
    <div class="error" v-if="loginError">{{ loginError }}</div>
  </form>
</template>



<script>
export default {
  data() {
    return {
      username: '',
      password: '',
    };
  },
  computed: {
    loginError() {
      return this.$store.getters['auth/error'];
    }
  },
  beforeMount() {
    if(this.$store.getters['auth/isAuthenticated'])
      this.$store.dispatch('auth/logout');
  },
  methods: {
    login() {
      const { username, password } = this
      this.$store.dispatch('auth/request', { username, password }).then(() => {
        this.$router.push('/table')
      })
    }
  },
  components: {
    VLabelPlaceholder: () => import('../components/VLabelPlaceholder.vue')
  }
}
</script>



<style scoped>
  form {
    background-color: #fff;
    display: inline-block;
    padding: 20px 30px;
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

  .error {
    margin-top: 10px;
    color: #f00;
    font-size: .7em;
  }
</style>