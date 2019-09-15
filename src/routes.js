import Vue from 'vue';
import Router from 'vue-router';
import Monthly from './components/Monthly';

Vue.use(Router);

export const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Monthly Photos',
      component: Monthly
    },
    {
      path: '/photo/:id',
      name: 'Daily',
      component: Monthly
    }
  ]
});
