<template>
  <div id="nav" class="h-screen w-1/2 relative">
      <font-awesome-icon v-if="!display" class="p-4 w-10 text-black dark:text-gray-100 text-xl cursor-pointer" :icon="['fas', 'bars']"  @click="toggleVisible"/>
    <div :class="{ shown : display }" class="h-screen w-0 duration-100 bg-gray-50 dark:bg-black absolute z-10">
        <div v-if="display" class="h-full w-full border-r border-slate">
            <div class="flex flex-row justify-between">
                <font-awesome-icon class="p-4 w-10 text-2xl text-black dark:text-gray-100 cursor-pointer" :icon="['fas', 'xmark']"  @click="toggleVisible"/>
                <NuxtLink to="/Home"><img class="h-16 mx-4" src="../assets/logo-placeholder.png"></NuxtLink>
            </div> 
            <div class="flex flex-col align-center justify-center m-2 h-1/4">
                <img class="rounded-full h-24 justify-self-center self-center m-1 " :src="userProfile.data.profile_pic">
                <div class="text-light-gray flex items-center justify-center flex-col text-center">
                    <p class="font-bold ">{{userProfile.data.name}}</p>
                   <div class="text-sm flex flex-row justify-around m-2 w-full">
                       <p>Following  {{$store.state.followInfo.following}}</p> 
                        <p>Followers  {{$store.state.followInfo.followers}}</p>
                   </div>
                   <NuxtLink to="/Profile" class="text-white border-2 h-8 px-4 rounded-md py-1 w-1/2 text-sm">View Profile</NuxtLink>
                </div>
            </div>
            <div class="flex flex-col dark:text-white text-black">
                <div class="h-1/8 bg-slate">
                    <font-awesome-icon :icon="['fas', 'house']"></font-awesome-icon>
                    <NuxtLink to="/Home" class="p-2">Home</NuxtLink>
                </div>
                <div>
                    <font-awesome-icon :icon="['fas', 'pen']"></font-awesome-icon>
                    <NuxtLink to="/ProjectAll" class="p-2">View Projects</NuxtLink>
                </div>
                <div class="text-red-400">
                    <font-awesome-icon :icon="['fas', 'arrow-right-from-bracket']"></font-awesome-icon>
                    <LogoutButton class="text-left p-2"/>
                </div>
            </div>
        </div>
    </div>
    <!-- <NuxtLink class="option3" to="/Settings">Settings</NuxtLink>
    <NuxtLink class="option3" to="/Profile">Profile</NuxtLink> 
    <LogoutButton/> -->
  </div>

</template>

<script>
import DBFunctions from "~/DBFunctions"; 
export default {
    data() {
        return {
            display: false,
            userProfile: { data : 'abc'},
            following: 0,
            followers:0,
            recentProjects :[],
        };
    },
    async  mounted (){
        await DBFunctions.getProfile(this.$auth.user.email,this.userProfile);
        await DBFunctions.getFollowers(this.$auth.user.email,this.list);
        
        } ,  
       methods: {
           toggleVisible() {
               this.display = !this.display;
               document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
           },
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
    
},
};
</script>

<style scoped>
#nav {
    color: gray;
    position: relative;
    /* cursor: pointer; */
    float: left;
    flex-direction: column;
    height: 4rem;  
    /* padding: 1rem; */
    display: flex;
    justify-content: flex-start;
    font-size: 1.25rem;
 
}

.notShown {
    width: 0rem;
}

.shown {
    width: 20rem;
}
    
@keyframes animateleft {
    from {
        left: -300px;
        opacity: 0;
    }
    to {
        left: 0;
        opacity: 1;
    }
}
</style>