<template>
  <div
    class="
      screen-mode
      section
      flex flex-col
      items-center
      min-h-screen
      overflow-x-hidden
    "
  >
    <div
      class="
        dark_overlay
        flex flex-col
        md:flex-row
        justify-center
        items-center
        sm:justify-start
        min-h-screen
      "
    >
      <div v-if="displayResult.length > 0">
        <div class="swiper-container">
          <div v-swiper:mySwiper="options">
            <div class="swiper-wrapper">
              <div
                v-for="(item, idx) in displayResult"
                :key="idx"
                class="swiper-slide flex flex-row"
              >
                <WeatherCard
                  :data="item"
                  @detailBtnHandler="handleRouteToDetail(item)"
                />
              </div>
            </div>
            <!-- <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div> -->
          </div>
        </div>
      </div>
      <div v-if="displayResult.length === 0" class="no-result">
        <h1 class="text-3xl text-white">
          You dont not have add any favourite city on the list
        </h1>
        <nuxt-link to="/search">
          <div class="cta-btn mt-6 mx-auto">ADD NOW</div>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      displayResult: [],
      options: {
        slidesPerView: 1.8,
					breakpoints: {
						768: {
							slidesPerView: 1,
						},
					},
        loop: false,
        spaceBetween: 1,
        centeredSlides: true,
        roundLengths: true,
        slideToClickedSlide: true,
        // navigation: {
        //   nextEl: ".swiper-button-next",
        //   prevEl: ".swiper-button-prev",
        // },
      },
    };
  },
  mounted() {
    this.$store.dispatch("fetchFavouriteList").then(() => {
      console.log("fetchFavouriteList sucess");
    });
  },
  computed: {
    favouriteList() {
      return this.$store.getters.favouriteList;
    },
    fetchList() {
      if (this.favouriteList.length === 0) {
        return [];
      }
      return this.favouriteList.map((list) => {
        return `http://api.openweathermap.org/data/2.5/weather?lat=${list.lat}&lon=${list.lon}&appid=840937906722893d2f73c00b953b1969`;
      });
    },
  },
  methods: {
    callAPI() {
      const PromiseArr = [];
      for (let i = 0; i < this.fetchList.length; i++) {
        var url = this.fetchList[i];
        PromiseArr.push(
          this.$axios
            .get(url)
            .then((result) => new Promise((resolve) => resolve(result.data)))
        );
      }

      Promise.all(PromiseArr).then((res) => {
        console.log(res);
        this.displayResult = res;
      });
    },
    handleRouteToDetail(data) {
      console.log("handleRouteToDetail");
      const { city } = data;
      const { lat, lon } = data.coord;
      this.$router.push({
        path: `/weathers/${city}`,
        query: { longitude: lon, latitude: lat },
      });
    },
  },
  watch: {
    fetchList: {
      // immediate: true,
      handler: "callAPI",
    },
  },
  head() {
    return {
      title: "Dashboard Of Favoruite City | Weather Forecast By LANCE ",
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


<style lang="postcss" scoped>
.swiper-container {
  position: relative;
  width: 90vw;
  height: 300px;
}
.swiper-container > .swiper-slide__content {
  position: absolute;
  top: 0;
}

.swiper-slide {
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 200ms linear;
  transform: scale(0.8);

  &.swiper-slide-active {
    transform: scale(1);
  }
}
.swiper-slide__content {
  height: 300px;
}

.cta-btn {
  @apply relative outline-none w-full border-none rounded-3xl p-2 text-white font-bold cursor-pointer py-4 flex flex-col  items-center;
  width: 200px;
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
</style>