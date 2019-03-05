<template>
  <div id="app">
    <movies />
  </div>
</template>

<script>

import movies from './views/Movies.vue'

export default {

  name: 'App',
  components: {
    movies
  },
  beforeMount() {
    this.$store.dispatch('getMovies');
  }
}
</script>

<style lang="scss">
@import './scss/main.scss';

:root {
  background: $background-color;
}

#app {
  width: 100vw;
}

</style>
