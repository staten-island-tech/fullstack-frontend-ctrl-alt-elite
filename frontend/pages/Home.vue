<template>
    <div>
    <DefaultNavBar />
  <p class="text-white">hello {{ this.$auth.user }}</p>
  <img :src="this.$auth.user.picture">
    </div>
</template>

<script>
export default {
    
}
</script>

<style>
div {
    background-color: black;
    height: 100vh;
}

h1{
    color:white;
}
</style>