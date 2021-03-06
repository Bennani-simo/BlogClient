<template>
  <section class="hero is-info">
    <div class="hero-body">
      <p class="title">
        Articles
      </p>
      <router-link style="margin-bottom: 20px; " v-if="isAuthenticated" class="button is-success" :to="{ name: 'AddPost' }">Ajouter un article</router-link>

      <div v-if="posts">
        <div v-for="post in posts" :key="post.id" class="card post">
          <header class="card-header">
            <p class="card-header-title">
              {{post.titre}}
            </p>
          </header>
          <div class="card-content">
            <div class="content">
              {{post.description}}
              <br>
              <br>
              <small>Auteur : {{post.user_id}}</small>
            </div>
          </div>
          <footer class="card-footer">
            <router-link class="card-footer-item" :to="{ name: 'Post',  params: { id: post.id } }">Voir l'article</router-link>
          </footer>
        </div>

        <br><br>
      </div>
      <div v-else>
        <div class="notification is-warning">
          Il n y a aucuns articles
        </div>
      </div>

    </div>
  </section>
</template>

<script>
import {ref} from 'vue'
import axios from "axios";

export default {
  setup() {
    let posts = ref()

    function getPosts(){
      const instance = axios.create({
        baseURL: 'http://localhost:3000/',
        // headers: {'Authorization': "Bearer "+ localStorage.getItem('token')}
      });

      instance.get('/post/allPost')
          .then(response => {
            console.log(response);
            console.log(response.data.posts);
            posts.value = response.data.posts;
          }).catch((error) => {
        return error;
      });
    }

    posts.value = getPosts();

    return {
      posts
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.post {
  margin-bottom: 10px;
}
</style>
