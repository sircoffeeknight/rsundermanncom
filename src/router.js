import { createRouter, createWebHistory } from 'vue-router';

// Components
import Home from './pages/Home.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
  ],
});

export default router;
