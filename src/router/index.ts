import Vue from 'vue';
import VueRouter, { Route } from 'vue-router';
import Home from '../views/Home.vue';
import Instructions from '../views/Instructions.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/instructions/:numHoles/:numCusps',
    name: 'instructions',
    component: Instructions,
    props: (route: Route) => ({
      numHoles: route.params.numHoles ? +route.params.numHoles : 90,
      numCusps: route.params.numCusps ? +route.params.numCusps : 1,
    })
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
