<template>
  <div class="h-60 w-1/4 bg-black rounded">
    <div class="h-3/4 w-full bg-gray-900 rounded flex justify-center items-center">
      <p class="text-gray-200">sample</p>
    </div>
    <div class="h-1/4 w-full flex flex-col justify-center">
      <h3 class="text-white w-full z-10 flex justify-center px-3 font-bold"><slot>Sample Title</slot></h3>
      <div class="flex flex-row justify-between px-3">
        <LikeButton/>
        <h4 class="text-gray-100"><slot>Username</slot></h4>
        <FollowButton/>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
