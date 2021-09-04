<template>
  <div class="container">
    <h1>Detail City Weather Page</h1>
    <!-- {{context.params.city}} -->
    {{ cityList }}
    <button @click="handleClick">Click ME</button>
  </div>
</template>

<script>
export default {
  async asyncData(context ) {
      const { latitude, longitude} = context.route.query;
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
  methods: {
    handleClick() {
    },
  },
};
</script>