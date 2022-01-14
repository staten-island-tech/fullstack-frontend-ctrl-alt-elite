<template>
  <button class="text-base text-white mx-3 p-2" @click="signup"><slot>Sign Up</slot></button>
</template>

<script>
export default {
     methods: {
      signup() {
        this.$auth.loginWith("auth0", { params: { screen_hint: "signup" }})
      },
     },
}
</script>

<style>

</style>