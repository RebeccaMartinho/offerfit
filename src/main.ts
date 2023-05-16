import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import VueApexCharts from 'vue3-apexcharts';

const app = createApp(App).use(router);

app.use(VueApexCharts);
app.mount('#app');
