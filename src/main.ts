import Vue from 'vue';
import moment from 'moment';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';


Vue.filter('formatDate', (value: string) => {
  if (value) {
    return moment(value).format('DD.MM.YYYY HH:mm');
  }
  return '';
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
