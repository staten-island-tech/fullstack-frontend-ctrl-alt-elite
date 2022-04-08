<template>
  <div class="h-60 w-96 bg-gray-300 dark:bg-black rounded border dark:border-slate border-light-gray" :class="{ light : !this.$store.state.darkMode }">
    <div class="h-3/4 w-full bg-white dark:bg-gray-900 flex justify-center items-center">
      <p class="text-black dark:text-gray-200">sample</p>
    </div>
    <div class="h-1/4 w-full flex flex-col justify-center">
      <h3 class="text-black dark:text-white w-full z-10 flex justify-center px-3 font-bold">
         {{item.project_title}}</h3>
      <div class="flex flex-row justify-between px-3">
        <LikeButton/>
        <!-- <h4 class="text-gray-100"><slot>Username</slot></h4>
        <FollowButton /> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
props: {
       item : {      // user id 
           type:String,
           required:true,
       }
   },
}
</script>

<style>

</style>