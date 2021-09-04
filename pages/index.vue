<template>
  <div
    class="screen-mode section flex flex-col items-center min-h-screen"
  >
    <div class="dark_overlay flex flex-col md:justify-center items-center sm:justify-start min-h-screen">
      <!-- <Tutorial /> -->
      <!-- <SampleComponent /> -->
      <div class="z-10 mt-10 md:mt-20">
        <CustomDropdown
          :list="constructCityList"
          :value="selectedCity.city"
          @selectHandler="dropdownSelected"
        />
      </div>
      <!-- <transition name="fade"> -->
        <div class="z-0 mt-60 md:mt-32" :key="displayWeather.name">
          <WeatherCard :data="displayWeather" @detailBtnHandler="handleRouteToDetail"/>
        </div>
      <!-- </transition> -->
      <!-- <SampleSwiper/> -->
      <!-- {{cityList}} -->
    </div>
  </div>
</template>



<script>
export default {
  async asyncData(context) {
    var kLCord = {
      lat: "3.1478",
      lon: "101.6953",
    };
    const cityWeather = await context.app.$axios.$get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${kLCord.lat}&lon=${kLCord.lon}&appid=c693e03c327c176701a0473b51524b8d`
    );
    return { cityWeather };
  },
  data() {
    return {
      selectedCity: {},
    };
  },
  mounted() {
    this.$store
      .dispatch("fetchOpenWeatherMapCircleListByLatLon", {
        lat: 3.3,
        lon: 101.94,
      })
      .then(() => {
        console.log("sucess");
      });

    if (this.cityList) {
      this.selectedCity = this.cityList.find(
        (city) => city.city === "Kuala Lumpur"
      );
    }
  },
  computed: {
    cityList() {
      return this.$store.getters.cityList;
    },
    constructCityList() {
      return this.cityList.map((city) => {
        return {
          ...city,
          label: city.city,
          val: city.city,
        };
      });
    },
    openWeatherMapCircleList() {
      return this.$store.getters.openWeatherMapCircleList;
    },
    openWeatherMapCityWeather() {
      return this.$store.getters.openWeatherMapCityWeather;
    },
    displayWeather() {
      if (this.openWeatherMapCityWeather.main) {
        return this.openWeatherMapCityWeather;
      }

      return this.cityWeather;
    },
  },
  methods: {
    dropdownSelected(item) {
      this.selectedCity = item;
      const { latitude, longitude } = item;

      this.$store
        .dispatch("fetchOpenWeatherMapCityWeatherByLatLon", {
          lat: latitude,
          lon: longitude,
        })
        .then(() => {
          console.log("sucess");
        });
    },
      handleRouteToDetail() {
      console.log('handleRouteToDetail');
      const { city, latitude, longitude} = this.selectedCity;
      this.$router.push({
        path: `/weathers/${city}`,
        query: { longitude, latitude },
      });
    },
  },
};
</script>


<style lang="postcss" scoped>
.screen-mode {
background: #232526;  /* fallback for old browsers */
background: -webkit-linear-gradient(to left, #414345, #232526);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to left, #414345, #232526); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  &.rain {
    background-position: center;
    background-size: cover;
    position: relative;
    background-image: url("https://cdn.dribbble.com/users/648922/screenshots/6887377/attachments/1466541/2_sunny_1125_2436_wallpaper.jpg");
  }
  &.sunny {
    background-position: center;
    background-size: cover;
    position: relative;
    background-image: url(https://images.unsplash.com/photo-1587502536575-6dfba0a6e017?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80);
  }
  &.cloudy {
    background-position: center;
    background-size: cover;
    position: relative;
    background-image: url(https://images.unsplash.com/photo-1587502536575-6dfba0a6e017?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80);
  }
}
.dark_overlay {
  /* background-color: rgba(0, 0, 0, 0.65);
  height: 100vh;
  width: 100%; */
}
</style>