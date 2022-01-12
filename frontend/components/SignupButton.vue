<template>
  <button><NuxtLink to="/SignUp" class="text-base text-white mx-3 p-2" @click="signup">Sign Up</NuxtLink></button>
</template>

<script>
export default {
     methods: {
      signup() {
        this.$auth.loginWithRedirect({
          screen_hint: 'signup',
        });
      },
     },
}
</script>

<style>

</style>