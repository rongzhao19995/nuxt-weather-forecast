<template>
  <div
    class="
      weather-search-card-container
      rounded-3xl
      text-white
      flex flex-col
      m-4
      p-4
    "
  >
    <div class="top-section flex">
      <div class="flex flex-col justify-center">
        <h1 class="weather-temp text-xl font-bold">
          {{ celsiusToFahrenheit }} °C
        </h1>
        <h3 class="weather-desc font-bold">
          {{ data.weather && data.weather[0].main }}
        </h3>
      </div>
      <div class="weather-container m-4">
        <SunnyIcon
          v-if="['Clear', 'Drizzle'].includes(data.weather[0].main)"
          size="sm"
        />
        <CloudyIcon
          v-if="['Clouds', 'Haze'].includes(data.weather[0].main)"
          size="sm"
        />
        <RainingIcon
          v-if="['Thunderstorm', 'Rain'].includes(data.weather[0].main)"
          size="sm"
        />
      </div>
    </div>
    <div class="bottom-section flex justify-center">
      <p class="text-3xl font-black font-white">{{ data.name }}</p>
    </div>
    <div
      class="
        add-favourite
        absolute
        -top-2
        -right-2
        bg-black
        p-2
        rounded-xl
        transition-all
        duration-500
        ease-in-out
        cursor-pointer
        hover:bg-gray-300
      "
      @click="$emit('addFavourite', data)"
    >
      <svg
        viewBox="0 0 24 24"
        width="24"
        height="24"
        stroke="currentColor"
        stroke-width="2"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="css-i6dzq1"
      >
        <path
          d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
        ></path>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: { type: Object, required: true },
  },
  computed: {
    celsiusToFahrenheit() {
      if (!this.data.main) {
        return;
      }
      return (this.data.main.temp - 273.15).toFixed();
    },
    favouriteList() {
      this.$store.getters.favouriteList;
    },
  },
};
</script>

<style lang="postcss" scoped>
.weather-search-card-container {
  @apply relative;
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

.add-favourite {
  &:hover {
    & svg {
      fill: red;
      stroke: red;
    }
  }
}
</style>