

<template>
  <div >
     <FollowList :list="list" />

    
     <!-- <DefaultNavBar /> -->
    
     <!-- <p v-if="list.data == 'undefined' || list.data.length == 0"> 
       Oh no list is empty 😢
     </p>
     <template v-else>
    

       <h1 class="text-2xl font-bold justify-center">follow : {{list.data.length}} users </h1>
       <table v-for="item in list.data" :key="item.user_id" class="container flex flex-row mx-auto table-fiXed justify-center">
              
        
        <tr>
          <td>
         <span class="flex space-x-1">
       
            <img class="rounded-full border border-gray-100 shadow-sm" :src="item.profile_pic" alt="user image" />
   
        
        </span> 
        </td>
       <td>   <span class="font-bold text-2xl hover:text-5xl"> {{ item.name }} </span> </td>
          <td>< class="hover:text-2xl"> email: {{item.user_id}} </p></td>
         <td> <followButton2     :followuserid="item.user_id"  /></td>       
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
   { 
 
     await DBFunctions.getFollowing(this.$auth.user.email,this.list);
      
      
     } ,   
    
    

  methods: { 
     //  DBFunctions
    
    


    },
   
   

     
    
}
</script>

<style>
table, th, td {
  border: 1px solid black;
  border-collapse: collapse;
}

</style>