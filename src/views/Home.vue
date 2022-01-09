<template>
  <div class="container">
    <h1>Najnoviji stripovi</h1>
    <div class="latest">
      <ComicCards :comics="latestComics" />
    </div>
    <div class="btn-container">
      <router-link class="displayButton" to="/display"
        >Pregled Stripova</router-link
      >
    </div>
  </div>
</template>

<script>
import ComicCards from "../components/ComicCards.vue";

export default {
  name: "Home",
  components: {
    ComicCards,
  },
  data() {
    return {
      latestComics: [],
    };
  },
  methods: {
    async fetchComics() {
      const res = await fetch("api/comics");

      const data = await res.json();

      return data;
    },
  },
  async created() {
    this.latestComics = (await this.fetchComics()).slice(-3);
  },
};
</script>

<style scoped>
.container {
  width: 90vw;
  margin: 20px auto;
  padding: 20px;
}
.latest {
  margin-bottom: 20px;
  padding: 20px 60px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 20px;
  row-gap: 20px;
  border-bottom: 1px solid #5a656b;
  /* display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding: 20px 60px;
  border-bottom: 1px solid #5a656b; */
}
.btn-container {
  padding: 10px;
}
.displayButton {
  text-decoration: none;
  padding: 10px;
  background: #47b334;
  color: #fff;
  font-size: 16px;
}
</style>
