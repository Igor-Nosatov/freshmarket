require('./bootstrap');
window.Vue = require('vue');

import App from './pages/App.vue';
import router from './routing/router';
import store from './vuex/index';

import priceFormat from './filters/price-format';
import toFix from './filters/toFix';
import truncate from './filters/truncate';
Vue.filter('priceFormat', priceFormat);
Vue.filter('toFix',toFix);
Vue.filter('truncate', truncate);

const app = new Vue({
    el: '#app',
    router:router,
    store:store,
    render: h => h(App),
});
