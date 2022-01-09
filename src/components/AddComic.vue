<template>
  <form @submit="addComic">
    <div class="form-control">
      <label>Scenarist:</label>
      <input
        type="text"
        v-model="author"
        name="author"
        placeholder="Dodaj scenarista"
      />
    </div>
    <div class="form-control">
      <label>Crtač:</label>
      <input
        type="text"
        v-model="artist"
        name="artist"
        placeholder="Dodaj crtača"
      />
    </div>
    <div class="form-control">
      <label>Junak:</label>
      <input
        type="text"
        v-model="hero"
        name="hero"
        placeholder="Dodaj junaka"
      />
    </div>
    <div class="form-control">
      <label>Broj stripa:</label>
      <input
        type="number"
        v-model="issue"
        name="issue"
        placeholder="Dodaj broj stripa"
      />
    </div>
    <div class="form-control">
      <label>Naslov stripa:</label>
      <input
        type="text"
        v-model="issueName"
        name="issueName"
        placeholder="Dodaj naslov stripa"
      />
    </div>
    <div class="form-control">
      <label>Godina izdavanja:</label>
      <input
        type="number"
        v-model="published"
        name="published"
        placeholder="Dodaj godinu izdavanja"
      />
    </div>
    <div class="form-control">
      <label>Ime priče kojoj pripada strip:</label>
      <input
        type="text"
        v-model="story"
        name="story"
        placeholder="Dodaj ime priče"
      />
    </div>
    <div class="form-control">
      <label>Raspon brojeva priče:</label>
      <input
        type="text"
        v-model="span"
        name="span"
        placeholder="Dodaj početak i kraj priče"
      />
    </div>

    <input type="submit" value="Dodaj strip" class="sbmButton" />
  </form>
</template>

<script>
export default {
  name: "AddComic",
  data() {
    return {
      author: "",
      artist: "",
      hero: "",
      issue: undefined,
      issueName: "",
      published: undefined,
      story: "",
      span: "",
    };
  },
  methods: {
    addComic(event) {
      event.preventDefault();

      if (
        !this.author ||
        !this.artist ||
        !this.hero ||
        !this.issue ||
        !this.issueName ||
        !this.published ||
        !this.story ||
        !this.span
      ) {
        alert("Ispuni sva polja!");
        return;
      }

      const newComic = {
        author: this.author,
        artist: this.artist,
        hero: this.hero,
        issue: this.issue,
        issueName: this.issueName,
        published: this.published,
        story: this.story,
        span: this.span,
      };

      this.$emit("add-comic", newComic);

      this.author = "";
      this.artist = "";
      this.hero = "";
      this.issue = undefined;
      this.issueName = "";
      this.published = undefined;
      this.story = "";
      this.span = "";
    },
  },
};
</script>

<style scoped>
.form-control {
  margin: 10px 0;
}
.form-control label {
  margin-right: 10px;
}
.form-control input {
  font-size: 16px;
}
.sbmButton {
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
</style>
