<template>
  <div id="nav" class="h-screen w-1/2 relative">
      <font-awesome-icon v-if="!display" class="p-4 w-10 text-black dark:text-gray-100 text-xl" :icon="['fas', 'bars']"  @click="toggleVisible"/>
    <div :class="{ shown : display }" class="h-screen w-0 duration-100 bg-gray-50 dark:bg-black absolute z-10">
        <div v-if="display" class="h-full w-full border-r border-medium-gray dark:border-slate">
            <div class="flex flex-row justify-between">
                <font-awesome-icon class="p-4 w-10 text-2xl text-black dark:text-gray-100" :icon="['fas', 'xmark']"  @click="toggleVisible"/>
                <NuxtLink to="/Home"><img class="h-16 mx-4" src="../assets/logo-placeholder.png"></NuxtLink>
            </div> 
            <div class="flex flex-col align-center justify-center m-2 h-1/4 w-11/12 border-b border-t border-medium-gray dark:border-slate">
                <img class="rounded-full h-24 justify-self-center self-center m-1 " :src="userProfile.data.profile_pic">
                <div class="text-white dark:text-light-gray flex items-center justify-center flex-col text-center">
                    <p class="font-bold ">{{userProfile.data.name}}</p>
                   <div class="text-sm flex flex-row justify-between m-2 w-2/3 text-black dark:text-white">
                       <p>Following  {{info.following}}</p> 
                        <p>Followers  {{info.followers}}</p>
                   </div>
                   <p  class="text-black dark:text-white border-black dark:border-white border-2 h-8 px-4 rounded-md py-1 w-1/2 text-sm m-2"  @click="getProfile">View Profile</p>
                </div>
            </div>
            <div class="h-1/10 text-black dark:text-white flex items-center flex-col w-11/12 border-b border-medium-gray dark:border-slate m-2">
                <p>Theme</p>
                <div class="flex flex-row items-center">
                    <font-awesome-icon :icon="['fas', 'sun']" :class="{ selectedLight : !this.$store.state.darkMode }" class="text-lg text-slate"></font-awesome-icon>
                    <ThemeButton class="text-3xl m-2"/>
                    <font-awesome-icon :icon="['fas', 'moon']" :class="{ selectedDark : this.$store.state.darkMode, light : !this.$store.state.darkMode }" class="text-lg text-slate"></font-awesome-icon>
                </div>
            </div>
            <div class="flex flex-col dark:text-white text-black h-2/3">
                <NuxtLink to="/Home" class="h-1/10  flex items-center pl-6">
                    <font-awesome-icon :icon="['fas', 'house']"></font-awesome-icon>
                    <p class="p-2">Home</p>
                </NuxtLink>
                <NuxtLink to="ProjectAll" class="h-1/10 flex items-center pl-6">
                    <font-awesome-icon :icon="['fas', 'pen']" ></font-awesome-icon>
                    <p class="p-2">View Projects</p>
                </NuxtLink>
                <NuxtLink to="/Project" class="h-1/10 flex items-center pl-6">
                    <font-awesome-icon :icon="['fas', 'circle-plus']"></font-awesome-icon>
                    <p class="p-2">New Project</p>
                </NuxtLink>
                <div class="text-red-400 h-1/10 flex items-center pl-6">
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
            userProfile: { data : ''},
            info: {
                followers:0,
                following:0,
                projects:0,
                name:'',
            },
            recentProjects :[],
        };
    },

    methods: {
        async toggleVisible() {
            this.display = !this.display;
            if (this.display)
            {
                await DBFunctions.getProfile(this.$auth.user.email,this.userProfile)  ;
     
                await DBFunctions.getInfo(this.$auth.user.email,this.info);
            }
        },
        getProfile (){
                
          
           this.$store.commit("updateOtherIDInfo", {mongo_id:this.userProfile.data._id,email:this.userProfile.data.user_id})
           this.$router.push({name: 'Profile'});
          
         } 
        
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

.selectedDark {
    color:white;
} 

.selectedLight {
    color:black;
}

.light {
    color: #9e9e9e;
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