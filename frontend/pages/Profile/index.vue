<template>
  <div >
    <h1>RETURN</h1>
     <FollowList :list="list" />

            <div v-if="$auth.user.email === $store.state.otherIDInfo.email" class="flex flex-col ">
                <h2 class="pb-2">Username</h2>
                <input v-model="userProfile.data.name" type="text" class="text-black rounded-md h-10 pl-3" title="Click to Edit" > 
                <h2 class="pb-2 pt-2" >Bio</h2>
                <textarea  v-model="userProfile.data.description" type="text" placeholder="Description..." class="text-black rounded-md h-20 p-3" title="Click to Edit">    </textarea>
                <div  class="flex flex-row justify-end">
                    <button class=" mr-2 mt-5 bg-gray-700 hover:bg-gray-500 text-white py-2 px-4 rounded" @click="updateProfile" > Save</button>
                    <button class=" mt-5 bg-gray-700 hover:bg-gray-500 text-white py-2 px-4 rounded" @click="resetProfile"> Reset </button>
                </div>
             
            </div>

            <div v-else class="flex flex-col ">
                <h2 class="pb-2">Username</h2>
                <input v-model="userProfile.data.name"  type="text" :disabled ="true" class="text-black rounded-md h-10 pl-3" title="Click to Edit" > 
                <h2 class="pb-2 pt-2" >Bio</h2>
                 <textarea  v-model="userProfile.data.description" type="text" :disabled ="true" placeholder="Description..." class="text-black rounded-md h-20 p-3" title="Click to Edit">    </textarea>
                
            </div>
                
    
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

// import Vue from 'vue'
// import VueCompositionAPI from '@vue/composition-api';
// Vue.use(VueCompositionAPI)
// import { ref } from "@vue/composition-api";

export default {
  
//  setup(){
//    const popupTriggers = ref({
//      buttonTrigger: true
//    });
//    return {
//      Popup: "",
//      popupTriggers: ""  

//    }
//  },

   data(){
       return { 
        userProfile: { data : ''},
        list:{data:null}, 
        // following: 0,
        // followers:0,
        // recentProjects :[], 
        info: {
            followers:0,
            following:0,
            projects:0,
            name:'',
        },
       }
   },
    
     async mounted (){
         
       this.getProfile();
     await DBFunctions.getFollowing(this.$auth.user.email,this.list);
      

                 
        } ,  
  
   computed: {
    // a computed getter
    reload: {
      get() {
       
      return this.$store.state.otherIDInfo.email;
      }
    }
       
},
 watch: {
    // whenever question changes, this function will run
    reload(newValue, oldValue) {
      this.getProfile();
     
    }
  },

    

  methods: {
  async getProfile()   {
    try {
       
        await DBFunctions.getInfo(this.$store.state.otherIDInfo.email,this.info);
        this.$store.commit('updateFollowInfo', this.info)
        
         await DBFunctions.getProfile(this.$store.state.otherIDInfo.email,this.userProfile)
    } catch 
    { window.alert ("error getting the profile")
    }
  },
 async resetProfile()   {
      await this.getProfile();
      window.alert("Profile information reset.")
      
    },
  async updateProfile()   {
    try {
      await DBFunctions.updateProfile(this.userProfile)
      window.alert("Profile information updated.")
    } catch {
         window.alert("can't update profile")
    }
    },
   
     },
         
    
}
</script>

<style>
table, th, td {
  border: 1px solid black;
  border-collapse: collapse;
}

</style>