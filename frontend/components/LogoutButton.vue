<template>
  <button
    class="text-base text-white border-2 h-10 px-6 rounded-md border py-1"
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

<style>

</style>