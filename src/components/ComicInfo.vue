<template>
  <div class="container">
    <h1 class="title">INFORMACIJE O STRIPU</h1>
    <div class="info">
      <span class="infoTag">Scenarist: </span><span>{{ comic.author }}</span>
    </div>
    <div class="info">
      <span class="infoTag">Crtež: </span><span>{{ comic.artist }}</span>
    </div>
    <div class="info">
      <span class="infoTag">Junak: </span><span>{{ comic.hero }}</span>
    </div>
    <div class="info">
      <span class="infoTag">Broj stripa: </span><span>{{ comic.issue }} </span>
    </div>
    <div class="info">
      <span class="infoTag">Ime stripa:</span><span>{{ comic.issueName }}</span>
    </div>
    <div class="info">
      <span class="infoTag">Datum izdavanja: </span
      ><span>{{ comic.published }}</span>
    </div>
    <div class="info">
      <span class="infoTag">Dio priče(pripada prići):</span
      ><span>{{ comic.story }} </span>
    </div>
    <div class="info">
      <span class="infoTag">Početak i kraj stripa: </span
      ><span>{{ comic.spans }} </span>
    </div>
  </div>
  <router-link class="return" to="/display"
    >Povratak na prikaz stripova</router-link
  >
</template>
<script>
export default {
  name: "ComicInfo",
  props: {
    comic: Object,
  },
};
</script>

<style scoped>
.container {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}
.title {
  margin: 20px 0;
  color: #150791;
}
.info {
  padding: 10px;
  border-bottom: 1px solid #7e78b3;
  display: flex;
  justify-content: space-between;
}
.infoTag {
  color: #000;
}
.return {
  position: absolute;
  left: 50%;
  top: 70%;
  transform: translate(-50%, -50%);
  text-decoration: none;
  text-transform: uppercase;
  color: blue;
}
</style>
