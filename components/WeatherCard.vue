<template>
  <div class="weather-card">
    <div class="container shadow-2xl">
      <div class="weather-side hidden md:block">
        <div class="weather-gradient"></div>
        <div class="date-container flex flex-col">
          <span class="date-dayname text-5xl font-semibold pt-2">{{
            getTodayDay
          }}</span>
          <span class="date-day pt-2">{{ epochToDDMMMYYYY(data.dt) }}</span>
          <div class="location-row flex flex-row w-full pt-2">
            <svg
              viewBox="0 0 24 24"
              width="24"
              height="24"
              stroke="currentColor"
              stroke-width="2"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="inline-block"
            >
              <polygon
                points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"
              ></polygon>
              <line x1="8" y1="2" x2="8" y2="18"></line>
              <line x1="16" y1="6" x2="16" y2="22"></line>
            </svg>
            <span class="location inline-block ml-2">{{ location }}</span>
          </div>
        </div>
        <div class="weather-container">
          <SunnyIcon v-if="['Clear'].includes(data.weather[0].main)"/>
          <CloudyIcon v-if="['Clouds', 'Haze'].includes(data.weather[0].main)"/>
          <RainingIcon v-if="['Thunderstorm','Rain'].includes(data.weather[0].main)"/>
          <h1 class="weather-temp">{{ celsiusToFahrenheit }} °C</h1>
          <h3 class="weather-desc">{{ data.weather && data.weather[0].main }}</h3>
        </div>
      </div>
      <div class="info-side">
        <div class="mobile-info md:hidden bg-gray-700 text-white flex flex-col">
          <span class="date-dayname text-xl font-semibold pt-2">{{
            getTodayDay
          }}</span>
          <span class="date-day pt-2">{{ epochToDDMMMYYYY(data.dt) }}</span>
          <div class="location-row flex flex-row w-full pt-2">
            <svg
              viewBox="0 0 24 24"
              width="24"
              height="24"
              stroke="currentColor"
              stroke-width="2"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="inline-block"
            >
              <polygon
                points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"
              ></polygon>
              <line x1="8" y1="2" x2="8" y2="18"></line>
              <line x1="16" y1="6" x2="16" y2="22"></line>
            </svg>
            <span class="location inline-block ml-2">{{ location }}</span>
          </div>
          <div class="">
            <h1 class="mt-4 font-bold text-xl">{{ celsiusToFahrenheit }} °C</h1>
            <h3 class="weather-desc">{{ data.weather && data.weather[0].main }}</h3>
          </div>
        </div>

        <div class="today-info-container">
          <div class="today-info">
            <div class="precipitation mt-2">
              <span class="title">PRESSURE</span
              ><span class="value">{{ data.main.pressure }} %</span>
              <div class="clear"></div>
            </div>
            <div class="humidity mt-2">
              <span class="title">HUMIDITY</span
              ><span class="value">{{ data.main.humidity }} %</span>
              <div class="clear"></div>
            </div>
            <div class="wind mt-2">
              <span class="title">WIND</span
              ><span class="value">{{ data.wind.speed }} km/h</span>
              <div class="clear"></div>
            </div>
            <div class="sunrise mt-2">
              <span class="title">VISIBILITY</span
              ><span class="value">{{ data.visibility }}</span>
              <div class="clear"></div>
            </div>
            <div class="sea-level mt-2">
              <span class="title">SEA LEVEL</span
              ><span class="value">{{ data.main.sea_level }} ft</span>
              <div class="clear"></div>
            </div>
            <div class="ground-level mt-2">
              <span class="title">GROUND LEVEL</span
              ><span class="value">{{ data.main.grnd_level }} ft</span>
              <div class="clear"></div>
            </div>
          </div>
        </div>
        <div class="week-container" v-if="false">
          <ul class="week-list">
            <li class="active">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-sun day-icon"
              >
                <circle cx="12" cy="12" r="5"></circle>
                <line x1="12" y1="1" x2="12" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="23"></line>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                <line x1="1" y1="12" x2="3" y2="12"></line>
                <line x1="21" y1="12" x2="23" y2="12"></line>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg
              ><span class="day-name">Tue</span
              ><span class="day-temp">29°C</span>
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-cloud day-icon"
              >
                <path
                  d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"
                ></path></svg
              ><span class="day-name">Wed</span
              ><span class="day-temp">21°C</span>
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-cloud-snow day-icon"
              >
                <path
                  d="M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25"
                ></path>
                <line x1="8" y1="16" x2="8.01" y2="16"></line>
                <line x1="8" y1="20" x2="8.01" y2="20"></line>
                <line x1="12" y1="18" x2="12.01" y2="18"></line>
                <line x1="12" y1="22" x2="12.01" y2="22"></line>
                <line x1="16" y1="16" x2="16.01" y2="16"></line>
                <line x1="16" y1="20" x2="16.01" y2="20"></line></svg
              ><span class="day-name">Thu</span
              ><span class="day-temp">08°C</span>
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-cloud-rain day-icon"
              >
                <line x1="16" y1="13" x2="16" y2="21"></line>
                <line x1="8" y1="13" x2="8" y2="21"></line>
                <line x1="12" y1="15" x2="12" y2="23"></line>
                <path
                  d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"
                ></path></svg
              ><span class="day-name">Fry</span
              ><span class="day-temp">19°C</span>
            </li>
            <div class="clear"></div>
          </ul>
        </div>
        <div class="location-container">
          <button class="location-button" @click="$emit('detailBtnHandler', $event)">
            <svg
              viewBox="0 0 24 24"
              width="24"
              height="24"
              stroke="currentColor"
              stroke-width="2"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="inline-block"
            >
              <circle cx="12" cy="12" r="1"></circle>
              <circle cx="19" cy="12" r="1"></circle>
              <circle cx="5" cy="12" r="1"></circle>
            </svg>
            <span class="ml-2">View More</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
export default {
  props: {
    data: { type: Object, required: true },
  },
  computed: {
    location() {
      if (!this.data.sys) {
        return;
      }
      return `${this.data.name}, ${this.data.sys.country}`;
    },
    celsiusToFahrenheit() {
      if (!this.data.main) {
        return;
      }
      return (this.data.main.temp - 273.15).toFixed();
    },
    getTodayDay() {
      const days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
      const d = new Date();
      const dayName = days[d.getDay()];

      return dayName;
    },
  },
  methods: {
    epochToDDMMMYYYY(epochTime) {
      const dateObj = new Date();
      return dateObj.toLocaleDateString("en-MY", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      });
    },
  },
};
</script>
<style lang="postcss" scoped>
.clear {
  clear: both;
}

.container {
  @apply rounded-3xl text-white;
  -webkit-box-shadow: 0 0 70px -10px rgba(0, 0, 0, 0.2);
  box-shadow: 0 0 70px -10px rgba(0, 0, 0, 0.2);
  background-color: #222831;
  height: 400px;

  @media (max-width: 640px) {
    height: 300px;
  }
}

.weather-side {
  @apply relative h-full rounded-3xl float-left bg-black;
  /* background-image: url("https://images.unsplash.com/photo-1559963110-71b394e7494d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80"); */
  width: 300px;
  -webkit-box-shadow: 0 0 20px -10px rgba(0, 0, 0, 0.2);
  box-shadow: 0 0 20px -10px rgba(0, 0, 0, 0.2);
  -webkit-transition: -webkit-transform 300ms ease;
  transition: -webkit-transform 300ms ease;
  -o-transition: transform 300ms ease;
  transition: transform 300ms ease;
  transition: transform 300ms ease, -webkit-transform 300ms ease;
  -webkit-transform: translateZ(0) scale(1.02) perspective(1000px);
  transform: translateZ(0) scale(1.02) perspective(1000px);

  /* @media (min-width: 640px) {
	  @apply hidden;
} */
}

.weather-side:hover {
  -webkit-transform: scale(1.1) perspective(1500px) rotateY(10deg);
  transform: scale(1.1) perspective(1500px) rotateY(10deg);
}

.weather-gradient {
  @apply absolute w-full h-full top-0 left-0 opacity-80 opacity-25 rounded-3xl;
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

.date-container {
  @apply absolute;
  top: 25px;
  left: 25px;
}

.weather-container {
  @apply absolute;
  bottom: 25px;
  left: 25px;
}

.weather-icon.feather {
  @apply w-auto;
  height: 60px;
}

.weather-temp {
  @apply mt-4 font-bold text-6xl;

  /* @media @min-md {
	   @apply text-xl;
  } */
}

.weather-desc {
  @apply m-0 text-lg;
}

.info-side {
  @apply relative float-left h-full pt-6 flex flex-col;
  width: 350px;
}

.today-info {
  padding: 15px;
  margin: 0 25px 25px 25px;
  /* 	box-shadow: 0 0 50px -5px rgba(0, 0, 0, 0.25); */
  border-radius: 10px;
}

.today-info > div:not(:last-child) {
  @aply mb-2;
}

.today-info > div .title {
  @apply float-left font-bold;
}

.today-info > div .value {
  @apply float-right;
}

.week-list {
  list-style-type: none;
  padding: 0;
  margin: 10px 35px;
  -webkit-box-shadow: 0 0 50px -5px rgba(0, 0, 0, 0.25);
  box-shadow: 0 0 50px -5px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  background: #;
}

.week-list > li {
  float: left;
  padding: 15px;
  cursor: pointer;
  -webkit-transition: 200ms ease;
  -o-transition: 200ms ease;
  transition: 200ms ease;
  border-radius: 10px;
}

.week-list > li:hover {
  -webkit-transform: scale(1.1);
  -ms-transform: scale(1.1);
  transform: scale(1.1);
  background: #fff;
  color: #222831;
  -webkit-box-shadow: 0 0 40px -5px rgba(0, 0, 0, 0.2);
  box-shadow: 0 0 40px -5px rgba(0, 0, 0, 0.2);
}

.week-list > li.active {
  background: #fff;
  color: #222831;
  border-radius: 10px;
}

.week-list > li .day-name {
  display: block;
  margin: 10px 0 0 0;
  text-align: center;
}

.week-list > li .day-icon {
  display: block;
  height: 30px;
  width: auto;
  margin: 0 auto;
}

.week-list > li .day-temp {
  display: block;
  text-align: center;
  margin: 10px 0 0 0;
  font-weight: 700;
}

.location-container {
  @apply mt-auto;
  padding: 25px 35px;

  @media (max-width: 640px) {
    @apply mt-4;
  }
}

.location-button {
  @apply outline-none w-full border-none rounded-3xl p-2 text-white font-bold cursor-pointer py-4;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  background-image: linear-gradient(135deg, #72edf2 10%, #5151e5 100%);
  -webkit-box-shadow: 0 0 30px -5px rgba(0, 0, 0, 0.25);
  box-shadow: 0 0 30px -5px rgba(0, 0, 0, 0.25);
  -webkit-transition: -webkit-transform 200ms ease;
  transition: -webkit-transform 200ms ease;
  -o-transition: transform 200ms ease;
  transition: transform 200ms ease;
  transition: transform 200ms ease, -webkit-transform 200ms ease;
}

.location-button:hover {
  -webkit-transform: scale(0.95);
  -ms-transform: scale(0.95);
  transform: scale(0.95);
}

.mobile-info {
  @apply absolute rounded-3xl px-8 py-3;
  top: -180px;
  margin: auto;
  left: 0;
  right: 0;
  width: 320px;
}
</style>