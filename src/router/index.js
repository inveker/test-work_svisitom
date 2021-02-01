import Vue from 'vue';
import VueRouter from 'vue-router';
import store from "../store";



Vue.use(VueRouter);

function ifAuthenticated (to, from, next) {
  if (store.getters['auth/isAuthenticated']) next();
  else next('/');
}

const routes = [
  {
    path: '/',
    name: 'Auth',
    component: () => import('../pages/Auth.vue'),
  },
  {
    path: '/table',
    name: 'Table',
    component: () => import('../pages/Table.vue'),
    beforeEnter: ifAuthenticated
  }
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;
