<template>
  <div class="flex flex-col justify-center items-center">
      <h1 class="text-black dark:text-white">Projects  </h1> 
      <div Class="flex flex-row justify-items-center space-x-4 flex-wrap justify-center"  >
        
       <span v-for="item in projects" :key="item._ID" >
               <ProjectCard2 :item="item" class="m-2"/>
                   
                  
                
             
        </div>
         <p  v-if="end < total " @click="nextPage" class=" mt-5 bg-gray-700 hover:bg-gray-500 text-white py-2 px-4 rounded h-5"> Next </p> 
        
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
          pageLimit:3,
          searchArgs: "",
          start :1,
          end :0,
          total:0,
        
         }
      },
       
computed: {
    
    
       
},
   
   mounted ()
   { this.getProjects()
   } ,   
    

  methods: {
      async getProjects() {
      try {
         await DBFunctions.getProjects(this.$store.state.otherIDInfo.mongo_id,this.projects);
         this.total =this.projects.list.length;
         this.end = this.total <this.pageLimit ? this.total : this.pageLimit 
      
      } catch (error) {
         
      }
    },
    async searchProjects()   {
      
      await DBFunctions.searchProjects(this.searchArgs, this.projects)
      window.alert(JSON.stringify(this.projects.list))
    },
    previousPage()
    {
      this.end =this.start - 1  ;
      this.start = this.start - this.pageLimit ;
      
    },
    nextPage() {
        this.start = this.end+ 1;
        if (this.end + this.pageLimit >this.total )
            this.end= this.total 
        else
           this.end +=this.pageLimit;

        }
    

     }
    
}
</script>

<style>
table, th, td {
  border: 1px solid black;
  border-collapse: collapse;
}

</style>