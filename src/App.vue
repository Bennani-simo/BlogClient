<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="/">
        <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
      </a>
    </div>
    <div id="navbarBlogApp" class="navbar-menu">
      <div class="navbar-start">
        <router-link class="navbar-item" :to="{ name: 'Home' }">Page d'accueil</router-link>
        <router-link class="navbar-item" :to="{ name: 'MyPosts' }">Mes articles</router-link>
      </div>
      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <router-link v-if="!isAuthenticated" class="button is-light" :to="{ name: 'Login' }">Se connecter</router-link>
              <a v-if="isAuthenticated" v-on:click="logout()" class="button is-danger">
                Se déconnecter
              </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
  <router-view />
</template>

<script>
import {computed, ref} from 'vue'
import store from './store'

export default{
  setup(){
    let isAuthenticated = ref(store.getters.isAuthenticated)
    isAuthenticated = computed(() => store.getters.isAuthenticated);

    function logout() {
      store.dispatch("logout");
    }

    return{
      isAuthenticated,
      logout
    }
  }
}

</script>

<style>
@import "https://cdnjs.cloudflare.com/ajax/libs/bulma/0.9.2/css/bulma.min.css";
@import "https://cdnjs.cloudflare.com/ajax/libs/bulma/0.9.2/css/bulma-rtl.css";
</style>
