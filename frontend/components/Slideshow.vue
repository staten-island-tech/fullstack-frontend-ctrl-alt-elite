<template>
  <div>
    <div class="swiper">
      <div class="swiper-button-prev" :class="{ light : !$store.state.darkMode }"></div>
      <div class="swiper-wrapper flex justify-center items-center">
        <div :class="{ lds-dual-ring : $store.state.darkMode, lds-dual-ring-light : !$store.state.darkMode }"></div>
        <div v-for="(project,key) in project" :key="key" class="swiper-slide">
          <ProjectCard class="slider-content" :project="project" :following="following"/>
        </div>z
      </div>
      <!-- If pagination is needed -->
      <div class="swiper-pagination"></div>
      <!-- If navigation buttons are needed -->
      <div class="swiper-button-next" :class="{ light : !$store.state.darkMode }"></div>
    </div>
  </div>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper,FreeMode, Navigation} from 'swiper'
import 'swiper/swiper-bundle.min.css'

export default {
  props: {
    project: Array,
    following: Array
  },
  mounted() {
    // configure Swiper to use modules. The modules were tested with SwiperJS v6.8.4 with NuxtJS v2.15.7
    // previously it was before export default. Moved here for performance issues. Move back in case of problems.
    // add or remove unused modules
    Swiper.use([ FreeMode, Navigation])
    // init Swiper:
    /* eslint-disable no-unused-vars */
    const swiper = new Swiper('.swiper', {
      // Optional parameters
      // @see https://swiperjs.com/swiper-api#parameters
      direction: 'horizontal',
      freeMode: true,
      slidesPerView: 1,
      observer: true,
      observeParents: true,
      // spaceBetween: 10,
      // spaceBetween: "30",
      breakpoints: {
        1500: {
          slidesPerView: 3,
          direction: 'horizontal'
        },

        1050: {
          direction: 'horizontal',
          slidesPerView: 2,
        },
      },
      // remove unused modules if needed
      modules: [ FreeMode, Navigation],
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    })
  }
}
</script>

<style scoped>
.swiper {
  height: 20rem;
  overflow: hidden;
  position: relative;
  width: 70vw;
}

.swiper-wrapper {
  width: 95vw;
}

.swiper-slide {
  align-items: center;
  display: flex;
  justify-content: center;
}

.swiper-button-prev,
.swiper-button-next {
  color: gray;
}

.light {
  color: #3500D3;
}

.lds-dual-ring {
  display: inline-block;
  /* position: absolute; */
  width: 80px;
  height: 80px;
  /* top: 100px;
  left: 650px; */
}
.lds-dual-ring:after {
  content: " ";
  /* position: absolute; */
  display: block;
  width: 64px;
  height: 64px;
  margin: 8px;
  border-radius: 50%;
  border: 6px solid #fff;
  border-color: #fff transparent #fff transparent;
  animation: lds-dual-ring 1.2s linear infinite;
}
@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
/*
.lds-dual-ring-light {
  display: inline-block;
  position: absolute;
  width: 80px;
  height: 80px;
  top: 100px;
  left: 650px;
}
.lds-dual-ring-light:after {
  content: " ";
  position: absolute;
  display: block;
  width: 64px;
  height: 64px;
  margin: 8px;
  border-radius: 50%;
  border: 6px solid #000;
  border-color: #000 transparent #000 transparent;
  animation: lds-dual-ring-light 1.2s linear infinite;
}
@keyframes lds-dual-ring-light {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@media screen and (max-width: 400px) {
    .lds-dual-ring {
        display: inline-block;
        position: absolute;
        width: 50px;
        height: 50px;
        top: 50px;
        left: 100px;
    }
  .lds-dual-ring:after {
        content: " ";
        position: absolute;
        display: block;
        width: 45px;
        height: 45px;
        margin: 8px;
        border-radius: 50%;
        border: 6px solid #fff;
        border-color: #fff transparent #fff transparent;
        animation: lds-dual-ring 1.2s linear infinite;
   }
}

@media screen and (max-width: 800px) {
    .lds-dual-ring {
        display: inline-block;
        position: absolute;
        width: 60px;
        height: 60px;
        top: 100px;
        left: 400px;
    }
  .lds-dual-ring:after {
        content: " ";
        position: absolute;
        display: block;
        width: 50px;
        height: 50px;
        margin: 8px;
        border-radius: 50%;
        border: 6px solid #fff;
        border-color: #fff transparent #fff transparent;
        animation: lds-dual-ring 1.2s linear infinite;
   }
} */
</style>
