<template>
  <div class="flex flex-col justify-center items-center text-black dark:text-white">
     <!-- <DefaultNavBar /> -->

     <p v-if="typeof(list.data) === 'undefined' || list.data === null || list.data.length == 0"> 
       Oh no list is empty 😢
     </p>
     <template v-else>
       <div class="container flex col mx-auto justify-center gap-5 flex-wrap">
        
       
    
      <div  v-for="item in list.data" :key="item.user_id" class="container  justify-center" >

          <div class="py-5 px-5 max-w-sm mx-auto bg-white rounded-xl shadowing space-y-2 sm:py-4 sm:flex sm:items-center    sm:space-y-0 sm:space-x-6">
            <img class="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0" :src="item.profile_pic" @click="viewOtherUser(item._id,item.user_id)">
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
            name:'',
            },
       } 
    
    },

  methods: {
 
   async viewOtherUser(mongoID,userID){
      this.$store.commit('updateOtherIDInfo', {mongo_id:mongoID,email:userID});
      await DBFunctions.getInfo(this.$store.state.otherIDInfo.email,this.info);
      this.$store.commit('updateFollowInfo', this.info)
      this.$router.push({name: 'Profile'});
   } 

     }
    
}
</script>

<style scoped>
table, th, td {
  border: 1px solid black;
  border-collapse: collapse;
}

.shadowing {
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
}

</style>