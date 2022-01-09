<template>
  <h1>ERROR 404</h1>
  <p>{{ $route.params.catchAll }} could not be found!</p>
  <p>Return <router-link to="/">HOME</router-link></p>
</template>
<style scoped>
h1 {
  margin: 60px;
  font-size: 96px;
}
p {
  margin: 20px;
}
</style>
