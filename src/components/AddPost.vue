<template>
  <section class="hero is-info">
    <div class="hero-body">
      <p class="title">
        Ajouter un article
      </p>
    </div>

    <div class="card" style="padding:15%;">
      <div class="field">
        <label class="label">Titre</label>
        <div class="control">
          <input class="input" v-model="model.title" type="text" placeholder="Titre">
        </div>
      </div>

      <div class="field">
        <label class="label">Contenu</label>
        <div class="control">
          <textarea class="textarea" v-model="model.content" placeholder="Contenu"></textarea>
        </div>
      </div>

      <div class="field is-grouped">
        <div class="control">
          <button v-on:click="onSubmit()" class="button is-link">Ajouter</button>
        </div>
        <div class="control">
          <router-link class="button" :to="{ name: 'Home' }">Retour</router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { reactive } from "vue";
import axios from "axios";
import router from "@/router/routes";

export default {
  setup() {

    const model = reactive({ title: "", content: ""});

    function onSubmit() {
      const instance = axios.create({
        baseURL: 'http://localhost:3000/',
        // headers: {'Authorization': "Basic " + btoa(model.email+":"+model.password)}
      });

      instance.post('/post/addPost', model)
          .then(response => {
            if(response.data.success) {
              router.push("/");
            } else {
              return false;
            }
          }).catch((error) => {
        return error;
      });
    }

    return {
      model,
      onSubmit
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
