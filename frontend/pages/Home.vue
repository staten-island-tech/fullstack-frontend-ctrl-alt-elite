<template>
    <section>
    <DefaultNavBar />
  <!-- <p class="text-white">hello {{ this.$auth.user }}</p>
  <img :src="this.$auth.user.picture"> -->
  <!-- <div class="h-screen flex items-center flex-col"> -->
    <div class=" m-10 mx-20 flex flex-row justify-around justify-items-center ">
        <div class="h-full w-1/5 bg-white"></div>
        <div class="h-full w-1/5 bg-white"></div>
        <div class="h-full w-1/5 bg-white"></div>
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

div {
 
    height: 100vh;
}

h1{
    color:white;
}
</style>