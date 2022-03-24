<template>
  <div >
      <h1>Projects  </h1> 
    
       
      <div class="flex flex-column">
         <input type="search" v-model="searchArgs" class=" form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none text-black" >
          <button @click="searchProjects()" class="py-2 px-4 rounded text-gray-900 font-bold bg-gradient-to-r from-purple-300 to-blue-700 hover:from-pink-500 hover:to-yellow-500 mt-2 "  >Search</button>
      </div>
   

      <div Class="flex relative flex-row justify-items-center space-x-4 "  >

      
      

        <span v-for="item in projects.list" :key="item._ID"    >
               <ProjectCard2 :item="item" />    
        </span>
        
        </div>
     <!-- <DefaultNavBar /> -->
  </div>
</template>

<script>

import DBFunctions from "~/DBFunctions";
 
export default {
   props: {
       userid: {      // user id 
           type:String,
           required:true,
       }
   },
   data(){
       return{ 
         projects:
         {list: []},
         abc:"",
        searchArgs: ""
         }
      },

   
   mounted ()
   { this.getProjects()
   } ,   
    
    

  methods: {
      async getProjects() {
      try {
        const userData = {userID:this.userid}
        const response = await fetch(`http://localhost:5000/getProjects`, {
          method: 'POST',
           
          body: JSON.stringify(userData), // Adding headers to the request headers:
          headers: { 'Content-type': 'application/json; charset=UTF-8' },
        })
        
        const data = await response.json();
        // this.uniqueID = data.uniqu;
        this.projects.list= data.projects
        
        
      } catch (error) {
         
      }
    },
    async searchProjects()   {
      
      await DBFunctions.searchProjects(this.searchArgs, this.projects)
      window.alert(JSON.stringify(this.projects.list))
    },
    

     }
    
}
</script>

<style>
table, th, td {
  border: 1px solid black;
  border-collapse: collapse;
}

</style>