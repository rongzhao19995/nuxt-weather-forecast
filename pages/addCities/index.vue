<template>
  <div class="container">
    <h1>Add Cities Page</h1>

    <ol v-for="(city, idx) in cityList" :key="idx">
      <button
        @click="
          () => handleRouteToDetail(city.city, city.longitude, city.latitude)
        "
      >
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
  data() {
    return {
      formData: {
        city: "",
        longitude: "",
        latitude: "",
      },
    };
  },
  computed: {
    cityList() {
      return this.$store.getters.cityList;
    }
  },
  methods: {
    onSave() {
      this.$store.dispatch("addCityToCityList", this.formData).then(() => {
        this.$router.push("/");
      });
    },
    onCancel() {
      this.$router.push("/");
    },
    handleRouteToDetail(city, long, lat) {
      this.$router.push({
        path: `/weathers/${city}`,
        query: { longitude: long, latitude: lat },
      });
    },
  },
};
</script>