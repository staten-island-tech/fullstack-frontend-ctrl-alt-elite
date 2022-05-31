<template>
  <button class="md:text-lg text-xs" @click="signup"><slot>Sign Up</slot></button>
</template>

<script>
import DBFunctions from "~/DBFunctions";
export default {
    
    
     methods: {
     
    
       signup()  {
        
         this.$auth.loginWith("auth0", { params: { screen_hint: "signup" }})
        //  .then( () => {
                                                     
        //                            DBFunctions.login(this.$auth.user.email);
        //                })
                                   
            
           
                                  
         
        
      
        
        
       
      
      },
     },
}
</script>

<style>

</style>