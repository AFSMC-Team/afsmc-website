import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import Function from '../components/Function.vue';
import Player from '../components/Player.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/function',
    name: 'Function',
    component: Function
  },
  {
    path: '/player',
    name: 'Player',
    component: Player
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;