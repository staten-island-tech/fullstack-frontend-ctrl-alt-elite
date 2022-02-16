<template>
  <button>
      <font-awesome-icon v-if="!liked" class="text-white" :icon="['far', 'heart']" @click="like"/>
      <font-awesome-icon v-if="liked" class="text-red-800" :icon="['fas', 'heart']" @click="unlike"/>
  </button>
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