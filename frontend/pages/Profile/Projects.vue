<template>
  <div class="flex items-center justify-center flex-col">
    <h1 class="text-black dark:text-white" >{{$parent.projectsList.length}}  projects found </h1> 
    <div class="flex flex-column justify-center w-2/3">
      <input 
      v-model="searchArgs" type="search" 
      class="form-control relative flex-auto block h-12 w-1/2 px-3 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" @keyup="searchProjects">
      <button  class="py-2 px-4 rounded text-gray-900 font-bold bg-gradient-to-r from-purple-300 to-blue-700 hover:from-pink-500 hover:to-yellow-500 mt-2 ml-1 mr-1" @click="searchProjects" >Search</button>
      <button  class="py-2 px-4 rounded text-gray-900 font-bold bg-gradient-to-r from-purple-300 to-blue-700 hover:from-pink-500 hover:to-yellow-500 mt-2 " @click="resetProjects" >Reset</button>
    </div>
    <div Class="flex flex-wrap relative flex-row justify-center px-4"  >
      <div v-for="(item,index) in $parent.projectsList" :key="item._ID">
        <ProjectCard2 v-if="index+1 >= start && index+1 <=end" :item="item" :userInfo="userInfo" class="m-2" /> 
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
   data(){
      return{ 
        userInfo: Object,
        pageLimit:6,
        searchArgs: "",
        start: 1,
        end :0,
        total:0,
      }
      },
      mounted() {
        // if (typeof(this.$parent.projects.list) === 'undefined' || this.$parent.projects.list === null )
        // {
        //   this.$router.push({name: "Profile"})
        // }
        this.$parent.Link1=false
        this.$parent.Link2=false
        this.$parent.Link3=true        
        this.$store.commit('updateProfileChild',0)
        this.$parent.projectsList = this.$parent.projects.list;
        this.userInfo = this.$parent.info
        this.initScroll();
  },
  methods: {  
    searchProjects()   {
      this.$parent.projectsList = this.$parent.projects.list.filter(project => project.project_title.match(new RegExp(this.searchArgs, 'i') ) )
      

      this.initScroll()
     
    },
    resetProjects(){
      // await DBFunctions.searchProjects(this.searchArgs, this.projects)
      // window.alert(JSON.stringify(this.projects.list))
      this.searchArgs='';
      this.$parent.projectsList= this.$parent.projects.list;
     
      this.initScroll();
       
    },
    initScroll(){
      this.start = 1;
      this.total =this.$parent.projectsList.length;
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