<template>
  <button class="md:text-lg text-xs" @click="signup"><slot>Sign Up</slot></button>
</template>

<script>

export default {
    
    
     methods: {
     
    
       signup()  {
        
         this.$auth.loginWith("auth0", { params: { screen_hint: "signup" }})
  
        
                           
                                        
         
        
      
        
        
       
      
      },
     },
}
</script>

<style>

</style>