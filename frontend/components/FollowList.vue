<template>
  <div class="flex flex-col justify-center items-center text-black dark:text-white">
     <!-- <DefaultNavBar /> -->
    <p v-if="typeof(list.data) === 'undefined' || list.data === null || list.data.length == 0"> 
      Oh no list is empty 😢
    </p>
    <template v-else>
      <div class="container flex flex-wrap relative gap-5 justify-evenly items-center pb-2">
        <div  v-for="item in list.data" :key="item.user_id">
          <div class="py-5 px-5 h-40 max-w-sm left-0 mt-2 mx-auto text-white dark:text-black bg-black dark:bg-white rounded-xl shadowing space-y-2 float-left sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6 ">
            <img class="block mx-auto h-12 rounded-full sm:mx-0 sm:shrink-0 cursor-pointer transform transition duration-500 hover:scale-125" :src="item.profile_pic" @click="viewOtherUser(item._id,item.user_id)">
            <div class="text-center space-y-2 sm:text-left">
              <div class="space-y-0.5">
                <p class="text-lg  font-semibold ">{{item.name}}</p>
                <p class="text-lg  font-medium">{{item.user_id}}</p>
              </div>
              <div v-if="$auth.user.email !=item.user_id"> 
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
export default {
    props: {
       list: {      
           type:Object,
           required:true
       },
   },  
  methods: {
    viewOtherUser(mongoID,userID){
      this.$store.commit('updateOtherIDInfo', {mongo_id:mongoID,email:userID});
     // await DBFunctions.getInfo(this.$store.state.otherIDInfo.email,this.info);
     // this.$store.commit('updateFollowInfo', this.info)
      this.$store.commit('updateReload')
      this.$store.commit("newProject", false)
      if (userID !== this.$auth.user.email){
        this.$store.commit("isNotYourProject", true)
      } else if (userID === this.$auth.user.email){
        this.$store.commit("isNotYourProject", false)
      }
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