<template>
  <div id="nav" class="h-screen w-1/2 relative">
      <font-awesome-icon v-if="!display" class="p-4 w-10 text-black dark:text-gray-100 text-xl" :icon="['fas', 'bars']"  @click="toggleVisible"/>
    <div :class="{ shown : display }" class="h-screen w-0 duration-100 bg-gray-50 dark:bg-black absolute z-10">
        <div v-if="display" class="h-full w-full border-r border-slate">
            <div class="flex flex-row justify-between">
                <font-awesome-icon class="p-4 w-10 text-2xl text-black dark:text-gray-100" :icon="['fas', 'xmark']"  @click="toggleVisible"/>
                <NuxtLink to="/Home"><img class="h-16 mx-4" src="../assets/logo-placeholder.png"></NuxtLink>
            </div> 
            <div>
                <img class="rounded-full h-20 justify-self-center self-center m-1 " :src="userProfile.data.profile_pic">
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
            recentProjects :[]
        };
    },
    async  mounted (){
        await DBFunctions.getProfile(this.$auth.user.email,this.userProfile)
        
        } ,  
       methods: {
           toggleVisible() {
               this.display = !this.display;
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
    width: 33%;
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