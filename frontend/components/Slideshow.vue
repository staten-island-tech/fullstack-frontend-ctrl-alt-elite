<template>
  <div class="swiper">
    <div class="swiper-wrapper">
      <div v-for="i in 6" :key="i" class="swiper-slide" :class="`slide--${i}`">
        <ProjectCard class="slider-content w-full"/>
      </div>
    </div>
    <!-- If pagination is needed -->
    <div class="swiper-pagination"></div>

    <!-- If navigation buttons are needed -->
    <!-- <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div> -->
  </div>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper,FreeMode, Autoplay } from 'swiper'
import 'swiper/swiper-bundle.min.css'

export default {
      mounted() {
    // configure Swiper to use modules. The modules were tested with SwiperJS v6.8.4 with NuxtJS v2.15.7
    // previously it was before export default. Moved here for performance issues. Move back in case of problems.
    // add or remove unused modules
    Swiper.use([ FreeMode, Autoplay])
    
    // init Swiper:
    /* eslint-disable no-unused-vars */
    const swiper = new Swiper('.swiper', {
      // Optional parameters
      // @see https://swiperjs.com/swiper-api#parameters
      direction: 'horizontal',
      freeMode: true,
      slidesPerView: 3,
      spaceBetween: 20,
      // spaceBetween: "30",

      // remove unused modules if needed
      modules: [ FreeMode, Autoplay],
      // Pagination if needed
      // pagination: {
      //   el: '.swiper-pagination',
      //   type: 'bullets',
      //   clickable: true
      // },
    
      autoplay: {
        delay: 3000
      },
     
      // navigation: {
      //   nextEl: '.swiper-button-next',
      //   prevEl: '.swiper-button-prev'
      // }
      
    })
  }
};
</script>

<style scoped>
.swiper {
  height: 20rem;
  overflow: hidden;
  position: relative;
  width: 80vw;
}
.swiper-slide {
  align-items: center;
  display: flex;
  justify-content: center;
}

</style>