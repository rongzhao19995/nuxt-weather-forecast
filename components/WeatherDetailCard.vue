<template>
  <div class="weather-detail-card">
    <div class="container flex flex-col md:flex-row p-4 md:p-12">
      <div class="left-section p-4 flex flex-col">
        <p class="text-2xl font-black">Saturday 4 September 2021</p>
        <p class="text-xl font-black pt-4">{{ location }}</p>
        <div class="weather-container mt-16" v-if="selectedDayForecast.weather">
          <SunnyIcon
            v-if="['Clear','Drizzle'].includes(selectedDayForecast.weather[0].main)"
          />
          <CloudyIcon
            v-if="
              ['Clouds', 'Haze'].includes(selectedDayForecast.weather[0].main)
            "
          />
          <RainingIcon
            v-if="
              ['Thunderstorm', 'Rain'].includes(
                selectedDayForecast.weather[0].main
              )
            "
          />
          <h1 class="weather-temp text-xl font-black pt-4">29°C</h1>
          <h3 class="weather-desc text-xl font-black pt-2">Cloudy</h3>
        </div>
      </div>
      <div class="right-section p-4">
        <div class="daily-forecast">
          <p class="text-2xl font-black pl-0 md:pl-6">Daily Forecasts</p>
          <div class="daily-forecast-list flex flex-row mt-4">
            <div
              v-for="(item, idx) in dailyForecastList"
              :key="idx"
              class="daily-forecast-item"
              :class="{ active: selectedDayForecast.dt === item.dt }"
              @click="selectDailyForecast(item)"
            >
              <p>{{ getTodayDay(item.dt) }}</p>
              <div class="image-wrapper">
                <img
                  v-if="
                    ['Clear','Drizzle'].includes(item.weather && item.weather[0].main)
                  "
                  src="~/static/svg/sunny.svg"
                  alt=""
                  width="48"
                />
                <img
                  v-if="
                    ['Clouds', 'Haze'].includes(
                      item.weather && item.weather[0].main
                    )
                  "
                  src="~/static/svg/cloudy.svg"
                  alt=""
                  width="48"
                />
                <img
                  v-if="
                    ['Thunderstorm', 'Rain'].includes(
                      item.weather && item.weather[0].main
                    )
                  "
                  src="~/static/svg/raining.svg"
                  alt=""
                  width="48"
                />
              </div>
              <p>{{ celsiusToFahrenheit(item.main.temp) }}°C</p>
            </div>
          </div>
        </div>
        <div class="hour-forecast">
          <p class="text-2xl font-black pl-0 md:pl-6 mt-6 md:mt-3">
            3 Hour Forecasts
          </p>
          <div class="three-hour-forecast-list flex flex-col md:flex-row mt-4">
            <div
              v-for="(item, idx) in hourlyForecastList"
              :key="idx"
              class="three-hour-forecast-item"
            >
              <p>{{ item.dt_txt.slice(-7) }}</p>
              <div class="image-wrapper">
                <img
                  v-if="
                    ['Clear','Drizzle'].includes(item.weather && item.weather[0].main)
                  "
                  src="~/static/svg/sunny.svg"
                  alt=""
                  width="48"
                />
                <img
                  v-if="
                    ['Clouds', 'Haze'].includes(
                      item.weather && item.weather[0].main
                    )
                  "
                  src="~/static/svg/cloudy.svg"
                  alt=""
                  width="48"
                />
                <img
                  v-if="
                    ['Thunderstorm', 'Rain'].includes(
                      item.weather && item.weather[0].main
                    )
                  "
                  src="~/static/svg/raining.svg"
                  alt=""
                  width="48"
                />
              </div>
              <p>{{ celsiusToFahrenheit(item.main.temp) }}°C</p>
            </div>
          </div>
        </div>
      </div>
      <!-- {{data}} -->
      <!-- {{ dailyForecastList }} -->
      <!-- {{ hourlyForecastList }} -->
    </div>
  </div>
</template>


<script>
export default {
  props: {
    data: { type: Object, required: true },
  },
  data() {
    return {
      selectedDayForecast: "",
    };
  },
  mounted() {
    this.selectedDayForecast = this.dailyForecastList[0];
  },
  computed: {
    location() {
      if (!this.data.city) {
        return;
      }

      return `${this.data.city.name}, ${this.data.city.country}`;
    },
    dailyForecastList() {
      const a = this.data.list.filter(
        (forecast) =>
          forecast.dt_txt.slice(-8) === "12:00:00" &&
          forecast.dt_txt.slice(0, 10) !== this.today
      );
      return a;
    },
    hourlyForecastList() {
      if (!this.data || !this.selectedDayForecast) {
        return;
      }

      const selectedDateItem = this.selectedDayForecast.dt_txt.split(" ")[0];
      let filteredList = this.data.list.filter((item) => {
        const dateItem = item.dt_txt.split(" ")[0];
        if (dateItem === selectedDateItem) {
          return true;
        }
      });

      return filteredList.slice(0, 5);
    },
    todayDate() {
      let today = new Date();
      const dd = String(today.getDate()).padStart(2, "0");
      const mm = String(today.getMonth() + 1).padStart(2, "0");
      const yyyy = today.getFullYear();
      return (today = yyyy + "-" + mm + "-" + dd);
    },
  },
  methods: {
    selectDailyForecast(data) {
      this.selectedDayForecast = data;
    },
    celsiusToFahrenheit(data) {
      if (!data) {
        return;
      }
      return (data - 273.15).toFixed();
    },
    getTodayDay(data) {
      let convertDate = this.convertEpohToMi(data);
      const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

      const d = new Date(convertDate);
      const dayName = days[d.getDay()];

      return dayName;
    },
    convertEpohToMi(utcSeconds) {
      const d = new Date(0); // The 0 there is the key, which sets the date to the epoch
      return d.setUTCSeconds(utcSeconds);
    },
  },
};
</script>

<style lang="postcss" scoped>
.weather-detail-card {
  @apply text-white rounded-3xl;
  /* height:400px;
    width:400px; */
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

    @media (max-width: 640px) {
      @apply  rounded-none;
  }

}

.daily-forecast-list {
  @media (max-width: 640px) {
    width: 300px;
    overflow-x: scroll;
  }
}

.daily-forecast-item,
.three-hour-forecast-item {
  @apply p-6;
}

.daily-forecast-item {
  @apply cursor-pointer transition-all duration-500 ease-in-out rounded-xl;
  &.active {
    @apply rounded-xl bg-gray-50 text-black;
  }

  &:hover:not(.active) {
    @apply rounded-xl text-white;
    background-color: #0f2027;
  }
}

.three-hour-forecast-item {
    @media (max-width: 640px) {
      @apply flex flex-col items-center justify-center;

      &:last-child {
        @apply mb-10;
      }
  }
}

.image-wrapper {
  @apply my-4;
  width: 50px;
  height: 50px;
}
</style>