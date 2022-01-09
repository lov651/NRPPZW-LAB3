<template>
  <div class="container">
    <h3>{{ comic.hero }}</h3>
    <p>{{ comic.issueName }}</p>
    <div v-show="startPage" style="margin-top: 10px">
      <span @click="$emit('delete-comic', comic.id)" class="delete"
        >Obriši strip</span
      >
      |
      <router-link
        class="info"
        :to="{ name: 'Comic', params: { id: comic.id } }"
        >Info o stripu</router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "ComicCard",
  props: {
    comic: Object,
  },
  computed: {
    startPage() {
      if (this.$route.path === "/display") {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>

<style scoped>
.container {
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
  padding: 15px;
  border: 2px solid #b3cccc;
}
.container p {
  margin-top: 5px;
  color: #676b66;
}
.delete {
  color: #b32d2d;
  text-decoration: underline;
  text-transform: uppercase;
  cursor: pointer;
}
.info {
  color: #2543b0;
  text-decoration: underline;
  text-transform: uppercase;
  cursor: pointer;
}
</style>
