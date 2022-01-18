<template>
  <section class="h-screen w-screen">
    <projectsNavBar/>
    <div class="h-2/5 w-full flex row">
        <div contenteditable="true" class="h-full w-1/3 p-4 align-top bg-gray-500"></div>
        <div contenteditable="true" class="h-full w-1/3 p-4 bg-red-500"></div>
        <div contenteditable="true" class="h-full w-1/3 p-4 bg-yellow-500"></div>
    </div>
    <iframe class="h-3/5 w-full bg-green-500"></iframe>
  </section>
</template>

<script>
import projectsNavBar from "../components/ProjectsNavBar.vue" 
export default {
    components:{
        projectsNavBar
    }
}
</script>
