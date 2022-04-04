<template>
  <div >
      <FollowList :list="list" />
      
      
     <!-- <DefaultNavBar /> -->

      
  
       
      
  </div>
</template>

<script>
 
import DBFunctions from "~/DBFunctions";
 
export default {
  
    
   data(){
       return{ 
         list:{data:null}, 
         
         }
      },

   
  async mounted ()
   {await DBFunctions.getFollowers(this.$store.state.otherIDInfo.email,this.list);} ,   
    
  

  methods: {

   
   

     }
    
}
</script>

<style>
table, th, td {
  border: 1px solid black;
  border-collapse: collapse;
}

</style>