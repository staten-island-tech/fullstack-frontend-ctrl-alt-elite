<template>
<!-- text-slate-400  -->
  <button
    class="text-l"
    @click="logout"
  >
    Logout
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