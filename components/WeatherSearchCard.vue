<template>
  <div class="weather-search-card-container text-white">
    <div class="left-section">
      <p class="font-white">{{ data.name }}</p>
      <div class="weather-container">
        <SunnyIcon v-if="['Clear'].includes(data.weather[0].main)" size="sm"/>
        <CloudyIcon v-if="['Clouds', 'Haze'].includes(data.weather[0].main)" size="sm"/>
        <RainingIcon
          v-if="['Thunderstorm', 'Rain'].includes(data.weather[0].main)"
          size="sm"
        />
        <h1 class="weather-temp">{{ celsiusToFahrenheit }} °C</h1>
        <h3 class="weather-desc">{{ data.weather && data.weather[0].main }}</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: { type: Object, required: true },
  },
};
</script>

<style lang="postcss" scoped>
.weather-search-card-container {
  background: #0f2027; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #2c5364,
    #203a43,
    #0f2027
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #2c5364,
    #203a43,
    #0f2027
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}

</style>