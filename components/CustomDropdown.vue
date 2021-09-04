<template>
  <div class="location-container relative">
    <button class="location-button" @click.prevent="isExpand = !isExpand">
      <div class="selected-list">
        <span class="ml-2">{{ value }}</span>
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
          :style="{ transform: 'rotate(' + (!isExpand ? 180 : 0) + 'deg)' }"
        >
          <line x1="12" y1="5" x2="12" y2="19"></line>
          <polyline points="19 12 12 19 5 12"></polyline>
        </svg>
      </div>
    </button>
    <transition name="fade" :duration="300">
      <div class="list" v-show="isExpand">
        <div
          v-for="(item, idx) in renderList"
          :key="idx"
          class="list-child"
          @click.prevent="handleClick(item)"
        >
          <p class="flex justify-start pl-4">{{ item.label }}</p>
        </div>
      </div>
    </transition>
  </div>
</template>


<script>
export default {
  props: {
    list: { type: Array, required: true },
    value:{type: String, required: false},
  },
  data() {
    return {
      isExpand: false,
    };
  },
  mounted() {
    // if (!this.selectedValue) {
    //   this.selectedValue = this.list[0];
    // }
  },
  computed: {
    renderList() {
      return this.list;
    },
  },
  methods: {
    handleClick(item) {
      this.isExpand = !this.isExpand;
      this.$emit('selectHandler', item);
    },
  },
};
</script>

<style lang="postcss" scoped>
.location-button {
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

.location-button.is-expand {
  border-radius: 1.5rem 1.5rem 0 0;
}
.selected-list {
  @apply flex flex-row items-center justify-around w-full;
}
.list {
  @apply absolute flex flex-col overflow-y-auto w-full mt-4 rounded-xl cursor-pointer;
  max-height: 150px;
  background-image: linear-gradient(135deg, #72edf2 10%, #5151e5 100%);
  -webkit-box-shadow: 0 0 30px -5px rgba(0, 0, 0, 0.25);
  box-shadow: 0 0 30px -5px rgba(0, 0, 0, 0.25);
}

.list-child {
  @apply text-white font-bold mt-4 transition-all duration-500 ease-in-out;

  &:hover {
    @apply text-gray-700;
  }
}
</style>