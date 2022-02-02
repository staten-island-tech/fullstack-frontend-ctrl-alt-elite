<template>
  <button
    class="text-xl text-slate-400 "
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