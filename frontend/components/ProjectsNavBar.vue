<template>
  <nav id="projectnav" class="w-full h-1/10 p-4 flex flex-row justify-between items-center bg-gray-500">
    <input v-model="title" placeholder="Title" type="text" class="h-1/10 w-1/5 p-4 flex justify-center items-center text-lg bg-transparent"> 
    <NuxtLink to="/Home"><img class="h-16 mx-4" src="../assets/logo-placeholder.png"></NuxtLink>
    <div class="h-2/3 w-1/4 flex justify-between items-center">
      <button class="p-4 text-lg" @click="run">Run</button>
      <button class="p-4 text-lg" @click="settings">Settings</button>
      <button class="p-4 text-lg" @click="save">Save</button>
      <button class="p-4 text-lg" @click="publish">Publish</button>
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
              <style>${this.$store.state.codeCSS}</style>
          </head>
          <body>
              ${this.$store.state.codeHTML}
              <script>${this.$store.state.codeJS}<\/script>
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
        this.run()
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
    },
    async publish(){
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
              "private_boolean": false
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
            "private_boolean": false
          })
        }
        this.$router.push("Home")
      } catch (error) {
        console.log(error);
      }
    }
  }
}
</script>