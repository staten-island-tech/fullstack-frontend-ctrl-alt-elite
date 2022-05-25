<template>
  <div >
      <h1 class="text-black dark:text-white" >{{projectsList.length}}  projects found </h1> 
    
       
      <div class="flex flex-column">
         <input 
         v-model="searchArgs" type="search" 
         class=" form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" >
          <button  class="py-2 px-4 rounded text-gray-900 font-bold bg-gradient-to-r from-purple-300 to-blue-700 hover:from-pink-500 hover:to-yellow-500 mt-2 " @click="searchProjects" >Search</button>
          <button  class="py-2 px-4 rounded text-gray-900 font-bold bg-gradient-to-r from-purple-300 to-blue-700 hover:from-pink-500 hover:to-yellow-500 mt-2 " @click="resetProjects" >Reset</button>
      </div>
   
   
      <div Class="flex flex-wrap relative flex-row justify-items-center px-4"  >

      <!-- <div class="relative mt-12">
          <div class="bg-l-bg-primary dark:bg-d-bg-secondary p-6 pb-2 m-6">
               
              <Slideshow :projects="$parent.projects.list" class="mb-6"/>
          </div>
        </div> -->
       
        <div v-for="(item,index) in projectsList" :key="item._ID">
          <ProjectCard2 v-if="index+1 >= start && index+1 <=end" :item="item" class="m-2" /> 
        </div>
         <p  v-if="end < total " class=" mt-5 bg-gray-700 hover:bg-gray-500 text-white py-2 px-4 rounded h-5" @click="nextPage" > Next </p> 
        
        </div>
     <!-- <DefaultNavBar /> -->
  </div>
</template>

<script>

 // Project card 2 is passing in solely project while project card is passing in entire object
 
export default {
 
   data(){
      return{ 
        projectsList: Array,   
        pageLimit:5,
        searchArgs: "",
        start: 1,
        end :0,
        total:0,
      }
      },
      mounted() {
        this.$parent.defaultLink=false;
        this.projectsList = this.$parent.projects.list;

        this.initScroll();
  },

  methods: {
      
     
    searchProjects()   {
      this.projectsList = this.$parent.projects.list.filter(project => project.project_title.match(new RegExp(this.searchArgs, 'i') ) )
      

      this.initScroll()
     
    },
    resetProjects()   {
      
      // await DBFunctions.searchProjects(this.searchArgs, this.projects)
      // window.alert(JSON.stringify(this.projects.list))
      this.searchArgs='';
      this.projectsList= this.$parent.projects.list;
     
      this.initScroll();
       
    },
    initScroll()
    {
      this.start = 1;
      this.total =this.projectsList.length;
      this.end = this.total <this.pageLimit ? this.total : this.pageLimit 
       
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