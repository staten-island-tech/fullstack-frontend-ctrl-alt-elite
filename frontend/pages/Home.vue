<template>
    <section>
    <DefaultNavBar />
  <!-- <p class="text-white">hello {{ this.$auth.user }}</p> -->
    <div class="container">
        <h1 >Recent Projects</h1> 
        <NuxtLink to="ProjectAll"><p> View all -></p></NuxtLink>
            <div class=" flex flex-row justify-between justify-items-center ">
                <div class="h-60 w-1/4 bg-white"></div>
                <div class="h-60 w-1/4 bg-white"></div>
                <div class=" h-60 w-1/4 bg-white"></div>
            </div>

        <h1>Trending</h1>
            <div class="flex flex-row justify-between justify-items-center ">
                <div class="h-60 w-1/4 bg-white"></div>
                <div class="h-60 w-1/4 bg-white"></div>
                <div class=" h-60 w-1/4 bg-white"></div>
            </div>
    </div>
    <p class="text-white">Hello {{ this.$auth.user.name }}</p>

    </section>
</template>

<script>
export default {
    
}
</script>

<style>

.container {
    margin: 0 auto;
    width: 100%;

}

body {
       background-color: black;
       color: white;
}


h1{
    color:white;
    font-size: 1.5rem;
}
</style>