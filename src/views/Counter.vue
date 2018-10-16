<template>
  <div class="counter">
    <h1>Sample : Counter</h1>
    <p>{{ count }}</p>
    <button v-on:click="decrement">ー</button>
    <button v-on:click="increment">＋</button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: 'counter',
  computed: {
    ...mapGetters('counter', {
      count: 'count'
    })
  },
  methods: {
    decrement() {
      console.log('マイナス');
      this.$store.dispatch('counter/minusCount');
    },
    increment() {
      console.log('プラス');
      this.$store.dispatch('counter/plusCount');
    }
  }
};
</script>
