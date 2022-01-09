<template>
  <div class="container">
    <div class="infoSelect">
      <h1>Prikaz stripova</h1>
      <p>Omogućen je prikaz stripova po junaku i po godini.</p>
      <p>
        Za odabir pojedinog stripa, potrebno je kliknuti na karticu prikaza.
      </p>
      <select id="year" @change="setByYear">
        <option value="" selected disabled hidden>Odabir po godini</option>
        <option value="2019">2019</option>
        <option value="2020">2020</option>
        <option value="2021">2021</option>
      </select>
      <select id="hero" @change="setByHero">
        <option value="" selected disabled hidden>Odabir po junaku</option>
        <option value="Zagor">Zagor</option>
        <option value="Tex">Tex</option>
        <option value="Dylan Dog">Dylan Dog</option>
      </select>
      <button @click="getAll">Svi stripovi</button>
    </div>
    <div class="comics">
      <ComicCards @delete-comic="deleteComic" :comics="displayComics" />
    </div>
    <div class="infoSelect">
      <h4>Dodaj strip:</h4>
      <button @click="toggleAddForm" ref="btnToggle">Open form</button>
      <AddComic v-show="showAddComic" @add-comic="addComic" />
    </div>
  </div>
</template>

<script>
import ComicCards from "../components/ComicCards.vue";
import AddComic from "../components/AddComic.vue";

export default {
  name: "Display",
  components: {
    ComicCards,
    AddComic,
  },
  data() {
    return {
      comics: [],
      displayComics: [],
      showAddComic: false,
    };
  },
  methods: {
    async addComic(comic) {
      const res = await fetch("api/comics", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(comic),
      });

      const data = await res.json();

      this.comics = [...this.comics, data];
      this.displayComics = this.comics;
    },
    async fetchComics() {
      const res = await fetch("api/comics");

      const data = await res.json();

      return data;
    },
    async deleteComic(id) {
      if (confirm("Želite li izbrisati strip?")) {
        const res = await fetch(`api/comics/${id}`, {
          method: "DELETE",
        });

        res.status === 200
          ? (this.comics = this.comics.filter((comic) => comic.id !== id))
          : alert("Error kod brisanja stripa");
      }
      this.displayComics = this.comics;
    },
    setByYear(event) {
      this.displayComics = this.comics.filter(
        (comic) => comic.published === parseInt(event.target.value)
      );
    },
    setByHero(event) {
      this.displayComics = this.comics.filter(
        (comic) => comic.hero === event.target.value
      );
    },
    getAll() {
      this.displayComics = this.comics;
    },
    toggleAddForm() {
      this.showAddComic = !this.showAddComic;
      if (this.$refs.btnToggle.innerText == "Open form") {
        this.$refs.btnToggle.innerText = "Close form";
      } else {
        this.$refs.btnToggle.innerText = "Open form";
      }
    },
  },
  async created() {
    this.comics = await this.fetchComics();
    this.displayComics = this.comics;
  },
};
</script>

<style scoped>
.container {
  display: grid;
  grid-template-columns: 1fr 3fr;
  column-gap: 20px;
  width: 90vw;
  margin: 20px auto;
}
.infoSelect {
  margin-bottom: auto;
  padding: 20px;
  border: 2px solid #000;
}
.infoSelect h1 {
  margin-bottom: 20px;
}
.infoSelect select {
  display: block;
  margin: 30px auto;
  padding: 5px 15px 5px 5px;
  font-size: 16px;
  border: 1px solid #ccc;
  height: 34px;
  background: #4085f5;
  border: none;
  border-radius: 8px;
}
.infoSelect select option {
  background-color: #fff;
}
.infoSelect button {
  display: block;
  margin: 30px auto;
  padding: 5px 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  height: 34px;
  background: #4085f5;
  border: none;
  border-radius: 8px;
}
.comics {
  padding: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: 20px;
  row-gap: 20px;
  border: 2px solid #e8eaed;
}
</style>
