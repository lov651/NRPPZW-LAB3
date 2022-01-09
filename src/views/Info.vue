<template>
  <ComicInfo :comic="comic" />
</template>

<script>
import ComicInfo from "../components/ComicInfo.vue";

export default {
  name: "Info",
  components: {
    ComicInfo,
  },
  data() {
    return {
      comic: {},
    };
  },
  methods: {
    async fetchComic(id) {
      const res = await fetch(`/api/comics/${id}`);

      const data = await res.json();

      return data;
    },
  },
  async created() {
    this.comic = await this.fetchComic(this.$route.params.id);
  },
};
</script>
