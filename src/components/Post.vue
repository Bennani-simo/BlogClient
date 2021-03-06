<template>
  <section class="hero is-info">
    <div class="hero-body">
      <p v-if="post" class="title">
        Vous consultez l'article id {{post.id}}
      </p>

      <div v-if="post">
        <div class="card post">
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
        </div>
        <br><br>
      </div>


    </div>
  </section>
</template>

<script>
import {watch, ref} from 'vue'
import { useRoute } from 'vue-router'
import axios from "axios";

export default {
  setup() {
    const route = useRoute()

    let post = ref()

    function getPost(id){
      const instance = axios.create({
        baseURL: 'http://localhost:3000/',
        // headers: {'Authorization': "Bearer "+ localStorage.getItem('token')}
      });

      instance.post('/post', {id : id})
          .then(response => {
            console.log(response.data.post);
            post.value = response.data.post;
          }).catch((error) => {
            return error;
          });
    }

    post.value =  getPost(route.params.id);

    watch(
        () => route.params,
        async newParams => {
          post.value = await getPost(newParams.id)
        }
    )

    return {
      post
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
