<template>
    <section class="h-screen" :class="{ dark : this.$store.state.darkMode }">
        <div class="bg-white dark:bg-dark-gray min-h-full h-auto">
            <DefaultNavBar />
            
                <div class="w-full flex flex-row relative">
                    <div class="w-4/5">
                        <!-- <section id="search-page">
                            <h2>Search for a book!</h2>
                            <form class="search-form">
                                <input 
                                class="search-bar" 
                                type="text" 
                                placeholder="Search..."
                                >
                                <input class="submit-btn" type="submit">
                            </form>
                        </section> -->
                        <div class="my-4">
                            <div class=" flex flex-row justify-between justify-items-center ">
                                <Slideshow/>
                            </div>
                        </div>

                        <div class="my-4">
                            <h1 class="m-1 text-black dark:text-light-gray">Trending</h1>
                            <div class="flex flex-row justify-between justify-items-center ">
                                <Slideshow/>
                            </div>
                        </div>
                     
                    </div>
                    <div class="w-1/5 h-4/5">
                        <div class="fixed dark:bg-dark bg-white border-light-gray border dark:border-dark-gray rounded h-5/6 w-1/6 right-10 flex flex-col items-center"> 
                            <h2 class="flex flex-col items-center m-2 p-2 justify-between border-b border-light-gray dark:border-mid-gray width-5/6 text-black dark:text-light-gray text-2xl">Recent Projects </h2>
                            <div class="w-2/3" v-for="project in recent" :key="project">
                                <div class="text-black mb-2 border-b border-light-gray dark:border-mid-gray">
                                    <h3 class="dark:text-white text-xl">{{ project.projectName }}</h3>
                                    <div class="text-medium-gray dark:text-mid-gray flex flex-row justify-between items-center text-center w-full">
                                        <div class="flex flex-row text-sm items-center text-center">
                                            <font-awesome-icon :icon="['far', 'clock']"></font-awesome-icon>
                                            <p class="p-2">{{ project.lastEditted }}</p>
                                        </div>
                                        <NuxtLink to="/Project" class="text-black dark:text-white"><p> View project &#10143;</p></NuxtLink>
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
import Slideshow from '../components/Slideshow.vue'
 
import DBFunctions from "~/DBFunctions";

export default {
  components: { Slideshow },
    
     data(){
       return{ 
         userProfile: { data : ''},
         recent: [
             {
                 projectName: 'Project 1',
                 lastEditted: '3/10/22',
             },
             {
                 projectName: 'Project 2',
                 lastEditted: '3/8/22',
             },
             {
                 projectName: 'Project 3',
                 lastEditted: '3/3/22',
             },
             {
                 projectName: 'Project 4',
                 lastEditted: '2/28/22',
             },
         ],
         homeProjects: [
             {
                 projectName: 'Project 1',
                 lastEditted: '3/10/22',
             },
             {
                 projectName: 'Project 2',
                 lastEditted: '3/8/22',
             },
             {
                 projectName: 'Project 3',
                 lastEditted: '3/3/22',
             },
             {
                 projectName: 'Project 4',
                 lastEditted: '2/28/22',
             },
         ],
         }
      },

   
 async  mounted (){
        try {
            await DBFunctions.getProfile(this.$auth.user.email,this.userProfile)
            
        }catch (error)
        {
           try {
               await DBFunctions.createUser(this.$auth.user) 
           }catch (error)
           {
               window.alert ("error in home page")
           }

        }
        
        
        } ,  
  
    
}
</script>

<style>

.container {
    margin: 0 auto;
    width: 100%;

}

/* body {
       background-color: #1b1b1b;
       color: #e6e6e6;
} */


h1{
    color:white;
    font-size: 1.5rem;
}


</style>