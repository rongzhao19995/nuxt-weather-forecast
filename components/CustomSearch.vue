<template>
  <div
    class="
      search-wrapper
      flex
      items-center
      max-w-md
      mx-auto
      bg-white
      rounded-full
    "
    x-data="{ search: '' }"
  >
    <div class="w-full">
      <form v-on:submit.prevent="handleSubmit">
        <input
          type="search"
          class="w-full px-4 py-1 text-white rounded-full focus:outline-none"
          placeholder="search"
          v-model="search"
        />
      </form>
    </div>
    <div>
      <button
        type="submit"
        class="
          flex
          items-center
          justify-center
          w-12
          h-12
          text-gray-100
          rounded-full
          transform
          hover:rotate-180
        "
        @click="onClickGetLocation"
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
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
          <circle cx="12" cy="10" r="3"></circle>
        </svg>
      </button>
    </div>

    <div>
      <button
        type="submit"
        class="
          flex
          items-center
          justify-center
          w-12
          h-12
          text-gray-100
          rounded-full
        "
        :class="
          search.length > 0
            ? 'search-key-filled'
            : 'bg-gray-500 cursor-not-allowed'
        "
        :disabled="search.length == 0"
        @click="handleSubmit"
      >
        <svg
          class="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          ></path>
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: "",
    };
  },
  computed: {
    currentCord() {
      return this.$store.getters.currentCord;
    },
  },
  methods: {
    handleSubmit() {
      this.$emit("searchClicked", this.search);
    },
    onClickGetLocation() {
      navigator.geolocation.getCurrentPosition(
        this.success,
        this.error,
        this.options
      );
    },
    success(pos) {
      const { latitude, longitude } = pos.coords;
      this.$store
        .dispatch("setCurrentCord", { lat: latitude, lon: longitude })
        .then(() => {
          console.log("sucess");
          this.search = "Use Geolocation";
          this.$emit("locationClicked");
        });
    },

    error(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    },
  },
};
</script>


<style lang="postcss" scoped>
.search-wrapper {
  background-image: linear-gradient(135deg, #72edf2 10%, #5151e5 100%);
}

.search-key-filled {
  background: #232526;
}
input {
  @apply text-white font-bold;
  background: transparent;
}
</style>