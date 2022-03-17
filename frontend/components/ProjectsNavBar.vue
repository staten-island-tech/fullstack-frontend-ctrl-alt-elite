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
    html(){
      return this.$store.state.codeHTML
    },
    css(){
      return this.$store.state.codeCSS
    },
    js(){
      return this.$store.state.codeJS
    },
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
    /*
    {
    "project_title": "Ooga Title",
    "description": "OOgga Description",
    "published_code":{
        "html": "<div>Hello</div>",
        "css": "yesy",
        "js": "test"
    }
    }
    */
    async save(){
      try {
        await DBFunctions.createProject(
          {
            "project_title": this.$store.state.projectTitle,
            "description": this.$store.state.projectDescription,
            "published_code": {
              "html": this.html,
              "css": this.css,
              "js": this.js
            }
          }
        )
      } catch (error) {
        window.alert(error)
      }
    }
  }
}
</script>