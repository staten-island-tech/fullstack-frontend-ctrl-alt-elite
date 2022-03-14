<template>
  <button>
      <font-awesome-icon v-if="!liked" id = "like" class="text-black dark:text-gray-100" :icon="['far', 'heart']" @click="like"/>
      <font-awesome-icon v-if="liked" id = "unlike" class="text-red-800" :icon="['fas', 'heart']" @click="unlike"/>
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

<style scoped>

</style>