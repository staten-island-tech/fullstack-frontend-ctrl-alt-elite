<template>
    <section class="h-screen" :class="{ dark : this.$store.state.darkMode }">
        <div class="bg-l-bg-secondary dark:bg-d-bg-primary min-h-full h-auto">
            <DefaultNavBar class="fixed"/>
                <div class="w-full flex flex-row">
                    <div class="w-5/6 min-h-screen h-auto flex items-center justify-center m-6">
                        <div class="w-full min-h-screen h-auto flex flex-row flex-wrap justify-center">
                            <!-- SEARCH RESULTS -->
                            <!-- <div class="w-full min-h-screen h-auto flex flex-row flex-wrap items-center justify-center">
                                 <ProjectCard v-for="project in homeProjects" :key="project" :project="project" class="m-4"/>
                            </div>-->

                            <!-- DEFAULT HOME VIEW BEFORE SEARCH -->
                            <!-- <ProjectCard v-for="(userProjects, key) in homeProjects" :key="key" :project="userProjects" class="m-4"/> -->


                            <div class="relative mt-12">
                                 <div class="search-bar">
                        <input type="text" v-model="search" placeholder="Find a project" v-for="project in projects" :key="project"> 
                        <button  class="py-2 px-4 rounded text-gray-900 font-bold bg-gradient-to-r from-purple-300 to-blue-700 hover:from-pink-500 hover:to-yellow-500 mt-2 " @click="searchProjects" >Search</button>
          <button  class="py-2 px-4 rounded text-gray-900 font-bold bg-gradient-to-r from-purple-300 to-blue-700 hover:from-pink-500 hover:to-yellow-500 mt-2 " @click="resetProjects" >Reset</button>  

                    </div>

                                <div class="bg-l-bg-primary dark:bg-d-bg-secondary p-6 pb-2 m-6">
                                    <h2 class="text-black dark:text-white text-2xl" >Trending</h2>
                                    <Slideshow :projects="homeProjects" class="mb-6"/>
                                </div>
                                <div class="bg-l-bg-primary dark:bg-d-bg-secondary p-6 pb-2 m-6">
                                    <h2 class="text-black dark:text-white text-2xl">Following</h2>
                                    <Slideshow :projects="homeProjects" class="mb-6"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="w-1/5 h-4/5 z-20">
                        <div class="fixed bg-l-bg-primary dark:bg-d-bg-secondary h-5/6 w-1/6 right-20 top-20 flex flex-col items-center darkBorder"> 
                            <h2 class="flex flex-col items-center m-2 p-2 justify-between border-b border-light-gray dark:border-mid-gray width-5/6 text-black dark:text-light-gray text-2xl">Recent Projects </h2>
                            <div v-for="(project, key) in recent" :key="key" class="w-2/3">
                                <div :id="project.project_title" class="text-black mb-2 border-b border-light-gray dark:border-mid-gray">
                                    <h3 class="dark:text-white text-xl">{{ project.project_title }}</h3>
                                   <!----> <div class="text-medium-gray dark:text-mid-gray flex flex-row justify-between items-center text-center w-full">
                                        <div class="flex flex-row text-sm items-center text-center">
                                            <font-awesome-icon :icon="['far', 'clock']"></font-awesome-icon>
                                            <p class="p-2">{{ project.updatedAt }}</p>
                                        </div>
                                        <button class="text-black dark:text-white" @click="toProjects"><p> View project &#10143;</p></button>
                                    </div>
                                </div>
                            </div>
                            <NuxtLink to="/ProjectAll" class="text-black dark:text-light-gray"><p> View all projects...</p></NuxtLink>
                            <NuxtLink to="/Project" class="border-t border-mid-gray dark:text-white text-black flex items-center pl-6 absolute bottom-3">
                                <font-awesome-icon :icon="['fas', 'circle-plus']"></font-awesome-icon>
                                <p class="p-2">Create New Project</p>
                            </NuxtLink>
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

    
     data(){
       return{ 
         userProfile: { data : ''},
         recent: [
             
         ],
          projects: {list: []},
        //   info: {
        //     followers:0,
        //     following:0,
        //     projects:0,
        //     },
         homeProjects: [
             {
                project_title: 'Project 1',
                user: 'Bob'
             },
             {
                project_title: 'Project 2',
                user: 'Tom'
             },
             {
                project_title: 'Project 3',
                user: 'Tim'
             },
             {
                project_title: 'Project 4',
                user: 'Sam'
             },
             {
                project_title: 'Project 5',
                user: 'Ham'
             },
             {
                project_title: 'Project 6',
                user: 'Jam'
             },
             {
                project_title: 'Project 7',
                user: 'Kam'
             },
             {
                project_title: 'Project 7',
                user: 'Kam'
             },
         ],
         }
    },
    async mounted (){

        
        try {
            await DBFunctions.getProfile(this.$auth.user.email,this.userProfile)  ;
            const parsedProfile = JSON.parse(JSON.stringify(this.userProfile))
            this.$store.commit("updateOtherIDInfo", {mongo_id:parsedProfile.data._id,email:parsedProfile.data.user_id})
            await DBFunctions.getProjects(this.$store.state.otherIDInfo.mongo_id, this.recent)
            await DBFunctions.searchProjects("search", this.projects);
            console.log(this.projects)
            console.log(this.projects.list)

            } catch (error) {
            
               try {
                await DBFunctions.createUser(this.$auth.user) ;
                const parsedProfile = JSON.parse(JSON.stringify(this.userProfile))
                this.$store.commit("updateOtherIDInfo", {mongo_id:parsedProfile.data._id,email:parsedProfile.data.user_id})
               } catch (error)  {
            
                 window.alert ("error in home page")
        
               }
            }

       // await DBFunctions.getInfo(this.$auth.user.email,this.info);
        await DBFunctions.getProfile(this.$auth.user.email,this.userProfile)
      //  this.$store.commit('updateFollowInfo', this.info)
           
    },  
    methods: {
        toProjects(e){
            const data = {
                projects: this.recent,
                projectName: e.path[3].id
            }
            this.$store.dispatch("viewProject", data)
            this.$store.commit("updateProject")
            this.$router.push("Project")
        },

      async searchProjects(){
           try {
   await DBFunctions.searchProjects(`search`, this.projects)
            console.log(this.projects)
               
           } catch (error) {
               alert(`Something went wrong, please try again`)
              
               
           }
        
        }
    }
    
}
</script>

<style scoped>

.container {
    margin: 0 auto;
    width: 100%;

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

</style>