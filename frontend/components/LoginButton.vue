<template>
  <button 
    class="text-white border h-8 px-6 rounded-md py-1"
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