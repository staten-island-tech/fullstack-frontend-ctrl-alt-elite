<template>
  <div class="h-60 w-96 bg-l-bg-secondary dark:bg-d-bg-primary rounded border dark:border-slate border-light-gray" :class="{ light : !this.$store.state.darkMode }">
    <div class="h-3/4 w-full bg-l-bg-secondary dark:bg-d-bg-primary flex justify-center items-center rounded-t" id="image">
      
    </div>
    <div class="h-1/4 w-full flex flex-col justify-center">
      <h3 class="text-black dark:text-white w-full z-10 flex justify-center px-3 font-bold">{{ project.projects.project_title }}</h3>
      <div class="flex flex-row justify-between px-3">
        <LikeButton/>
        <h4 class=" text-black dark:text-gray-100">{{ project.name }}</h4>
        <FollowButton/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    project: Object
  },
  mounted(){
    console.log(this.project);
  }
}
</script>

<style scoped>
.light {
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}

#image {
  background-image:linear-gradient(rgb(0, 0, 0), rgba(0, 0, 0, 0.075)), url("./assets/welcoming-placeholder-bg.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}
</style>