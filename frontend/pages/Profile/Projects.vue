<template>
  <div >
      <h1>Projects  </h1> 
      <div Class="flex flex-row justify-items-center space-x-4 flex-wrap justify-center"  >
        
       <span v-for="item in projects" :key="item._ID" >
               <ProjectCard2 :item="item" class="m-2"/>
                   
                  
                
        </span>
        
        </div>
     <!-- <DefaultNavBar /> -->
  </div>
</template>

<script>

 
export default {
   props: {
       userid: {      // user id 
           type:String,
           required:true,
       }
   },
   data(){
       return{ 
         projects: [],
         abc:""
        
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
          // Adding body or contents to send
          body: JSON.stringify(userData), // Adding headers to the request headers:
          headers: { 'Content-type': 'application/json; charset=UTF-8' },
        })
        // console.log ("I am here");
        const data = await response.json();
        // this.uniqueID = data.uniqu;
        this.projects= data.projects;
        
      } catch (error) {
        // console.log("I dont care");
      }
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