<template>
  <component :is="ViewComponent" />
</template>

<script>
const routes = {
  '/': 'Auth',
}

export default {
  data() {
    return {
      currentRoute: window.location.pathname
    };
  },
  computed: {
    ViewComponent() {
      const matchingView = routes[this.currentRoute]
      console.log('./pages/' + matchingView + '.vue')
      return matchingView
          ? () => import('./pages/' + matchingView + '.vue')
          : () => import('./pages/404.vue')
    }
  }
};
</script>

<style>
  html {
    height: 100%;
  }
  body {
    margin: 0;
    height: 100%;
  }
</style>