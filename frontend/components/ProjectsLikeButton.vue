<template>
  <button>
    <font-awesome-icon
      v-if="!liked"
      class="text-black dark:text-gray-100"
      :icon="['far', 'heart']"
      @click="like"
    />
    <font-awesome-icon
      v-if="liked"
      class="text-red-800"
      :icon="['fas', 'heart']"
      @click="unlike"
    />
  </button>
</template>

<script>
import DBFunctions from "~/DBFunctions";

export default {
  props: {
    project: Object,
  
   userInfo:{
    type: Object,
    required: true
    }
  },
  
  data() {
    return {
      liked: false,
      
    }
  },
  mounted(){
    
    this.check()
    // this.$emit("getLikes", this.project.projects.project_likes.length)
  },
  methods: {
    check(){
      this.project.projects.project_likes.forEach(e => {
        if (e === this.$auth.user.email){
          this.liked = !this.liked
        }
      })
    },
    async like() {
      try {
        this.$store.commit('updateReload')
        this.liked = !this.liked
        await DBFunctions.addLike(this.project, this.$auth.user.email)
      } catch (error) {
        window.alert(error)
      }
    },
    async unlike() {
      try {
        this.$store.commit('updateReload')
        this.liked = !this.liked
        await DBFunctions.removeLike(this.project, this.$auth.user.email)
      } catch (error) {
        window.alert(error)
      }
    },
  },
}
</script>

<style></style>
