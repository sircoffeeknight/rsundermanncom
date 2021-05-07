import { createRouter, createWebHistory } from 'vue-router';

// Components
import Home from './pages/Home.vue';
import Curriculum from './pages/CurriculumVitae.vue';
import Projects from './pages/Projects.vue';
import Contact from './pages/Contact.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/curriculum', component: Curriculum },
    { path: '/projects', component: Projects },
    { path: '/contact', component: Contact },
  ],
});

export default router;
