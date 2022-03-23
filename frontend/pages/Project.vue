<template>
  <section id="project" class="h-screen w-screen relative flex flex-col justify-center items-center">
    <projectsNavBar/>
    <div id="projectdiv" class="h-9/10 w-full flex flex-col">
      <div id="editcontainer" class="h-40/1 w-full flex row">
        <div id="one" class="h-full w-1/3">
          <h1>HTML</h1>
          <AceEditor ref="editor1" v-model="contentHTML" lang="html" theme="twilight" @init="editorInit" @input="pushHTML"></AceEditor>
        </div>
        <div id="two" class="h-full w-1/3">
          <AceEditor ref="editor2" v-model="contentCSS" lang="css" theme="twilight" @init="editorInit" @input="pushCSS"></AceEditor>
        </div>
        <div id="three" class="h-full w-1/3">
          <AceEditor ref="editor3" v-model="contentJS" lang="javascript" theme="twilight" @init="editorInit" @input="pushJS"></AceEditor>
        </div>
    </div>
    <iframe id='iframe' class="h-50/1 w-full"></iframe>
    </div>
    <div id="settingdiv" class="w-full h-full justify-center items-center absolute bg-transparent z-20 hidden" @click="saveSetting">
      <div id="settings" class="h-3/5 w-1/3 flex flex-col justify-evenly items-center border-2 bg-gray-500">
        <div class="h-1/10 w-full flex flex-row bg-pink-400">
          <button class="h-full w-1/2 border-2" @click="lightMode">Light</button>
          <button class="h-full w-1/2 border-2" @click="darkMode">Dark</button>
        </div>
        <div class="h-1/5 w-full flex flex-row bg-green-500">
          <button id="left" class="h-full w-1/3 border-2" @click="editorOrientation">Left</button>
          <button id="middle" class="h-full w-1/3 border-2" @click="editorOrientation">Default</button>
          <button id="right" class="h-full w-1/3 border-2" @click="editorOrientation">Right</button>
        </div>
        <div class="h-1/10 w-full flex flex-row ">
          <span class="h-full w-3/4 m-auto flex items-center justify-center text-xl border-2 bg-white">Font Size</span>
          <input v-model.number="fontsize" type="number" step=".1" min="0" class="h-full w-3/4 flex text-center justify-center text-xl border-2 bg-white">
        </div>
        <a class="inline-block text-xl select-none" @click="projectSettings">Settings</a>
        <a class="inline-block text-xl text-red-600 select-none">Delete</a>
      </div>
    </div>
    <div id="projectsettingsdiv" class="h-full w-full justify-center items-center absolute bg-transparent z-20 hidden" @click="saveSetting2">
      <div id="projectsettings" class="h-4/5 w-2/3 flex flex-col justify-evenly items-center border-2 bg-gray-400">
        <input v-model="title" placeholder="Title" type="text" class="h-1/10 w-1/4 p-4">
        <textarea v-model="description" placeholder="Description" type="text" class="h-2/5 w-3/4 p-4"></textarea>
      </div>
    </div>
  </section>
</template>

<script>
import AceEditor from "vue2-ace-editor";
import projectsNavBar from "../components/ProjectsNavBar.vue" 

export default {
    components:{
        projectsNavBar,
        AceEditor
    },
    data(){
      return{
        fontsize:"1",
        contentHTML:"",
        contentCSS:"",
        contentJS:"",
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
      description:{
        get(){
          return this.$store.state.projectDescription
        },
        set(value){
          this.$store.commit("PUSH_DESCR", value)
        }
      }
    },
    created: function(){
      // Replaces CTRL-S to run editor
      document.addEventListener('keydown', e => {
        if (e.ctrlKey && e.key === 's') {
          try {
            e.preventDefault()
            const iframe = document.getElementById("iframe")
            iframe.srcdoc= 
            `<html lang="en">
              <head>
                  <meta charset="UTF-8">
                  <meta http-equiv="X-UA-Compatible" content="IE=edge">
                  <meta name="viewport" content="width=device-width, initial-scale=1.0">
                  <title>You Inspecting</title>
                  <style>${this.contentCSS}</style>
              </head>
              <body>
                  ${this.contentHTML}
                  <script>${this.contentJS}<\/script>
              </body>
            </html>`
          } catch (error) {
              alert(error)
          }
        }
      });
  },
    methods:{
      // Editor config
      editorInit(editor){
        require('brace/mode/html')                
        require('brace/mode/javascript') 
        require('brace/mode/css') 
        require('brace/theme/twilight')
        require('brace/ext/language_tools')
        editor.setOptions({
          fontSize: "1rem",
          showGutter: true,
          enableBasicAutocompletion: true,
          enableLiveAutocompletion: true,
        })
      },
      // Applies user settings to editors
      saveSetting(evt){
        let editor1 = this.$refs.editor1.editor
        let editor2 = this.$refs.editor2.editor
        let editor3 = this.$refs.editor3.editor
        editor1.setOptions({
          fontSize: `${this.fontsize}rem`
        })
        editor2.setOptions({
          fontSize: `${this.fontsize}rem`
        })
        editor3.setOptions({
          fontSize: `${this.fontsize}rem`
        })
        if (evt.target === document.getElementById("settingdiv")){
          document.getElementById("settingdiv").style.display = "none"
        } else return
      },
      // Light and dark modes
      lightMode(){
        document.getElementById("projectnav").style.backgroundColor = "pink"
      },
      darkMode(){
        document.getElementById("projectnav").style.backgroundColor = "gray"
      },
      // Editor orientation 
      editorOrientation(e){
        const editorOne = document.getElementById("one")
        const editorTwo = document.getElementById("two")
        const editorThree = document.getElementById("three")
        const projectDiv = document.getElementById("projectdiv")
        const editorContainer = document.getElementById("editcontainer")
        const iframe = document.getElementById("iframe")
        if (e.srcElement.id === "left"){
          projectDiv.style.flexDirection = "row"
          editorContainer.style.width = "40%"
          editorContainer.style.height = "100%"
          editorContainer.style.flexDirection = "column"
          editorOne.style.width = "100%"
          editorTwo.style.width = "100%"
          editorThree.style.width = "100%"
          iframe.style.width = "60%"
          iframe.style.height = "100%"
        } else if (e.srcElement.id === "middle") {
          editorOne.style.width = "33.333%"
          editorTwo.style.width = "33.333%"
          editorThree.style.width = "33.333%"
          projectDiv.style.flexDirection = "column"
          editorContainer.style.width = "100%"
          editorContainer.style.height = "40vh"
          editorContainer.style.flexDirection = "row"
          iframe.style.width = "100%"
          iframe.style.height = "50vh"
        } else if (e.srcElement.id === "right") {
          editorOne.style.width = "100%"
          editorTwo.style.width = "100%"
          editorThree.style.width = "100%"
          projectDiv.style.flexDirection = "row-reverse"
          editorContainer.style.width = "40%"
          editorContainer.style.height = "100%"
          editorContainer.style.flexDirection = "column"
          iframe.style.width = "60%"
          iframe.style.height = "100%"
        }
      },
      projectSettings(){
        document.getElementById("projectsettingsdiv").style.display = "flex"
      },
      saveSetting2(evt){
        if (evt.target === document.getElementById("projectsettingsdiv")){
          document.getElementById("projectsettingsdiv").style.display = "none"
        } else return
      },
      pushHTML(code){
        this.$store.commit("PUSH_HTML", code)
      },
      pushCSS(code){
        this.$store.commit("PUSH_CSS", code)
      },
      pushJS(code){
        this.$store.commit("PUSH_JS", code)
      },
    }
}
</script>

<style>
::-webkit-scrollbar{
  width: 10px;
}
::-webkit-scrollbar-track{
  background: #000;
}
::-webkit-scrollbar-thumb {
  background:grey; 
}
::-webkit-scrollbar-thumb:hover {
  background: rgb(167, 167, 167); 
}
</style>