<template>
  <div class="flex flex-col justify-center items-center min-h-screen">
    <CustomSearch @searchClicked="handleSearchKey" />
    <p class="text-white text-xl">Suggest Searching</p>
    <div class="search-result-container flex flex-row">
        <WeatherSearchCard v-for="(item, idx) in searchResult" :key="idx" :data="item"/>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      searchKeyWord: "",
    };
  },
  computed: {
    searchResult() {
      return this.$store.getters.openWeatherSearchingWeatherList.list;
    },
  },
  methods: {
    handleSearchKey(data) {
      this.searchKeyWord = data;
      console.log(this.searchKeyWord);

      this.$store
        .dispatch("fetchOpenWeatherSearchingWeatherListByName", {
          keyword: this.searchKeyWord,
        })
        .then(() => {
          console.log("sucess");
        });
    },
  },
};
</script>