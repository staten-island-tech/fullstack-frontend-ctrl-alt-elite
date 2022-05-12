<template>
  <div class="w-full h-screen" :class="{ dark : this.$store.state.darkMode }">
   
    <div class="w-full min-h-full h-auto dark:bg-d-bg-primary bg-l-bg-primary">
      <DefaultNavBar/>
       
      <div class=" w-full h-1/3 flex justify-center items-center">
        <section class=" flex flex-row w-full justify-center items-center bg-l-bg-secondary dark:bg-d-bg-accent darkBorder">
          <!-- <button @click="getProfile()">TEST</button>
          <textarea id="" :value="abc"  name=""  cols="30" rows="10"></textarea> -->
          <!-- <button class="absolute top-20 left-10">return button</button> -->
          
          <div class="flex flex-col-reverse justify-center gray-600 rounded-md items-center m-10"> 
            
              <div v-if="ownProfile" class="flex flex-col justify-start"   > 
                 <button class="py-2 px-4 rounded text-gray-900 font-bold bg-gradient-to-r from-purple-300 to-primary hover:from-pink-500 hover:to-yellow-500 mt-2" @click="selectImage"> Update Image </button>
                 <imageList :class="{hidden:showImageList}" />
                <!-- <input type = "file" ref="file" style="display: none" >
                  <button class=" py-2 px-4 rounded text-gray-900 font-bold bg-gradient-to-r from-purple-300 to-blue-700 hover:from-pink-500 hover:to-yellow-500 mt-2"  @click="$refs.file.click()"><font-awesome-icon icon="fa-solid fa-arrow-up-from-bracket" />  Upload Profile Photo</button>      -->
                  
              </div>
              
              <FollowButton2 v-else :followuserid="this.$store.state.otherIDInfo.email"  />
              
              <img class="basis-5 rounded-full w-40 h-40 justify-self-center self-center m-1 " :src="userProfile.data.profile_pic">  
          </div>

              <div class="m-10 flex flex-col text-black dark:text-white w-1/3">
                  <h1 class="font-bold mb-3 text-lg mt-1 text-center text-black dark:text-white "  > {{userProfile.data.user_id}}</h1>
                  <h2 class="pb-2 pl-1">Username</h2>
                   <input v-model="userProfile.data.name" placeholder="Username" type="text" :readonly="!ownProfile" class="h-1/2 w-full p-3 pl-1 flex justify-center items-center text-lg bg-transparent dark:text-gray-400 text-black" :class="{'focus:outline-none':!ownProfile}"  >
                  <!-- <input v-model="userProfile.data.name" type="text" class="text-black rounded-md h-10 pl-3 border border-slate" title="Click to Edit"   >  -->
                  <h2 class="pb-2 pt-2 pl-1" >Bio</h2>
                  <textarea  v-model="userProfile.data.description" type="text" placeholder="Description..." :readonly="!ownProfile" class=" text-black rounded-md h-20 p-3 pl-1 bg-transparent dark:text-gray-400 text-black" :class="{'focus:outline-none':!ownProfile}"  >    </textarea>
                  <div v-if="ownProfile" class="flex flex-row justify-end " >
                      <button class=" mr-2 mt-5 bg-gray-700 hover:bg-gray-700 text-white py-2 px-4 rounded" @click="updateProfile" > Save Changes </button>
                  </div>
                <div v-else class="flex flex-row justify-end ">
                   <button class=" mr-2 mt-5 bg-gray-700 hover:bg-gray-500 text-white py-2 px-4 rounded"  @click="resetProfile"> Return To My Profile </button>
                </div>
              </div>
                  
      
        </section>      
        
      </div>
      <ul class="bg-l-bg-accent dark:bg-d-bg-secondary h-12">
        <!-- <li>
            <NuxtLink  class="link link-underline link-underline-black text-gray-500 font-bold text-xl"  to="/profile/">Profile</NuxtLink>
        </li> -->
        <li>
          <NuxtLink  class="link link-underline link-underline-black text-gray-500  font-bold text-xl" to="/profile/"  :class="{defaultLink:defaultLink}">Following  {{info.following}} </NuxtLink>

        </li>
        
        <li>
          <NuxtLink   class="link link-underline link-underline-black text-gray-500 font-bold text-xl" to="/profile/Followers">Followers  {{info.followers}}   </NuxtLink>

        </li>
        <li>
          <NuxtLink  class="link link-underline link-underline-black text-gray-500  font-bold text-xl" to="/profile/Projects" >Projects  {{info.projects}}</NuxtLink>

        </li>
      </ul>
    <div   class="bg-white dark:bg-d-bg-secondary min-h-full h-auto container">
      <!-- <p> {{$store.state.followInfo.name}} </p> -->
    <!-- <NuxtChild  :userid="$store.state.otherIDInfo.email" /> -->
    <NuxtChild/>
    </div>
      
     </div>      
  </div>
</template>

<script>
 
// import WAVES from 'vanta/dist/vanta.waves.min'
// import * as THREE from 'three'
import DBFunctions from "~/DBFunctions";
export default {
  
  data(){
       return{  
          info: {
                followers:0,
                following:0,
                projects:0,
                name:'',
                profilePic:'',
                mongoID:'',
                userID:'',
            },
         followingList:{data:null}, 
         followersList:{data:null}, 
         userProfile: { data : ''},
         projects: {list: []},
         defaultLink:true,
         showImageList:true
         
          
       } 
    
    },
   computed: {
     
    reload: {
      get() {
       
      return this.$store.state.reload;
      }
    },
    ownProfile:{
      get()
      { return this.$auth.user.email === this.$store.state.otherIDInfo.email
      }
    },
       
    },
       
 watch: {
    
    reload(newValue, oldValue) {
      this.getProfile();
     
    }
  }, 
  mounted ()
   { 
  //    this.vantaEffect = WAVES({
  //     el: "#body",
  //     THREE,
  //     color: 0x000000,
  // waveHeight: 20,
  // shininess: 50,
  // waveSpeed: 1.5,
  // zoom: 0.75
  //   });
   
  
  this.getProfile();
   
    } ,   
 
  
  // beforeDestroy() {
  //   if (this.vantaEffect) {
  //     this.vantaEffect.destroy()
  //   }
  // },
   
 
  methods: {
 async getProfile()   {
    try {
               
        await DBFunctions.getInfo(this.$store.state.otherIDInfo.email,this.info);
        await DBFunctions.getProfile(this.$store.state.otherIDInfo.email,this.userProfile)
        await DBFunctions.getFollowing(this.$store.state.otherIDInfo.email ,this.followingList);
        await DBFunctions.getFollowers(this.$store.state.otherIDInfo.email ,this.followersList);
        await DBFunctions.searchProjects("new", this.projects);
        console.log(this.projects.list)
          // window.alert(JSON.stringify(this.projects.list))
         this.projects.list = this.userProfile.data.projects 
              
          
          
    } catch 
    { window.alert ("error getting the profile")
    }
  },
 async resetProfile()   {
       this.$store.commit("updateOtherIDInfo", {mongo_id:'',email: this.$auth.user.email})
      await this.getProfile();
      
    },
  async updateProfile()   {
    try {
      await DBFunctions.updateProfile(this.userProfile)
      this.$store.commit('updateReload')
      window.alert("Profile information updated.")
    } catch {
         window.alert("can't update profile")
    }
    },
    selectImage()
    {
      // document.getElementById("imageList").style.display = "flex"
      this.showImageList=false
    }
   
     },
    
}
</script>

<style scoped>
ul {
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
 
  padding: 0;
}
li {
  margin: 0 0.5rem;
  padding: 0.25rem;
  font-size: 1rem;
}
.container {
   margin: auto;
   margin-top: 20px;
  width: 50vw;
  /* background-color: #1c1c1c; */
  /* border: 3px solid rgb(27, 25, 25);
  border: 3px (linear-gradient(to right, red, purple)); */
   /* border-style: solid;
  border-width: 3px;
  border-image: conic-gradient( magenta, blue, magenta) 1; */
  padding: 10px;
  border-radius: 12px;
}
 
  
a.nuxt-link-exact-active, .defaultLink {
  color:rgb(160, 148, 228);
  text-decoration: underline #3500D3 3px;
  font-weight : bold;
  
}
 
.link-underline {
		border-bottom-width: 0;
		background-image: linear-gradient(transparent, transparent), linear-gradient(#fff, #fff);
		background-size: 0 3px;
		background-position: 0 100%;
		background-repeat: no-repeat;
		transition: background-size .5s ease-in-out;
	}
	.link-underline-black {
		background-image: linear-gradient(transparent, transparent), linear-gradient(#3500D3, #3500D3)
	}
	.link-underline:hover {
		background-size: 100% 3px;
		background-position: 0 100%
	}
  #body {
    height: 5rem;
    width: 5rem;
  }
h1{
    color:white;
    font-size: 1.5rem;
}
.darkBorder {
    border-bottom: solid 3px;
    border-image: conic-gradient( magenta, #3500D3, magenta) 1;
}
</style>