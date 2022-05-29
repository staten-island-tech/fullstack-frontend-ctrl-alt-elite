<template>
  <div class="h-36 w-56 sm:h-40 sm:w-72 md:h-60 md:w-96 bg-gray-300 dark:bg-black rounded border dark:border-slate border-light-gray" :class="{ light : !this.$store.state.darkMode }">
    <div class="h-3/4 w-full bg-white dark:bg-gray-900 flex justify-center items-center">
      <p class="text-black dark:text-gray-200">sample</p>
    </div>
    <div class="h-1/4 w-full flex flex-col justify-center">
      <!-- <h3 class="text-black dark:text-white w-full z-10 flex justify-center px-3 font-bold">
         {{item.project_title}}</h3> -->
          <button class="text-black dark:text-white w-full z-10 flex justify-center px-3 font-bold" @click="viewProject"> {{item.project_title}} </button>
    </div>
  </div>
</template>

<script>
export default {
props: {
  item : {      // user id 
    type:Object,
    required:true,
  }
},
methods:{
  viewProject(){
    this.$store.commit('PUSH_HTML', this.item.published_code.html)
    this.$store.commit('PUSH_CSS', this.item.published_code.css)
    this.$store.commit('PUSH_JS', this.item.published_code.js)
    this.$store.commit('PUSH_PROJECT_ID', this.item._id)
    this.$store.commit('PUSH_TITLE', this.item.project_title)
    this.$store.commit('PUSH_DESCR', this.item.description)
    this.$store.commit("newProject", false)
    this.$router.push("/")
    this.$router.push("/Project")
  },
}
}
</script>

<style>

</style>