<template>
  <div class="section section flex flex-col justify-center items-center">
    <!-- <Tutorial /> -->
    <!-- <SampleComponent /> -->
    <WeatherCard/>
    <!-- <SampleSwiper/> -->
    <!-- {{cityList}} -->
  </div>
</template>



<script>
export default {
    mounted(){
      this.$store.dispatch("fetchOpenWeatherMapCircleListByLatLon", {lat:3.30, lon:101.94}).then(() => {
        console.log('sucess');
      });
    },
    computed: {
    cityList() {
      return this.$store.getters.cityList;
    },
    openWeatherMapCircleList(){
      return this.$store.getters.openWeatherMapCircleList;
    }
  },

}

</script>