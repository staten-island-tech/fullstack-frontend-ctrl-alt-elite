<template>
  <section class="flex flex-row justify-between w-full h-12 mb-12 bg-white dark:bg-dark-gray border-b border-light-gray dark:border-dark-gray z-10" :class="{ navDark : this.$store.state.darkMode }" >

      <Sidebar/>
      <NewProjectButton/>
  
  </section>
  
  
</template>
    
<script>
export default {
}
</script>

<style scoped>
.navDark {
  box-shadow: rgba(0, 0, 0, 0.26) 0px 7px 29px 0px;
}

  /* navLight : !this.$store.state.darkMode, */
</style>