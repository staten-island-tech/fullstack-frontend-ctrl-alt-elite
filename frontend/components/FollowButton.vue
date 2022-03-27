<template>
  <button>
      <font-awesome-icon v-if="followingStatus" @click="follow" class="text-black dark:text-gray-100" :icon="['fas', 'user-plus']"/>
      <font-awesome-icon v-if="!followingStatus"  @click="unfollow" class="text-black dark:text-gray-100" :icon="['fas', 'user-check']"/> 
      <!-- do hovering effect (add words over hover) -->
  </button>
</template>

<script>
export default {
data(){
    return {
        followingStatus: true, 
    }
  },
  methods: {
    follow() {
      this.followingStatus = !this.followingStatus
    },
    unfollow() {
      this.followingStatus = !this.followingStatus
    }
  }
}
</script>

<style>

</style>