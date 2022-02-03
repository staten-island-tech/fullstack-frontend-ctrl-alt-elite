<template>
  <section class="flex flex-row flex-start items-center w-full">
    <div class="flex flex-start w-full">
      <div class="color-white option1 cursor-pointer" @click = "toggleVisible"> ☰ </div>
      <SidebarButton v-if="display"/>
      <img class="h-12 mx-4" src="../assets/logo-placeholder.png">   
    </div>
    <NewProjectButton />
 
  </section>
  
  
 
</template>
    
<script>
export default {
  data() {
        return {
            display: false,
        };
    },
       methods: {
           toggleVisible() {
               this.display = !this.display;

           }

},
}
</script>
<style scoped>

</style>