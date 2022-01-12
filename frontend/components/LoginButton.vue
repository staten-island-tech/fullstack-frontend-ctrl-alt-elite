<template>
  <button
    class="text-base text-white border-2 h-10 px-6 rounded-md border py-1"
    @click="login"
  >
    Log In
  </button>
</template>

<script>
  export default {
    name: 'LoginButton',
    methods: {
      login() {
        this.$auth.loginWith('auth0');
       
      },
  
    },
  };
</script>