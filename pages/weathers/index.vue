<template>
  <div class="container">
    <h1>Weathers Page</h1>
    <div class="data">
      {{ ip }}

      <button @click="onClickGetLocation">get current location</button>
      <button @click="handleGetData">getData</button>
    </div>
  </div>
</template>


.<script>
export default {
    // async asyncData(context, { $axios }) {
    //   console.log(context.$router);
    //   const ip = await $axios.$get(
    //     "http://api.openweathermap.org/data/2.5/weather?q=Chico&units=metric&appid=c693e03c327c176701a0473b51524b8d"
    //   );
    //   return { ip };
    // },
  data() {
    return {
      ip:'',
      options: {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
      },
      crd:'',
    };
  },
  methods: {
    onClickGetLocation() {
      navigator.geolocation.getCurrentPosition(
        this.success,
        this.error,
        this.options
      );
    },
    success(pos) { 
        debugger;
        this.crd = pos.coords;

      console.log("Your current position is:");
      console.log(`Latitude : ${this.crd.latitude}`);
      console.log(`Longitude: ${this.crd.longitude}`);
      console.log(`More or less ${this.crd.accuracy} meters.`);
    },

    error(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    },
    handleGetData(){
        var context = this;
        this.fetchSomething(context);
    },
    async fetchSomething(context) {
        debugger;
      const ip = await context.$axios.$get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${context.crd.latitude}&lon=${context.crd.longitude}&appid=c693e03c327c176701a0473b51524b8d`
      );
      this.ip = ip;
      return { ip };
    },
  },
};
</script>