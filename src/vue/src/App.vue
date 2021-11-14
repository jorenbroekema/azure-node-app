<script>
export default {};
</script>

<template>
  <div class="router-links">
    <!-- use the router-link component for navigation. -->
    <!-- specify the link by passing the `to` prop. -->
    <!-- `<router-link>` will render an `<a>` tag with the correct `href` attribute -->
    <router-link to="/">Go to Home</router-link>
    <router-link to="/about">Go to About</router-link>
  </div>
  <img class="vue-img" alt="Vue logo" src="./assets/logo.png" />
  <router-view></router-view>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.router-links {
  display: flex;
  gap: 1rem;
  justify-content: center;
}

.vue-img {
  display: block;
  margin: 0 auto;
}
</style>
