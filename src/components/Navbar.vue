<template>
  <div>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand href="#">Goodreads</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template v-slot:button-content>
            <span>User</span>
          </template>
          <b-dropdown-item href="#" @click="doLogout">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>

<script>
import { removeCookies } from '@/helpers';
import router from '../router';

export default {
  name: 'Navbar',
  methods: {
    doLogout() {
      removeCookies('token');
      router.push('/');
    },
  },

};
</script>

<style>

</style>
