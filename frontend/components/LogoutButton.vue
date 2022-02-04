<template>
  <button
    class="text-lg text-white border-2 h-8 px-1.5 rounded-md "
    @click="logout"
  >
    Log out
  </button>
</template>

<script>
export default {
     methods: {
      async logout() {
        await this.$auth.logout()
       
      },
    },
}
</script>

<style scoped>
  

</style>