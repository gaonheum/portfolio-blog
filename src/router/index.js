import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '@/views/Home'
import Blog from '@/views/Blog'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/',
    name: 'Blog',
    component: Blog,
  },
  {
    path: '*',
    redirect: '/'
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;