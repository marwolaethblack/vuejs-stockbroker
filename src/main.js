import Vue from 'vue'
import VueRouter from 'vue-router'

import store from './modules';
import router from './router';

import App from './App.vue'

Vue.use(VueRouter);


new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
