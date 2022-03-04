<template>

  <div >
      
     <!-- <DefaultNavBar /> -->
     
      <section class=" flex flex-col m-5  ">
        <!-- <button @click="getProfile()">TEST</button>
        <textarea id="" :value="abc"  name=""  cols="30" rows="10"></textarea> -->
        <div class="flex flex-col-reverse justify-center gray-600 rounded-md items-center"> 
            <div class="flex flex-col justify-start  ">
                 <button class="py-2 px-4 rounded text-gray-900 font-bold bg-gradient-to-r from-purple-300 to-blue-700 hover:from-pink-500 hover:to-yellow-500 mt-2" >Update Profile Photo</button>    
                 <h1 class="font-bold mb-3 text-lg mt-1 text-center " > {{userProfile.data.user_id}}</h1> 
                
            </div>
            <img class="basis-5 rounded-full h-40 justify-self-center self-center m-1 " :src="userProfile.data.profile_pic">  
        </div>
        
            


            <div class="flex flex-col ">
                <h2 class="pb-2">Username</h2>
                <input v-model="userProfile.data.name" type="text" class="text-black rounded-md h-10 pl-3" title="Click to Edit" > 
                <h2 class="pb-2 pt-2" >Bio</h2>
                <textarea  v-model="userProfile.data.description" type="text" placeholder="Describe Yourself!" class="text-black rounded-md h-20 p-3" title="Click to Edit">    </textarea>
                <div class="flex flex-row justify-end">
                    <button class=" mr-2 mt-5 bg-gray-700 hover:bg-gray-500 text-white py-2 px-4 rounded" @click="updateProfile" > Save</button>
                    <button class=" mt-5 bg-gray-700 hover:bg-gray-500 text-white py-2 px-4 rounded" @click="resetProfile"> Reset </button>
                </div>
             
            </div>
                
    
      </section>      
  </div>
</template>

<script>

import DBFunctions from "~/DBFunctions"; 
export default {
  
   data(){
       return{ 
         userProfile: { data : 'abc'},
        following: 0,
        followers:0,
        recentProjects :[]
         }
      },

   
 async  mounted (){
        await DBFunctions.getProfile(this.$auth.user.email,this.userProfile)
        
        } ,  
    

  methods: {
  async getProfile()   {
      await DBFunctions.getProfile(this.$auth.user.email,this.userProfile)
    },
 async resetProfile()   {
      await this.getProfile();
      window.alert("Profile information reset.")
      
    },
  async updateProfile()   {
      await DBFunctions.updateProfile(this.userProfile)
      window.alert("Profile information updated.")
    },
   
     }
    
}
</script>

<style>

body {
       background-color: rgb(15, 15, 15);
       color: #e6e6e6;
}


h1{
    color:white;
    font-size: 1.5rem;
}
</style>