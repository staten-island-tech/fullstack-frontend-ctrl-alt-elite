<template>
  <div >
      <h1>Projects  </h1> 
    
       
      <div class="flex flex-column">
         <input 
         v-model="searchArgs" type="search" 
         class=" form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none text-black" >
          <button  class="py-2 px-4 rounded text-gray-900 font-bold bg-gradient-to-r from-purple-300 to-blue-700 hover:from-pink-500 hover:to-yellow-500 mt-2 " @click="searchProjects()" >Search</button>
      </div>
   
   
      <div Class="flex flex-wrap relative flex-row justify-items-center px-4"  >

      
       
       <p  v-if="start >pageLimit " @click="previousPage">previous </p>
        <div v-for="(item,index) in projects.list" :key="item._ID"    >
               
               <projectCard2 v-if="index+1 >= start && index+1 <=end" :item="item"  /> 
                
                
             
        </div>
         <p  v-if="end < total " @click="nextPage">next </p> 
        
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