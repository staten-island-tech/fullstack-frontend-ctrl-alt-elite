<template>
<section id="card">
  <div class="h-60  bg-black rounded">
    <div class="h-3/4 w-full bg-gray-900 rounded flex justify-center items-center">
      <p class="text-gray-200">sample</p>
    </div>
    <div class="h-1/4 w-full flex flex-col justify-center">
      <h3 class="text-white w-full z-10 flex justify-center px-3 font-bold">
         {{item.project_title}}</h3>
      <div class="flex flex-row justify-between px-3">
        <LikeButton/>
        <h4 class="text-gray-100"><slot>Username</slot></h4>
        <FollowButton/>
      </div>
    </div>
  </div>
</section>
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
#card:hover {
  transform: scale(1.3);
  animation: transition 2s;
}

</style>