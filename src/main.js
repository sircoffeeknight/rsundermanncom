import { createApp } from 'vue'
import App from './App.vue'

import BaseCard from './components/ui/BaseCard.vue';
import BaseSideCard from './components/ui/BaseSideCard.vue';

const app = createApp(App);
app.component('base-card', BaseCard);
app.component('base-side-card', BaseSideCard);

app.mount('#app');
