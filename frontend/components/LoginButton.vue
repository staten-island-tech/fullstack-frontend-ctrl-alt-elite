<template>
  <button class="text-white border flex items-center h-8 px-6 py-1 md:text-lg text-xs sm:text-base" @click="login">
    Login
  </button>
</template>

<script>
import DBFunctions from "~/DBFunctions";
export default {
  name: 'LoginButton', 
  methods: {
    login() {
      this.$auth.loginWith('auth0').then( () => {DBFunctions.login(this.$auth.user.email);})
    },
  },
}
</script>