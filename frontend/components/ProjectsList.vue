<template>
  <div class="flex items-center justify-center flex-col">
    <h1 class="text-black dark:text-white" >{{projects.length}}  projects found </h1> 
     <div class="flex flex-col md:flex-row justify-center w-2/3">
         <div class="flex flex-row w-full md:w-3/4">
            <input 
            v-model="searchArgs" type="search" 
            class="form-control relative flex-auto block h-10 w-3/4  sm:w-full px-3 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" >
            <button  class=" py-2 px-4 rounded text-gray-900 font-bold bg-gradient-to-r from-purple-300 to-blue-700 hover:from-pink-500 hover:to-yellow-500  " @click="searchProjects" >Search</button>
         </div>
          <button  class="py-2 px-4 rounded text-gray-900 font-bold bg-gradient-to-r from-purple-300 to-blue-700 hover:from-pink-500 hover:to-yellow-500  " @click="resetProjects" >Reset</button>
      </div>
    <div Class="flex flex-wrap relative flex-row justify-center px-4"  >
      <div v-for="(item,index) in projects" :key="item._ID">
        <ProjectCard2 v-if="index+1 >= start && index+1 <=end" :item="item" :user-info="userInfo" class="m-2" /> 
      </div>
    </div>
    <div>
      <button v-if="start > pageLimit" class="bg-gray-700 hover:bg-gray-500 px-6 py-2 mt-2 rounded text-white" @click="previousPage">Previous</button>
      <button v-if="end < total " class=" bg-gray-700 hover:bg-gray-500 px-6 py-2 mt-2 rounded text-white" @click="nextPage"> Next </button> 
    </div>
  </div>
</template>

<script>
export default {
  props: {
  projectsList : {      // user id 
    type:Array,
    required:true,
  },
  userInfo:{
    type: Object,
    required: true
  }
},
   data(){
      return{ 
     //   userInfo: Object,
        allProjects: Array,
        projects: Array,
        pageLimit:6,
        searchArgs: "",
        start: 1,
        total: 1,
        end : 1
       
         
      }
      },
      
      mounted() {
        // if (typeof(this.$parent.projects.list) === 'undefined' || this.$parent.projects.list === null )
        // {
        //   this.$router.push({name: "Profile"})
        // }
        // this.$parent.Link1=false
        // this.$parent.Link2=false
        // this.$parent.Link3=true        
        // this.$store.commit('updateProfileChild',0)
        // // this.$parent.projectsList = this.$parent.projects.list;
        // this.userInfo = this.initScroll()
        this.projects = this.allProjects=this.projectsList;
       this.initScroll()
        
  },
  methods: {  
    searchProjects()   {
      this.projects = this.allProjects.filter(project => project.project_title.match(new RegExp(this.searchArgs, 'i') ) )
      
      this.initScroll()
     
    },
    resetProjects(){
      
      this.searchArgs='';
       this.projects = this.allProjects;
     
      this.initScroll();
       
    },
    initScroll(){
     
      this.start = 1;
      this.total= this.projects.length
      this.end = this.total <this.pageLimit ? this.total : this.pageLimit 
       
    },
    previousPage(){
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
