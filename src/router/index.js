import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/views/Login';
import Home from '@/views/Home';
import AddBook from '@/views/AddBook';
import UpdateBook from '@/views/UpdateBook';
import DeleteBook from '@/views/DeleteBook';

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
      path: '/home',
      name: 'Home',
      component: Home,
      beforeEnter: requireAuth,
    },
    {
      path: '/home/addbook',
      name: 'AddBook',
      component: AddBook,
      beforeEnter: requireAuth,
    },
    {
      path: '/home/edit/:id',
      name: 'UpdateBook',
      component: UpdateBook,
      beforeEnter: requireAuth,
    },
    {
      path: '/home/delete/:id',
      name: 'DeleteBook',
      component: DeleteBook,
      beforeEnter: requireAuth,
    },
  ],
});
