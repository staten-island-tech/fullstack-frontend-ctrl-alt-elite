<template>
  <button 
    class="text-white border h-8 px-6 py-1 md:text-lg text-base"
    @click="login"
  >
    Log In
  </button>
</template>

<script>
   
    export default {
    name: 'LoginButton',
     
    
    methods: {
   async   login() {
        
        await this.$auth.loginWith('auth0');
         
       
      },
  
    },
  };
</script>