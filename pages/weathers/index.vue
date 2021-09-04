<template>
  <div class="container">
    <h1>Weathers Page</h1>
    <div class="data">
      {{ openWeatherMapCityWeather }}

      <button @click="onClickGetLocation">get current location</button>
      <button @click="handleData">getData</button>
    </div>
  </div>
</template>


.<script>
export default {
  data() {
    return {
      options: {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
      },
    };
  },
  mounted() {},
  computed: {
    currentCord() {
      return this.$store.getters.currentCord;
    },
    openWeatherMapCityWeather() {
      return this.$store.getters.openWeatherMapCityWeather;
    },
  },
  methods: {
    onClickGetLocation() {
      navigator.geolocation.getCurrentPosition(
        this.success,
        this.error,
        this.options
      );
    },
    success(pos) {
      const { latitude, longitude } = pos.coords;
      this.$store.dispatch("setCurrentCord", { lat: latitude, lon: longitude })
        .then(() => {
          console.log("sucess");
        });
    },

    error(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    },
    handleData(event) {
		event.preventDefault();
      if (this._.isEmpty(this.currentCord)) {
		  event.preventDefault();
        return;
      }

      const { lat, lon } = this.currentCord;
      this.$store.dispatch("fetchOpenWeatherMapCityWeatherByLatLon", { lat, lon })
        .then(() => {
          console.log("sucess");
        });
    },
  },
};
</script>