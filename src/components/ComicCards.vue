<template>
  <div :key="comic.id" v-for="comic in comics">
    <ComicCard @delete-comic="$emit('delete-comic', comic.id)" :comic="comic" />
  </div>
</template>

<script>
import ComicCard from "./ComicCard.vue";

export default {
  name: "ComicCards",
  props: {
    comics: Array,
  },
  components: {
    ComicCard,
  },
  emits: ["delete-comic"],
};
</script>
