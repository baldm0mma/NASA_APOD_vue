import Vue from 'vue';
import Router from 'vue-router';
import Monthly from './src/components/Monthly.vue';

Vue.user(Router);

export const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Monthly Photos',
      component: Monthly
    }
  ]
});
