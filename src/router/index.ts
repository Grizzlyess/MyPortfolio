import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ProgramacaoView from '../views/ProgramacaoView.vue';
import DadosView from '../views/DadosView.vue';
import EventosView from '../views/EventosView.vue';

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/programacao', name: 'programacao', component: ProgramacaoView },
  { path: '/dados', name: 'dados', component: DadosView },
  { path: '/eventos', name: 'eventos', component: EventosView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({ el: to.hash, behavior: 'smooth' });
        }, 300);
      });
    }
    return { top: 0 };
  },
});

export default router;