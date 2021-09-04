<template>
  <div class="min-h-screen layout-color">
  <!-- <div class="flex flex-col items-center"> -->
    <div class="min-h-screen">
    <!-- <div class="content content flex justify-center items-center min-h-screen"> -->
      <Nuxt />
    </div>
    <HeaderBar />
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="postcss" scoped>
.layout-color {
  background: #232526;  /* fallback for old browsers */
background: -webkit-linear-gradient(to left, #414345, #232526);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to left, #414345, #232526); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
</style>

