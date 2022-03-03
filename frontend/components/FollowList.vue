<template>
  <div >
     <!-- <DefaultNavBar /> -->

     <p v-if="typeof(list.data) === 'undefined' || list.data === null || list.data.length == 0"> 
       Oh no list is empty 😢
     </p>
     <template v-else>
       <div class="container flex flex col mx-auto justify-center gap-5 flex-wrap">
        
       
    
        <div v-for="item in list.data" :key="item.user_id" class="container  justify-center">

          <div class="py-5 px-5 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center    sm:space-y-0 sm:space-x-6">
            <img class="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0" :src="item.profile_pic" alt="Woman's Face">
          <div class="text-center space-y-2 sm:text-left">
          <div class="space-y-0.5">
           <p class="text-lg text-black font-semibold">
             {{item.name}}
          </p>
          <p class="text-lg text-black font-medium">
            {{item.user_id}}
         </p>
        </div>
          <FollowButton2 :followuserid="item.user_id" />
        </div>
    </div>
</div>
             
        </div>
    </template>
 
  
       
      
  </div>
</template>

<script>
// import DBFunctions from "~/DBFunctions";
 
export default {
    props: {
       
       list: {      // user id 
           type:Object,
           required:true
          
       },
    
   },  
    
   data(){
        return{ 
     
         
         }
      },

   

  

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