<template>
<main id="movies">
  <h1>Movies</h1>
  <input type="text" v-model="search" placeholder="Search">
  <div class="sort">
    <a href="#" class="btn blue" @click="showAll()">All</a>
    <a href="#" class="btn green" @click="showSeen()">Seen</a>
    <a href="#" class="btn red" @click="showUnseen()">Unseen</a>
  </div>
  <div class="wrapper">
    <movie v-for="(item, index) in movies" :key="index" :item="item" :class="item.sedd"/>
  </div>
</main>
</template>

<script>
import movie from '@/components/movie.vue'

export default {
  name: 'movies',
  data() {
    return {
      search: " ",
      all: true,
      seen: false,
      unseen: false
    }
  },
  components: {
    movie
  },
  computed: {
    movies() {
      if(this.all) {
        return this.$store.state.movies;
      } else if (this.seen) {
        return this.$store.state.movies.filter(movie => movie.sedd == "Ja");
      } else if (this.unseen) {
        return this.$store.state.movies.filter(movie => movie.sedd == "Nej");
      }
    }
  },
  methods: {
    showAll() {
      this.all = true;
    },
    showSeen() {
      this.all = false;
      this.seen = true;
    },
    showUnseen() {
      this.all = false;
      this.seen = false;
      this.unseen = true;
    }
  }
}
</script>

<style lang="scss">

@import '../scss/main.scss';

#movies {
  @extend %center;
  flex-direction: column;
  margin: 4rem;
  max-width: 90vw;

  h1 {
    font-family: $header;
    font-size: 4rem;
    margin: 0;
  }

  input {
    width: 40vw;
    padding: .8rem;
    margin: 1rem;
    border-radius: 5px;
    border: none;
    background: WhiteSmoke;
  }

  .sort {
    width: 89vw;
    display: flex;
    justify-content: flex-end;
    margin-bottom: 1rem;

    a {
      box-sizing: border-box;
    }
  }

  .wrapper {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-gap: 1rem;
    max-width: 90vw;
  }

  .Nej {
    border-top: 8px solid Crimson;
  }
  .Ja {
    border-top: 8px solid LimeGreen;
  }

  @media screen and (max-width: 480px) {

    .wrapper {
      margin: 0;
      width: 100vh;
    }

    input {
      margin: .5rem;
    }

    .sort {
      justify-content: center;
      margin: .5rem;
    }

    .wrapper {
      grid-template-columns: repeat(2, 1fr);
    }
  }
}


</style>
