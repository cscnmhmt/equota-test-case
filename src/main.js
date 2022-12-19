import Vue from 'vue';
import App from './App.vue';

import './assets/main.css';
import 'vue-virtual-scroller/dist/vue-virtual-scroller.css';

new Vue({
  render: (h) => h(App),
}).$mount('#app');
