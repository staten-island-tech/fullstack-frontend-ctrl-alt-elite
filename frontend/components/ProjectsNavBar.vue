<template>
  <nav id="projectnav" class="w-full h-1/10 flex flex-row justify-between items-center dark:bg-d-bg-primary bg-l-bg-primary">
    <div class="w-1/4 h-full flex flex-row">
      <Sidebar/>
      <div class="w-1/2 flex justify-center items-center ml-3">
        <input v-model="title" placeholder="Title" type="text" class="h-1/2 w-full p-4 flex justify-center items-center text-lg bg-transparent dark:text-gray-400 text-black">
      </div> 
    </div>
    <NuxtLink to="/Home"><img class="h-16 mx-4" src="../assets/logo-placeholder.png"></NuxtLink>
    <div class="h-2/3 w-1/4 flex justify-between items-center">
      <button class="navButtons p-4 text-lg dark:text-gray-200 text-gray-900" @click="run">Run</button>
      <button class="navButtons p-4 text-lg dark:text-gray-200 text-gray-900" @click="settings">Settings</button>
      <button class="navButtons p-4 text-lg dark:text-gray-200 text-gray-900" @click="save">Save</button>
      <button class="navButtons p-4 text-lg dark:text-gray-200 text-gray-900">Publish</button>
    </div>
  </nav>
</template>

<script>
import DBFunctions from "~/DBFunctions";
export default {
  data(){
    return{
      
    }
  },
  computed:{
    title:{
      get(){
        return this.$store.state.projectTitle
      },
      set(value){
        this.$store.commit("PUSH_TITLE", value)
      }
    },
  },
  async mounted(){
    
  },
  methods:{
    run(){
      try {
        const iframe = document.getElementById("iframe")
        iframe.srcdoc= 
        `<html lang="en">
          <head>
              <meta charset="UTF-8">
              <meta http-equiv="X-UA-Compatible" content="IE=edge">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <title>You Inspecting</title>
              <style>${this.css}</style>
          </head>
          <body>
              ${this.html}
              <script>${this.js}<\/script>
          </body>
        </html>`
      } catch (error) {
        alert(error)
      }
    },
    settings(){
      const settings = document.getElementById("settingdiv")
      settings.style.display = "flex"
    },
    async save(){
      try {
        if (this.$store.state.newProject === true){
          await DBFunctions.createProject(
            {
              "_id": this.$store.state.otherIDInfo.mongo_id,
              "project_title": this.$store.state.projectTitle,
              "description": this.$store.state.projectDescription,
              "html": this.$store.state.codeHTML,
              "css": this.$store.state.codeCSS,
              "js": this.$store.state.codeJS,
            }
          )
        }
        if (this.$store.state.newProject === false){
          await DBFunctions.updateProject({
            "_id": this.$store.state.otherIDInfo.mongo_id,
            "project_id": this.$store.state.project_id,
            "new_title": this.$store.state.projectTitle,
            "new_description": this.$store.state.projectDescription,
            "new_html": this.$store.state.codeHTML,
            "new_css": this.$store.state.codeCSS,
            "new_js": this.$store.state.codeJS,
          })
        }
      } catch (error) {
        window.alert(error)
      }
    }
  }
}
</script>