import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '@/views/Home'
import Blog from '@/views/Blog'
import About from "@/views/About";
import Portfolio from "@/views/Portfolio";
import Tag from "@/views/Tag";
import Archive from "@/views/Archive";

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'msseo-dev',
    component: Home,
  },
  {
    path: '/blog',
    name: 'blog',
    component: Blog,
  },
  {
    path: '/about',
    name: 'about',
    component: About,
  },
  {
    path: '/portfolio',
    name: 'about',
    component: Portfolio,
  },
  {
    path: '/tag',
    name: 'tag',
    component: Tag,
  },
  {
    path: '/archive',
    name: 'archive',
    component: Archive,
  },
  {
    path: '*',
    redirect: '/'
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior: (to, from, savedPosition) => {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },
  routes,
});

router.afterEach((to, from) => {
  const title = to.name === undefined ? 'msseo-dev' : to.name;
  Vue.nextTick(() => {
    document.title = title;
  });
});

export default router;