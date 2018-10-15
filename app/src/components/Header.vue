<template>
  <header>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/counter">Counter</router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
header {
  width: 100%;
  height: 60px;
  background: #37AC70;
  nav {
    color: #fff;
    text-align: left;
    margin: 0 0 0 50px;
    a {
      color: #fff;
      line-height: 60px;
      font-size: 20px;
      margin: 0 20px;
      &.router-link-exact-active {
        text-decoration: none;
        cursor: default;
      }
    }
  }
}
</style>
