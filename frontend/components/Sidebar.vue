<template>
  <div id="nav" class="h-screen">
      <font-awesome-icon v-if="!display" class="p-4 w-10 text-black dark:text-gray-100 text-xl" :icon="['fas', 'bars']"  @click="toggleVisible"/>
    <div :class="{ shown : display }" class="h-screen w-0 duration-100 bg-l-bg-primary dark:bg-d-bg-secondary absolute z-10">
        <div v-if="display" class="h-full w-screen md:w-full border-r border-medium-gray dark:border-d-bg-accent bg-l-bg-primary dark:bg-d-bg-primary">
            <div class="flex flex-row justify-between">
                <font-awesome-icon class="p-4 w-10 text-2xl text-black dark:text-gray-100" :icon="['fas', 'xmark']"  @click="toggleVisible"/>
               <img class="flex h-16 mx-4 align-center justify-center" src="../assets/codeverse-logo.png">
            </div> 
            <div class="flex flex-col align-center justify-center m-2 h-1/3 w-11/12 border-b border-t border-medium-gray dark:border-d-bg-accent">
                <img class="rounded-full h-24 justify-self-center self-center m-1 " :src="info.profilePic">
                <div class="text-black dark:text-light-gray flex items-center justify-center flex-col text-center">
                    <p class="font-bold ">{{info.name}}</p>
                   <div class="text-sm flex flex-row justify-between m-2 w-1/2 md:w-2/3 text-black dark:text-white">
                       <p>Following  {{info.following}}</p> 
                        <p>Followers  {{info.followers}}</p>
                   </div>
                   <p id="profile"  class="py-2 px-4 rounded text-gray-900 font-bold bg-gradient-to-r from-purple-300 to-primary hover:from-pink-500 hover:to-yellow-500 my-2 text-lg" @click="getProfile">View Profile</p>
                </div>
            </div>
            <div class="h-1/10 text-black dark:text-white flex items-center flex-col w-11/12 border-b border-medium-gray dark:border-d-bg-accent m-2">
                <p>Theme</p>
                <div class="flex flex-row items-center">
                    <font-awesome-icon :icon="['fas', 'sun']" :class="{ selectedLight : !this.$store.state.darkMode }" class="text-lg text-mid-gray"></font-awesome-icon>
                    <ThemeButton class="text-3xl m-2"/>
                    <font-awesome-icon :icon="['fas', 'moon']" :class="{ selectedDark : this.$store.state.darkMode, light : !this.$store.state.darkMode }" class="text-lg text-slate"></font-awesome-icon>
                </div>
            </div>
            <div class="flex flex-col dark:text-white text-black h-1/2 ml-4 md:ml-0.5 text-base md:text-lg">
                <div class="h-1/6">
                    <NuxtLink to="/Home" class="hover:bg-purple-300 hover:text-white bg-gradient-to-r hover:from-primary duration-75 h-full w-19/20 flex items-center pl-6 rounded-r-full">
                        <font-awesome-icon :icon="['fas', 'house']"></font-awesome-icon>
                        <p class="p-2">Home</p>
                    </NuxtLink>
                </div>
                <div class="h-1/6">
                    <NuxtLink to="/Profile/Projects" class="hover:bg-purple-300 hover:text-white bg-gradient-to-r hover:from-primary duration-75 h-full w-full flex items-center pl-6 rounded-r-full">
                        <font-awesome-icon :icon="['fas', 'pen']" ></font-awesome-icon>
                        <p class="p-2">View Projects</p>
                    </NuxtLink>
                </div>
                <div class="h-1/6">
                    <NuxtLink to="/Project" class="hover:bg-purple-300 hover:text-white bg-gradient-to-r hover:from-primary duration-75 h-full w-full flex items-center pl-6 rounded rounded-r-full">
                        <font-awesome-icon :icon="['fas', 'circle-plus']"></font-awesome-icon>
                        <p class="p-2">New Project</p>
                    </NuxtLink>
                </div>
                <button class="text-base md:text-lg text-red-400 h-1/6 flex items-center pl-6" @click="logout">
                    <font-awesome-icon :icon="['fas', 'arrow-right-from-bracket']"></font-awesome-icon>
                    <LogoutButton class="text-left p-2"/>
                </button>
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
          
            info: {
                followers:0,
                following:0,
                projects:0,
                name:'',
                profilePic:'',
                mongoID:'',
                userID:'',
            },
            recentProjects :[],
            list: [],
        };
    },
       computed: {
     
    reload: {
      get() {
       
      return this.$store.state.reload;
      }
    }
       
},
 watch: {
    
    reload(newValue, oldValue) {
      this.refresh();
     
    }
  },
     mounted (){
        
        this.$store.commit('updateReload')
        
        } ,
    methods: {
        async refresh()
        {
             
                
             await DBFunctions.getInfo(this.$auth.user.email,this.info);

        },
        toggleVisible() {
            this.display = !this.display;
             
        },
        getProfile (){
                
          
           this.$store.commit("updateOtherIDInfo", {mongo_id:this.info.mongoID,email:this.info.userID})
           this.$store.commit('updateReload')
           this.$router.push({name: 'Profile'});
          
         } ,
        
          
    //    methods: {
    //        toggleVisible() {
    //            this.display = !this.display;
    //        },
           async logout() {
        await this.$auth.logout()
       
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

.selectedDark {
    color:white;
} 

.selectedLight {
    color:black;
}

.light {
    color: #9e9e9e;
}

a.nuxt-link-exact-active {
  border-left: solid 3px #3500D3;
}

#profile.nuxt-link-exact-active {
  border-left: none;
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