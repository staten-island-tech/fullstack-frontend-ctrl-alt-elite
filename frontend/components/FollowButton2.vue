<template>
<div>
    <button  
    :class="{'bg-blue-500':!followInfo.following, 'bg-red-500':followInfo.following,
    'hover:bg-blue-200':!followInfo.following, 'hover:bg-red-200':followInfo.following}" 
    class="text-white font-bold py-2 px-4 rounded " @click="updateFollowStatus" > {{followInfo.following ?'Unfollow':'Follow'}}</button>
    <p v-if="followInfo.following && followInfo.followedby"  class="font-bold text-2xl text-blue-500" > Friends😊</p>
     
</div> 
</template>

<script>
import DBFunctions from "~/DBFunctions";

export default {
props: {
       
       followuserid: {      // user id 
           type:String,
           required:true
          
       },
    
   },  
data(){
    return {
        // followingStatus: true, 
        followInfo:{
            following:false,
            followedby:false,
        },
        
    }
  },
  async mounted()
  {
    await DBFunctions.getFollowInfo(this.$auth.user.email,this.followuserid,this.followInfo)
  },

  methods: {
    async updateFollowStatus()
    {
        if(this.followInfo.following)
           await DBFunctions.unFollow(this.$auth.user.email,this.followuserid,this.data)
        else 
           await DBFunctions.follow(this.$auth.user.email,this.followuserid,this.data)
        this.followInfo.following = !this.followInfo.following; 

         this.$store.commit('updateReload')
         
       
    }
  },

}
</script>