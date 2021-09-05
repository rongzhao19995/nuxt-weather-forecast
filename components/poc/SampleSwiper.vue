<template>
  <div class="carousel-wrapper">
    <div v-swiper:mySwiper="options">
      <div class="swiper-wrapper">
        <div v-for="i in 5" :key="i" class="img-wrapper swiper-slide">
          <!-- <img :src="`./${i}-200x100.jpg`" /> -->
          <h1>{{ i }}</h1>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  data() {
    return {
      options: {
        slidesPerView: 3,
        loop: true
      }
    }
  }
}
</script>

<style lang="postcss" scoped>
.carousel-wrapper {
  padding: 40px;
  height: 300px;
  width: 100%;
  .swiper-slide {
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .img-wrapper img {
    margin: auto;
    width: 200px;
    height: 100px;
    background-image: linear-gradient(gray 100%, transparent 0);
  }
}
</style>