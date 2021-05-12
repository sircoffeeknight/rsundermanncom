import { createRouter, createWebHistory } from 'vue-router';

// Components
import Home from './pages/Home.vue';
import Curriculum from './pages/CurriculumVitae.vue';
import Projects from './pages/Projects.vue';
import Contact from './pages/Contact/Contact.vue';
import ContactRecruiter from './pages/Contact/ContactRecruiter.vue';
import ContactCompany from './pages/Contact/ContactCompany.vue';
import ContactOthers from './pages/Contact/ContactOthers.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/curriculum', component: Curriculum },
    { path: '/projects', component: Projects },
    { path: '/contact', component: Contact, children: [
      { path: '/recruiter', component: ContactRecruiter, name: "Recruiter", meta: {disableScroll: true} },
      { path: '/company', component: ContactCompany, name: "Company", meta: {disableScroll: true} },
      { path: '/others', component: ContactOthers, name: "Other", meta: {disableScroll: true} },
    ] },
  ],
  scrollBehavior (to) {
    if (to.matched.some(m => m.meta.disableScroll)) {
      return;
    } else {
      return {left: 0, top: 0};
    }
  }
});

export default router;
