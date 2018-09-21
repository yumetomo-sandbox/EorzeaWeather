<template>
  <div class="title">
    <h1>Eorzea Weather</h1>
    <p>ET : {{ eorzeaTime }}</p>
  </div>
</template>

<script>
import EorzeaTime from 'eorzea-time';
export default {
  name: "Title",
  data() {
    return{
      eorzeaTime: new EorzeaTime().toString(),
      animattionFrame: null
    }
  },
  methods: {
    loop() {
      this.eorzeaTime = new EorzeaTime().toString();
      this.animattionFrame = requestAnimationFrame(this.loop);
    },
    stop() {
      cancelAnimationFrame(this.animattionFrame);
    }
  },
  created() {
    this.loop();
  },
  destroyed() {
    this.stop();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.title {
  padding: 130px 0;
  background: #444;
  color: #fff;
  h1 {
    margin: 0;
    font-size: 60px;
    font-weight: lighter;
  }
  p {
    font-weight: bold;
    font-size: 50px;
  }
}
</style>
