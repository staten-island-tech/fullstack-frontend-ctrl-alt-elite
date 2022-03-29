<template>
  <nav id="projectnav" class="w-full h-1/10 p-4 flex flex-row justify-between items-center bg-gray-500">
    <input v-model="title" placeholder="Title" type="text" class="h-1/10 w-1/10 p-4 flex justify-center items-center text-lg bg-transparent"> 
    <img src="" class="h-2/3 w-1/10 right-1/2 bg-black">
    <div class="h-2/3 w-1/4 flex justify-between items-center">
      <button class="p-4 text-lg" @click="run">Run</button>
      <button class="p-4 text-lg" @click="settings">Settings</button>
      <button class="p-4 text-lg" @click="save">Save</button>
      <button class="p-4 text-lg">Publish</button>
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
      } catch (error) {
        window.alert(error)
      }
    }
  }
}
</script>