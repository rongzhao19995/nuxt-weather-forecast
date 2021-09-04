<template>
  <div class="container">
    <h1>Add Cities Page</h1>

    <ol v-for="(city, idx) in cityList" :key="idx">
      <button @click="()=> handleRouteToDetail(city.city, city.longitude, city.latitude)">
        {{ city.city }}
        {{ city.state }}
        {{ city.latitude }}
        {{ city.longitude }}
      </button>
    </ol>

    <form @submit.prevent="onSave">
      <AppControlInput v-model="formData.city">City</AppControlInput>
      <AppControlInput v-model="formData.state">States</AppControlInput>
      <AppControlInput v-model="formData.longitude">Longitude</AppControlInput>
      <AppControlInput v-model="formData.latitude">Latitude</AppControlInput>
      <AppButton type="submit">Save</AppButton>
      <AppButton
        type="button"
        style="margin-left: 10px"
        btn-style="cancel"
        @click="onCancel"
        >Cancel</AppButton
      >
    </form>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    const cityList = await $axios.$get(
      "https://weather-forecase-nuxt-default-rtdb.asia-southeast1.firebasedatabase.app/cities.json"
    );

    
    // console.log(cityList);
    return { cityList };
  },
  data() {
    return {
      formData: {
        city: "",
        longitude: "",
        latitude: "",
      },
    };
  },
  methods: {
    onSave() {
      // Save the post
      var context = this;
      this.fetchSomething(context);
      // this.$emit("submit", this.formData);
    },
    async fetchSomething(context) {
      const ip = await context.$axios.$post(
        "https://weather-forecase-nuxt-default-rtdb.asia-southeast1.firebasedatabase.app/cities.json",
        context.formData
      );
      return { ip };
    },
    onCancel() {
      // Navigate back
      this.$router.push("/");
    },
    handleRouteToDetail(city,long,lat){
      // this.$router.push(`/weathers/${city}`);
      this.$router.push({ path: `/weathers/${city}`, query: { longitude: long, latitude: lat }});
    }
  },
};
</script>