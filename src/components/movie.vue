<template>
  <article class="movie">
    <section class="front" @click="turn">
      <h2>{{ item.title }}</h2>
      <img src="" v-bind:src="item.bild" />
    </section>
    <section class="back hidden" @click="turnBack">
      <div class="info">
        <h2>{{ item.title }}</h2>
        <p class="text">{{ item.info }}</p>
        <p class="längd">{{ item.längd }}</p>
        <p class="vem" v-show="item.vem != 0">{{ item.vem }}</p>
        <p class="score" v-show="item.score != 0">Score: {{ item.score }} / 100</p>
      </div>
    </section>
  </article>
</template>

<script>
export default {
  name: 'movie',
  props: ['item'],
  methods: {
    turn() {
      let front = document.getElementsByClassName("front");
      for (var i = 0; i < front.length; i++) {
        front[i].className = "front";
      }
      let back = document.getElementsByClassName("back");
      for (var i = 0; i < back.length; i++) {
        back[i].className = "back hidden";
      }

      front[this.$vnode.key].className = "front hidden";
      back[this.$vnode.key].className = "back";
    },
    turnBack() {
      let front = document.getElementsByClassName("front");
      let back = document.getElementsByClassName("back");

      front[this.$vnode.key].className = "front";
      back[this.$vnode.key].className = "back hidden";
    }
  }
}
</script>

<style lang="scss">

@import '../scss/main.scss';

.movie {

  .hidden {
    display: none;
  }

  .front {
    @extend %center;
    flex-direction: column;

    h2 {
      flex: 1;
      font-family: $header;
      font-size: 1rem;
      margin: 1rem;
    }
    img {
      flex: 3;
      width: 100%;
    }
  }

  .back {
    @extend %center;
    flex-direction: column;

    .info {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 1rem;
      flex: 4;

      h2 {
        flex: 1;
        font-family: $header;
        font-size: 1rem;
        margin: 0;
      }

      p {
        flex: 1;
        padding: .25rem;
        margin: 0;

        &.text {
          margin-top: 1rem;
          align-self: flex-start;
        }
        &.längd {
          font-family: $text;
          font-weight: bold;
        }
        &.vem {
          font-style: italic;
          font-size: .8rem;
        }
        &.score {
          font-family: $text;
          font-weight: bold;
        }
      }
    }
  }

  .front, .back {
    background: WhiteSmoke;
  }
}

</style>
