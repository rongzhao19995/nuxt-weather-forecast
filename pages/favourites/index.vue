<template>
  <div class="section">
    <h1 class="text-white">Favourite Page</h1>
    {{ favouriteList }}
  </div>
</template>

<script>
export default {
  mounted() {
    this.$store.dispatch("fetchFavouriteList").then(() => {
      console.log("fetchFavouriteList sucess");
    });
  },
  computed: {
    favouriteList() {
      return this.$store.getters.favouriteList;
    },
  },
};
</script>