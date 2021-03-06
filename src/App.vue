<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="https://bulma.io">
        <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
      </a>
    </div>
    <div id="navbarBlogApp" class="navbar-menu">
      <div class="navbar-start">
        <router-link class="navbar-item" :to="{ name: 'Home' }">Page d'accueil</router-link>
        <router-link class="navbar-item" :to="{ name: 'Home' }">Mes articles</router-link>
      </div>
      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <a class="button is-primary">
              <strong>S'enregistrer</strong>
            </a>
            <router-link class="button is-light" :to="{ name: 'Login' }">Se connecter</router-link>
          </div>
        </div>
      </div>
    </div>
  </nav>
  <router-view />
</template>

<script>

</script>

<style>
@import "https://cdnjs.cloudflare.com/ajax/libs/bulma/0.9.2/css/bulma.min.css";
@import "https://cdnjs.cloudflare.com/ajax/libs/bulma/0.9.2/css/bulma-rtl.css";
</style>
