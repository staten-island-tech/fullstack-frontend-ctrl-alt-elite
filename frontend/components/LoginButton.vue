<template>
  <button 
    class="text-white border h-8 px-6 py-1 md:text-lg text-base"
    @click="login"
  >
    Log In
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
  };
</script>