<template>
    <section class="h-screen" :class="{ dark: this.$store.state.darkMode }">
        <div class="bg-l-bg-secondary dark:bg-d-bg-primary min-h-full h-auto">
            <DefaultNavBar class="fixed"/>
            <div class="w-full flex flex-col-reverse xl:flex-row items-center">
                <div class="w-full xl:w-5/6  flex  justify-center m-6">
                    <div class="w-full  flex flex-row flex-wrap justify-center">
                        <div class="xl:mt-12">
                            <input v-model="searchArgs" type="search" class="form-control"/>
                            <button class="py-2 px-4 rounded text-gray-900 font-bold bg-gradient-to-r from-purple-300 to-blue-700 hover:from-pink-500 hover:to-yellow-500 mt-2" @click="searchProjects">Search</button>
                            <button class="py-2 px-4 rounded text-gray-900 font-bold bg-gradient-to-r from-purple-300 to-blue-700 hover:from-pink-500 hover:to-yellow-500 mt-2" @click="resetProjects">Reset</button>
                            <div class="search-bar"></div>
                            <div class="bg-l-bg-primary dark:bg-d-bg-secondary p-6 pb-2 m-6" v-show="visibility">
                                <h2 class="text-black dark:text-white text-2xl">Trending</h2>
                                <Slideshow :project="trendingProjects" :following="userProfile.data.following" class="mb-6" />
                            </div>
                            <div class="bg-l-bg-primary dark:bg-d-bg-secondary p-6 pb-2 m-6" v-show="visibility">
                                <h2 class="text-black dark:text-white text-2xl">Following</h2>
                                <Slideshow :project="followingProjects" :following="userProfile.data.following" class="mb-6" />
                            </div>
                            <div class="bg-l-bg-primary dark:bg-d-bg-secondary p-6 pb-2 m-6" v-show="results">
                                <h2 class="text-black dark:text-white text-2xl">
                                    <Slideshow :project="projects" :following="userProfile.data.following" class="mb-6" />
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="w-4/5 xl:w-1/5 h-80 xl:h-4/5 xl:z-20 flex justify-center items-end mt-12 xl:mt-0">
                    <div class="xl:fixed bg-l-bg-secondary dark:bg-d-bg-secondary h-5/6 xl:w-1/6 xl:right-16 2xl:right-20 xl:top-20 flex flex-col items-center darkBorder w-4/5"> 
                        <h2 class="flex flex-col items-center m-2 p-2 justify-between border-b border-light-gray dark:border-mid-gray width-5/6 text-black dark:text-light-gray text-xl xl:text-2xl">Recent Projects </h2>
                        <div class="flex flex-col items-center overflow-scroll w-full overflow-x-hidden h-3/4" :class="{ sidebarDark : this.$store.state.darkMode, sidebarLight : !this.$store.state.darkMode }">
                            <div v-for="(project, key) in recent" :key="key" class="w-3/4">
                                <div :id="project.project_title" class="text-black mb-2 border-b border-light-gray dark:border-mid-gray w-full">
                                    <h3 class="dark:text-white text-lg 2xl:text-xl">{{ project.project_title }}</h3>
                                <div class="text-medium-gray dark:text-mid-gray flex flex-col items-center text-center w-full">
                                        <div class="flex flex-row items-center justify-start text-center text-xs w-full">
                                            <font-awesome-icon class="clock" :icon="['far', 'clock']"></font-awesome-icon>
                                            <p class="p-2 text-left">{{ project.updatedAt }}</p>
                                        </div>
                                        <button class="text-black dark:text-white text-sm xl:text-base w-full text-right" @click="toProjects"><p> View project &#10143;</p></button>
                                    </div>
                                </div>
                            </div>
                            <NuxtLink to="/Profile/Projects" class="text-black dark:text-light-gray"><p> View all projects...</p></NuxtLink>
                        </div>
                        <button class="border-t border-mid-gray dark:text-white text-black flex items-center pl-6 xl:absolute xl:bottom-3" @click="newProject">
                            <font-awesome-icon class="plus" :icon="['fas', 'circle-plus']"></font-awesome-icon>
                            <p class="p-2">Create New Project</p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>


<script>
import Slideshow from '../components/Slideshow.vue';
import DBFunctions from "~/DBFunctions";

export default {
    components: { Slideshow },
    data() {
        return {
        searchArgs: '',
        projectsList: Array,
        userProfile: { data: '' },
        recent: [],
        trendingProjects: [],
        followingProjects: [],
        searchedProjects: [],
        visibility: true,
        results: false,
        projects: [],
        }
    },
    async mounted (){
        try {
            try { 
                await DBFunctions.getProfile(this.$auth.user.email,this.userProfile) 
            } catch (error) { 
                if (error.code === 999){
                    await DBFunctions.createUser(this.$auth.user,this.userProfile);
                }
                else 
                   throw error; 
            }
            const parsedProfile = JSON.parse(JSON.stringify(this.userProfile))
            this.$store.commit("updateOtherIDInfo", {mongo_id:parsedProfile.data._id,email:parsedProfile.data.user_id})
            await DBFunctions.getProjects(this.$store.state.otherIDInfo.mongo_id, this.recent)
            await DBFunctions.getFollowingProjects(this.$store.state.otherIDInfo.mongo_id, this.followingProjects)
            await DBFunctions.getTrendingProjects(this.trendingProjects) 
            for (let ring of document.getElementsByClassName("lds-dual-ring")){
                ring.style.display = "none"
            }
            } catch (error) {
                try {
                    await DBFunctions.createUser(this.$auth.user) ;
                    const parsedProfile = JSON.parse(JSON.stringify(this.userProfile))
                    this.$store.commit("updateOtherIDInfo", {mongo_id:parsedProfile.data._id,email:parsedProfile.data.user_id})
                } catch (error)  {
                    window.alert ("error - get profile!");
                }    
            }     
    },  
    methods: {
        toProjects(e){
            const data = {
                projects: this.recent,
                projectName: e.path[3].id
            }
            this.$store.dispatch("viewProject", data)
            this.$store.commit("newProject", false)
            this.$store.commit("isNotYourProject", false)
            this.$store.commit("otherEmail", this.$auth.user.email)
            this.$router.push("Project")
        },
        newProject(){
            this.$store.commit("PUSH_HTML", "")
            this.$store.commit("PUSH_CSS", "")
            this.$store.commit("PUSH_JS", "")
            this.$store.commit("PUSH_TITLE", "")
            this.$store.commit("PUSH_DESCR", "")
            this.$store.commit("newProject", true)
            this.$store.commit("isNotYourProject", false)
            this.$store.commit("otherEmail", this.$auth.user.email)
            this.$router.push("Project")
        },
        async searchProjects() {
            try {
                await DBFunctions.searchProjects(this.searchArgs, this.projects)
                // window.alert(JSON.stringify(this.projects.list))
                //this.projects = this.getProjects.projects
                this.results = true
                this.visibility = false
            } catch (error) {
                console.log(error)
            }
        },
        async resetProjects() {
            this.searchArgs = '',
            this.visibility = true,
            this.results = false,
            this.projects = []
        },
        viewProjects (){
            this.$store.commit('updateProfileChild',3)
            this.$router.push({name: 'Profile'});
        } ,
    }  
}
</script>

<style scoped>
@import '@fortawesome/fontawesome-svg-core/styles.css';

.container {
    margin: 0 auto;
    width: 100%;

}

.sidebarDark::-webkit-scrollbar-track {
  background-color: #202020;
}

.sidebarLight::-webkit-scrollbar-track {
  background-color: #fff;
}
/* body {
       background-color: #1b1b1b;
       color: #e6e6e6;
} */
.search-bar{
border-radius: 1rem;
text-align: center;
align-items: center;
}


h1{
    color:white;
    font-size: 1.5rem;
}

.darkBorder {
    border-style: solid;
  border-width: 3px;
  border-image: conic-gradient( magenta, blue, magenta) 1;
}
.hello{
    background-color: aquamarine;
}

/* .clock {
  height: 10px;
}

.plus {
  height: 15px;
} */
</style>
