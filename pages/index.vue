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
  // http://bboxfinder.com/#1.296276,99.942627,6.500899,104.611816
  // Bounding box [lon-left,lat-bottom,lon-right,lat-top,zoom]
  // 1.296276,99.942627,6.500899,104.611816
  // https://lab.lmnixon.org/4th/worldcapitals.html
    async asyncData({ $axios }) {
    const cityList = await $axios.$get(
      // "http://api.openweathermap.org/data/2.5/box/city?bbox=4.127285,102.326660,4.127285,102.326660,1&appid=c693e03c327c176701a0473b51524b8d"
      "http://api.openweathermap.org/data/2.5/find?lat=3.30&lon=101.94&appid=c693e03c327c176701a0473b51524b8d"
    );
    console.log(cityList);
    return { cityList };
  },
  data(){
    return {
      cityList: '',
    }
  }
}
</script>