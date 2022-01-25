<template>
  <button
    class="text-base text-white border-2 h-8 px-3 rounded-md border py-1"
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