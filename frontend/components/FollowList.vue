<template>
  <div >
     <!-- <DefaultNavBar /> -->

     <p v-if="typeof(list.data) === 'undefined' || list.data === null || list.data.length == 0"> 
       Oh no list is empty 😢
     </p>
     <template v-else>
       <div class="container flex flex col mx-auto justify-center gap-5 flex-wrap">
        
       
    
      <div  v-for="item in list.data" :key="item.user_id" class="container  justify-center" >

          <div class="py-5 px-5 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center    sm:space-y-0 sm:space-x-6">
            <img class="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0" :src="item.profile_pic" alt="Woman's Face" @click="viewOtherUser(item.user_id)">
          <div class="text-center space-y-2 sm:text-left">
          <div class="space-y-0.5">
           <p class="text-lg text-black font-semibold">
             {{item.name}}
          </p>
          <p class="text-lg text-black font-medium">
            {{item.user_id}}
         </p>
        </div >
        <div v-if="$auth.user.email === $store.state.otherIDInfo.email">
           <FollowButton2 :followuserid="item.user_id" />
        </div>
         
        </div>
      </div>
</div>
             
        </div>
    </template>
 
  
       
      
  </div>
</template>

<script>
 
import DBFunctions from "~/DBFunctions";
 
 
export default {
    props: {
       
       list: {      // user id 
           type:Object,
           required:true
          
       },
    
   },  
    
  data(){
       return{  
         info: {
            followers:0,
            following:0,
            projects:0,
            }
       } 
    
    },

  methods: {
 
   async viewOtherUser(userID){
      this.$store.commit('updateOtherIDInfo', userID);
      await DBFunctions.getInfo(this.$store.state.otherIDInfo.email,this.info);
      this.$store.commit('updateFollowInfo', this.info)
      this.$router.push({name: 'Profile'});
   } 

     }
    
}
</script>

<style>
table, th, td {
  border: 1px solid black;
  border-collapse: collapse;
}

</style>