<template>
  <button id="followButton">
      <font-awesome-icon v-if="followingStatus" @click="follow" class="text-black dark:text-gray-100" :icon="['fas', 'user-plus']"/>
      <font-awesome-icon v-if="!followingStatus"  @click="unfollow" class="text-black dark:text-gray-100" :icon="['fas', 'user-check']"/> 
      <!-- do hovering effect (add words over hover) -->
  </button>
</template>

<script>
import DBFunctions from "~/DBFunctions";

export default {
  props:{
    following: Array,
    user: String
  },
  data(){
    return {
      followingStatus: true, 
    }
  },
  mounted(){
    this.check()
  },
  methods: {
    check(){
      this.following.forEach(e => {
        if (e === this.user){
          this.followingStatus = !this.followingStatus
        }
      })
    },
    async follow() {
      try {
        if (this.user !== this.$auth.user.email){
          this.followingStatus = !this.followingStatus
          await DBFunctions.follow(this.$auth.user.email, this.user)
        }
      } catch (error) {
        console.log(error);
      }
    },
    async unfollow() {
      try {
        if (this.user !== this.$auth.user.email){
          this.followingStatus = !this.followingStatus
          await DBFunctions.unFollow(this.$auth.user.email, this.user)
        }
      } catch (error) {
        console.log(error);
      }
    }
  }
}
</script>

<style>

</style>