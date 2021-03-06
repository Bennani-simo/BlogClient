<template>
  <section class="hero is-primary is-large">
    <div class="hero-body">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-5-tablet is-4-desktop is-3-widescreen">
            <form novalidate @submit.prevent="onSubmit()" class="box">
              <div class="field">
                <label class="label">Email</label>
                <div class="control">
                  <input type="email" v-model="model.email" placeholder="e.g. simoben96@gmail.com" class="input" required>
                </div>
              </div>
              <div class="field">
                <label class="label">Mot de passe</label>
                <div class="control">
                  <input type="password" v-model="model.password" placeholder="*******" class="input" required>
                </div>
              </div>

              <div class="field">
                <input type="submit" class="button is-success" value="Se connecter" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { reactive } from "vue";
import store from '../store'

export default {
  setup() {

    const model = reactive({ email: "", password: ""});

    function onSubmit() {
      store.dispatch("login", model);
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
