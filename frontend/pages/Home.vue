<template>
    <section class="h-screen" :class="{ dark : this.$store.state.darkMode }">
        <div class="bg-gray-200 dark:bg-dark-gray h-full">
            <DefaultNavBar />
            <!-- <p class="text-white">hello {{ this.$auth.user }}</p> -->
                <div class="container">
                    <div class="my-4">
                        <div class="flex items-center w-1/5 m-1 justify-between">
                            <h1 class="text-black dark:text-light-gray">Recent Projects</h1> 
                            <NuxtLink to="/profile/Projects" class="text-black dark:text-light-gray link link-underline link-underline-black"><p> View all &#10143;</p></NuxtLink>
                        </div>
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
                <Snackbar/>
                <!-- <p class="text-white">Hello {{ this.$auth.user.name }}</p> -->
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
            //    window.alert ("error in home page")
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