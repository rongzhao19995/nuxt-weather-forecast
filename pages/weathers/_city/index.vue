<template>
  <div class="flex justify-center items-center min-h-screen">
    <WeatherDetailCard :data="cityList" />
  </div>
</template>

<script>
export default {
  async asyncData(context) {
    const { latitude, longitude } = context.route.query;
    const cityList = await context.app.$axios.$get(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=c693e03c327c176701a0473b51524b8d`
    );
    return { cityList };
  },
  data() {
    return {
      cityList: {},
    };
  },
  methods: {},
    head() {
    return {
      title: `${this.$route.params.city} | Weather Forecast `,
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