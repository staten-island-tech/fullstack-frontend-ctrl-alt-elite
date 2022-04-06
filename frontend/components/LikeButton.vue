<template>
  <div>
      <font-awesome-icon v-if="!liked" class="text-black dark:text-gray-100" :icon="['far', 'heart']" @click="like"/>
      <font-awesome-icon v-if="liked" class="text-red-800" :icon="['fas', 'heart']" @click="unlike"/>
    
  </div>
</template>

<script>
export default {
  data(){
    return {
      liked: false,
    }
  },
  methods: {
    like() {
      this.liked = !this.liked
    },
    unlike() {
      this.liked = !this.liked
    }
  }
}
</script>

<style>


</style>