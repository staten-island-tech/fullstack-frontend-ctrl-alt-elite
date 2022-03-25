<template>
<section id="card">
  <div class="h-60 w-96 bg-gray-300 dark:bg-black rounded">
    <div class="h-3/4 w-full bg-white dark:bg-gray-900 rounded flex justify-center items-center">
      <p class="text-black dark:text-gray-200">sample</p>
    </div>
    <div class="h-1/4 w-full flex flex-col justify-center">
      <h3 class="text-black dark:text-white w-full z-10 flex justify-center px-3 font-bold">{{ project.title }}</h3>
      <div class="flex flex-row justify-between px-3">
        <LikeButton/>
        <h4 class=" text-black dark:text-gray-100">{{ project.user }}</h4>
        <FollowButton/>
      </div>
    </div>
  </div>
</section>
</template>

<script>
export default {
  props: {
    project: Object
  }
}
</script>

<style scoped>
#card:hover {
  transform: scale(1.3);
  transition: all 0.3s ease-in-out;

}

.light {
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}
</style>