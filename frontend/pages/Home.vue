<template>
    <section>
    <DefaultNavBar />
  <!-- <p class="text-white">hello {{ this.$auth.user }}</p>
  <img :src="this.$auth.user.picture"> -->
  <!-- <div class="h-screen flex items-center flex-col"> -->

    <h1>Recent Projects</h1>
    <div class="m-10 mx-20 flex flex-row justify-around justify-items-center ">
        <div class="h-60 w-1/4 bg-white"></div>
        <div class="h-60 w-1/4 bg-white"></div>
        <div class=" h-60 w-1/4 bg-white"></div>
    </div>
    <h1>Trending</h1>
    <div class="m-10 mx-20 flex flex-row justify-around justify-items-center ">
        <div class="h-60 w-1/4 bg-white"></div>
        <div class="h-60 w-1/4 bg-white"></div>
        <div class=" h-60 w-1/4 bg-white"></div>
    </div>

    <!-- </div> -->
    </section>
</template>

<script>
export default {
    
}
</script>

<style>

body {
       background-color: black;
}


h1{
    color:white;
    font-size: 1.5rem;
}
</style>