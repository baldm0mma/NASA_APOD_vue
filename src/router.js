import Vue from 'vue';
import Router from 'vue-router';
import Monthly from './components/Monthly.vue';
import Daily from './components/Daily.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Monthly Photos',
      component: Monthly
    },
    {
      path: '/photo/:id',
      name: 'Daily Photo',
      component: Daily
    }
  ]
});
