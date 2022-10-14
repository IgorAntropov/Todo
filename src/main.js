import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vClickOutside from 'click-outside-vue3';
import 'material-icons/iconfont/material-icons.scss';

createApp(App)
    .use(router)
    .use(store)
    .use(vClickOutside)
    .mount('#app');
