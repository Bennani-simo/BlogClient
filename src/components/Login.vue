<template>
  <section class="hero is-primary is-large">
    <div class="hero-body">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-5-tablet is-4-desktop is-3-widescreen">
            <form action="" class="box">
              <div class="field">
                <label class="label">Email</label>
                <div class="control">
                  <input type="email" placeholder="e.g. simoben96@gmail.com" class="input" required>
                </div>
              </div>
              <div class="field">
                <label class="label">Mot de passe</label>
                <div class="control">
                  <input type="password" placeholder="*******" class="input" required>
                </div>
              </div>

              <div class="field">
                <button class="button is-success">
                  Se connecter
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import store from '../store'

export default{
  setup(){
    const data = store.state.name

    return{
      data
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "https://cdnjs.cloudflare.com/ajax/libs/bulma/0.9.2/css/bulma.min.css";
@import "https://cdnjs.cloudflare.com/ajax/libs/bulma/0.9.2/css/bulma-rtl.css";


</style>
