<template>
  <button class="text-xl text-slate-400" @click="logout">
    Log out
  </button>
</template>

<script>
export default {
  methods: {
    async logout() {
      sessionStorage.removeItem('app_token');
      await this.$auth.logout()
      this.$router.push({path: '/'});
    },
  },
}
</script>
