<template>
  <button class="location-button" @click="$emit('btnClickHandler', $event)">
    <span class="ml-2">{{ ctaName }}</span>
  </button>
</template>

<script>
export default {
    props:{
    ctaName: { type: String, required: true },
    }
}
</script>

<style lang="postcss" scoped>
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
</style>