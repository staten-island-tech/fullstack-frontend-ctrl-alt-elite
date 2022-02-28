<template>
  <div >
      <FollowList :list="list" />
      
      
     <!-- <DefaultNavBar /> -->

     <!-- <p v-if="list.data == 'undefined' || list.data.length == 0"> 
       Oh no list is empty 😢
     </p>
     <template v-else>
       <table class="container mx-auto justify-center">

        <caption class="text-2xl font-bold">followed by  : {{list.data.length}} users </caption>
    
        <tr v-for="(item,index) in list.data" :key="item.user_id" class="container mx-auto justify-center">
            <td class="container mx-auto justify-center"> 
    
              <p > <span class="font-bold text-2xl hover:text-5xl"> {{ item.name }} </span>  index is {{index}}</p>
              <p class="hover:text-2xl"> email: {{item.user_id}}> </p>
           

              <FollowButton2 :followuserid="item.user_id" />
 
            </td>
            <td class="container justify-center">
                 <img class="p-1 bg-white border rounded max-w-sm" alt="no image" :src="item.profile_pic"> 
        
            </td>
        
         </tr>
        </table>
    </template> -->
 
  
       
      
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
   {await DBFunctions.getFollowers(this.$auth.user.email,this.list);} ,   
    
  

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