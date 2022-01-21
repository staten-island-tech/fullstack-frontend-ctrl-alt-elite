<template>
  <section class="h-screen w-screen">
    <projectsNavBar/>
    <div id="edit-container" class="h-2/5 w-full flex row">
        <div class="h-full w-1/3 p-4 bg-indigo-500">
          <span class="h-1/10 w-full">HTML</span>
          <textarea id="html" class="h-9/10 w-full bg-transparent"></textarea>
        </div>
        <div class="h-full w-1/3 p-4 bg-red-500">
          <span class="h-1/10 w-full">CSS</span>
          <textarea id="css" class="h-9/10 w-full bg-transparent"></textarea>
        </div>
        <div class="h-full w-1/3 p-4 bg-yellow-500">
          <span class="h-1/10 w-full">Javascript</span>
          <textarea id="js" class="h-9/10 w-full bg-transparent"></textarea>
        </div>
    </div>
    <div id="output-container" class="h-1/2 w-full">
      <iframe id='frame' class="h-full w-full bg-green-500"></iframe>
    </div>
  </section>
</template>

<script>
import projectsNavBar from "../components/ProjectsNavBar.vue" 
export default {
    components:{
        projectsNavBar
    },
    methods:{
    }
}
</script>
