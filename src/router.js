import { createRouter, createWebHistory } from 'vue-router';

// Components
import Home from './pages/Home.vue';
import Curriculum from './pages/CurriculumVitae.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path:'/curriculum', component: Curriculum },
  ],
});

export default router;
