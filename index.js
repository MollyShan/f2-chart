'use strict';

import Vue from 'vue';
// import F2 from '@antv/f2';

// Vue.use(F2);

Vue.config.devtools = true;

import App from './component/app.vue';

import router from './router';
import store from './store/index';

const $app = new Vue(Object.assign({ router, store }, App));

window.addEventListener('load', () => {
    $app.$mount('#app');
});

export default { router, store };