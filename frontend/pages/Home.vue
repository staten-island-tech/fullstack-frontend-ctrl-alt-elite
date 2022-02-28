<template>
    <section>
    <DefaultNavBar />
  <!-- <p class="text-white">hello {{ this.$auth.user }}</p> -->
    <div class="container">
        <div class="my-4">
            <div class="flex items-center w-1/5 m-1 justify-between">
                <h1 >Recent Projects</h1> 
                <NuxtLink to="ProjectAll"><p> View all &#10143;</p></NuxtLink>
            </div>
            <div class=" flex flex-row justify-between justify-items-center ">
                <ProjectCard/>
                <ProjectCard/>
                <ProjectCard/>
            </div>
        </div>

        <div class="my-4">
            <h1 class="m-1">Trending</h1>
            <div class="flex flex-row justify-between justify-items-center ">
                <ProjectCard/>
                <ProjectCard/>
                <ProjectCard/>
            </div>
        </div>
    </div>
    <!-- <p class="text-white">Hello {{ this.$auth.user.name }}</p> -->

    </section>
</template>

<script>
 
import DBFunctions from "~/DBFunctions";

export default {
    
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

body {
       background-color: #1c1c1c;
       color: #e6e6e6;
}


h1{
    color:white;
    font-size: 1.5rem;
}
</style>