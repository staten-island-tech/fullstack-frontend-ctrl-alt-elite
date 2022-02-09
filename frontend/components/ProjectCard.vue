<template>
  <div class="h-60 w-1/4 bg-black rounded">
    <div class="h-3/4 w-full bg-gray-900 rounded flex justify-center items-center">
      <p class="text-gray-200">sample</p>
    </div>
    <div class="h-1/4 w-full flex flex-row items-center justify-center">
      <div class="w-1/6">
        <LikeButton/>
      </div>
      <h3 class="text-white"><slot>Sample Title</slot></h3>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>