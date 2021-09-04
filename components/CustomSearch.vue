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
        <input
          type="search"
          class="w-full px-4 py-1 text-gray-900 rounded-full focus:outline-none"
          placeholder="search"
          v-model="search"
        />
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
  methods:{
      handleSubmit(){
          this.$emit("searchClicked", this.search);
      }
  }
};
</script>


<style lang="postcss" scoped>
.search-wrapper {
  background-image: linear-gradient(135deg, #72edf2 10%, #5151e5 100%);
}

.search-key-filled {
    background:#232526;
}
input {
    @apply text-white font-bold;
  background: transparent;
}
</style>