import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/views/Login';
import Register from '@/views/Register';
import Home from '@/views/Home';
import AddBook from '@/views/AddBook';
import UpdateBook from '@/views/UpdateBook';
import pageNotfound from '@/views/404page';

import { requireAuth } from '@/helpers';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login,
    },
    {
      path: '/register',
      name: 'Register',
      component: Register,
    },
    {
      path: '/book',
      name: 'Home',
      component: Home,
      beforeEnter: requireAuth,
    },
    {
      path: '/book/add',
      name: 'AddBook',
      component: AddBook,
      beforeEnter: requireAuth,
    },
    {
      path: '/book/edit/:id',
      name: 'UpdateBook',
      component: UpdateBook,
      beforeEnter: requireAuth,
    },
    {
      path: '*',
      name: 'pageNotfound',
      component: pageNotfound,
    },
  ],
});
