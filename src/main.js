import { createApp } from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPhp } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import BaseTag from './components/ui/BaseTag.vue';

library.add(faPhp);

const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon);
app.component('base-tag', BaseTag);
app.config.productionTip = false;

app.mount('#app');
