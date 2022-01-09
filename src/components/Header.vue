<template>
  <div class="header">
    <router-link class="link" to="/">Stripovi</router-link>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
.header {
  padding: 20px;
  background-color: #2d5986;
  text-align: center;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
}
.link {
  text-decoration: none;
  text-transform: uppercase;
  color: #fff;
  font-size: 32px;
  font-weight: bold;
}
</style>
