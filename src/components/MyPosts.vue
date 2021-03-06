<template>
  <section class="hero is-info">
    <div class="hero-body">
      <p class="title">
        Mes articles
      </p>

      <div v-if="posts.length">
        <div v-for="post in posts" :key="post.id" class="card post">
          <header class="card-header">
            <p class="card-header-title">
              {{post.title}}
            </p>
          </header>
          <div class="card-content">
            <div class="content">
              {{post.description}}
              <br>
              <br>
              <small>Auteur : {{post.author}}</small>
            </div>
          </div>
          <footer class="card-footer">
            <a href="#" class="card-footer-item">Modifier</a>
            <a href="#" class="card-footer-item">Supprimer</a>
          </footer>
        </div>
        <br><br>
      </div>
      <div v-else>
        <div class="notification is-warning">
          Vous n'avez créer aucun articles
        </div>
      </div>

    </div>
  </section>
</template>

<script>
import {ref} from 'vue'

export default {
  setup() {

    let posts = ref([
      {
        id: 1,
        title: "Mon article hardcodé 1",
        description: "Mon article hardcodé 1",
        author: "Mohamed bennani"
      },
      {
        id: 2,
        title: "Mon article hardcodé 2",
        description: "Mon article hardcodé 2",
        author: "Mohamed bennani"
      },
    ])

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
