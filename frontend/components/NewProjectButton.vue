<template>
<<<<<<< Updated upstream
    <div>
        <NuxtLink class="text-white text-2xl font-bold mx-4 cursor-pointer" to="/Project">+</NuxtLink>
=======
    <div class="flex items-center justify-center">
        <NuxtLink id="spin" class="bg-d-primary text-white font-bold mx-4 cursor-pointer h-6 w-6 text-center flex items-center justify-center" to="/Project"><font-awesome-icon :icon="['fas', 'plus']" class="text-base rounded text-white"></font-awesome-icon></NuxtLink>
>>>>>>> Stashed changes
    </div>
</template>
<script>
export default {
    methods: {
        
    }
}
</script>

<style>
#spin:hover {
    animation:spin 1s linear infinite;
}

@keyframes spin { 
    100% { 
        -webkit-transform: rotate(360deg); 
        transform:rotate(360deg); 
    } 
}


</style>