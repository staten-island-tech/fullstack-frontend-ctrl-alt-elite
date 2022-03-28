<template>
  <button 
    class="text-white border-2 h-8 px-6 rounded-md py-1"
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