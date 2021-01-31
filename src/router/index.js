import Vue from 'vue';
import VueRouter from 'vue-router';


Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Auth',
    component: () => import('../pages/Auth.vue')
  },
  {
    path: '/table',
    name: 'Table',
    component: () => import('../pages/Table.vue')
  },
];

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router;
