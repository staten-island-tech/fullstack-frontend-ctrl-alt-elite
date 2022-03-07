<template>
  <section class="flex flex-row justify-between w-full h-16">

      <Sidebar/>
      <div class="w-1/2 flex flex-row justify-between">
        <NuxtLink to="/Home"><img class="h-16 mx-4" src="../assets/logo-placeholder.png"></NuxtLink> 
        <NewProjectButton/>
      </div>
 
  </section>
  
  
 
</template>
    
<script>
export default {
}
</script>
<style scoped>
</style>