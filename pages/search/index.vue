<template>
  <div
    class="flex flex-col justify-center items-center min-h-screen py-16 md:py-0"
  >
    <CustomSearch
      @searchClicked="handleSearchKey"
      @locationClicked="handleLocationSearch"
    />
    <div class="search-result-container">
      <p
        v-show="searchResult.length > 0 && !resultNotFound"
        class="text-white text-xl font-bold m-4 mt-8"
      >
        Searching Result
      </p>
      <p
        v-show="resultNotFound"
        class="text-red-700 text-xl font-bold m-4 mt-8"
      >
        Searching Result is not found
      </p>
      <div class="search-result-container flex flex-col md:flex-row">
        <WeatherSearchCard
          v-for="(item, idx) in searchResult"
          :key="idx"
          :data="item"
          @addFavourite="handleAddFavourite"
        />
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      searchKeyWord: "",
      searchResult: [],
      resultNotFound: false,
    };
  },
  mounted() {
    this.$store.dispatch("fetchFavouriteList").then(() => {
      console.log("fetchFavouriteList sucess");
    });

    this.$store.dispatch("setOpenWeatherMapCityWeather", []).then(() => {
      console.log("setOpenWeatherMapCityWeather success ");
    });
  },
  computed: {
    currentCord() {
      return this.$store.getters.currentCord;
    },
    favouriteList() {
      return this.$store.getters.favouriteList;
    },
  },
  methods: {
    handleLocationSearch() {
      const { lat, lon } = this.currentCord;
      this.$store
        .dispatch("fetchOpenWeatherMapCityWeatherByLatLon", { lat, lon })
        .then((data) => {
          console.log("fetchOpenWeatherMapCityWeatherByLatLon sucess", data);
          this.searchResult = [];
          this.searchResult.push(data);
          if (this.searchResult.length === 0) {
            this.resultNotFound = true;
          } else {
            this.resultNotFound = false;
          }
        });
    },
    handleSearchKey(data) {
      this.searchKeyWord = data;
      console.log(this.searchKeyWord);

      this.$store
        .dispatch("fetchOpenWeatherSearchingWeatherListByName", {
          keyword: this.searchKeyWord,
        })
        .then((data) => {
          console.log(
            "fetchOpenWeatherSearchingWeatherListByName sucess",
            data
          );

          this.searchResult = data;

          if (this.searchResult.length === 0) {
            this.resultNotFound = true;
          } else {
            this.resultNotFound = false;
          }
        });
    },
    handleAddFavourite(data) {
      if (this.favouriteList.length > 2) {
        alert("You already added 3 Favourite. Reaching Maximum!");
        return;
      }

      console.log("handleAddFavourite", data);
      let formData = {
        name: data.name,
        country: data.sys.country,
        lat: data.coord.lat,
        lon: data.coord.lon,
      };

      this.$store
        .dispatch("addFavouriteCityToFavouriteList", formData)
        .then(() => {
          this.$router.push("/favourites");
        });
    },
  },
  head() {
    return {
      title: "Search Your Favourite City | Weather Forecast By LANCE ",
      meta: [
        {
          hid: "Weather Forecast By LANCE | Home HID SEO Purpose",
          name: "Weather Forecast By LANCE | Home HID SEO Purpose",
          content: "Weather Forecast By LANCE | Home HID SEO Purpose",
        },
      ],
    };
  },
};
</script>