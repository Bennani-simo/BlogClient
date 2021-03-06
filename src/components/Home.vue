<template>
  <div>
    <p>haha</p>
  </div>
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
</style>
