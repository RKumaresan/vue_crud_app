import { createApp } from 'vue';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import 'vuetify/styles';

import router from './router';

import App from './App.vue';
import store from './store';

const vuetify = createVuetify({
    components,
    directives,
})

const app = createApp(App);

app.use(vuetify);
app.use(router);
app.use(store);
app.mount('#app');
