import { createApp } from 'vue'
import App from './App.vue'
import Router from './router.js';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHistory } from '@fortawesome/free-solid-svg-icons'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import { faBriefcase } from '@fortawesome/free-solid-svg-icons'
import { faGamepad } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import BaseTag from './components/ui/BaseTag.vue';
import BasePost from './components/ui/BasePost.vue';
import BaseProject from './components/ui/BaseProject.vue';

library.add(faHistory);
library.add(faGraduationCap);
library.add(faBriefcase);
library.add(faGamepad);

const app = createApp(App);
app.use(Router);
app.component('font-awesome-icon', FontAwesomeIcon);
app.component('base-tag', BaseTag);
app.component('base-post', BasePost);
app.component('base-project', BaseProject);
app.config.productionTip = false;

app.mount('#app');
