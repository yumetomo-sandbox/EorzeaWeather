<template>
  <div id="app">
    <Header/>
    <transition name="fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';

export default {
  name: 'app',
  components: {
    Header
  }
};
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
  transition: opacity 0.5s;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
