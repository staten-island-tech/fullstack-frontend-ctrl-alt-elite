<template>
  <section id="project" class="h-screen w-screen relative flex flex-col justify-center " :class="{ dark : this.$store.state.darkMode }">
    <projectsNavBar/>
    <div id="projectdiv" class="h-9/10 w-full flex flex-col">
      <div id="editcontainer" class="hidden h-40/1 w-full sm:flex bg-d-bg-primary text-medium-gray border-t border-d-bg-secondary flex-row ">
        <div id="one" class="w-1/3 h-full flex flex-col">
          <div id="oneLabel" class="flex flex-row items-center ml-10 bg-d-bg-secondary w-20 p-1 text-md justify-center border-t-4 border-mid-gray h-1/12">
            <font-awesome-icon icon="fa-brands fa-html5" class="px-1 text-red-600"/>
            <h1>HTML</h1>
          </div>
            <AceEditor ref="editor1" v-model="contentHTML" lang="html" theme="twilight" @init="editorInit" @input="pushHTML"></AceEditor>
        </div>
        <div id="two" class="w-1/3 h-full flex flex-col">
          <div id="twoLabel" class="flex flex-row items-center ml-10 bg-d-bg-secondary text-md w-20 p-1 pr-2 justify-center border-t-4 border-mid-gray h-1/12">
            <font-awesome-icon icon="fa-solid fa-star-of-life" class="px-1 text-blue-600" />
            <h1>CSS</h1>
          </div>
          <AceEditor ref="editor2" v-model="contentCSS" lang="css" theme="twilight" @init="editorInit" @input="pushCSS"></AceEditor>
        </div>
        <div id="three" class="w-1/3 h-full flex flex-col">
          <div id="threeLabel" class="flex flex-row items-center ml-10 bg-d-bg-secondary text-md w-20 p-1 justify-center border-t-4 border-mid-gray h-1/12">
            <font-awesome-icon icon="fa-solid fa-code" class="px-1 text-yellow-600"/>
            <h1>JS</h1>
          </div>
          <AceEditor ref="editor3" v-model="contentJS" lang="javascript" theme="twilight" @init="editorInit" @input="pushJS"></AceEditor>
        </div>
      </div>
      <div class="flex sm:hidden flex-col">
        <div class=" flex flex-row h-10 text-gray-300 justify-start bg-d-bg-primary border-t border-d-bg-secondary">
          <div id="tab1" class="flex flex-row items-center ml-5 bg-d-bg-secondary w-20 p-1 text-md justify-center border-t-4 border-mid-gray h-1/12" @click="changeLanguage">
            <font-awesome-icon icon="fa-brands fa-html5" id="logo1" class="px-1 text-red-600"/>
            <h2 id="html">HTML</h2>
          </div>
          <div id="tab2" class="flex flex-row items-center ml-5 bg-d-bg-secondary text-md w-20 p-1 pr-2 justify-center border-t-4 border-mid-gray h-1/12"  @click="changeLanguage">
            <font-awesome-icon icon="fa-solid fa-star-of-life" id="logo2" class="px-1 text-blue-600" />
            <h2 id="css">CSS</h2>
          </div>
          <div id="tab3" class="flex flex-row items-center ml-5 bg-d-bg-secondary text-md w-20 p-1 justify-center border-t-4 border-mid-gray h-1/12"  @click="changeLanguage">
            <font-awesome-icon icon="fa-solid fa-code" id="logo3" class="px-1 text-yellow-600"/>
            <h2 id="js">JS</h2>
          </div>
        </div>
        <div id="mobileContainer" class="h-40/1 w-full sm:flex bg-d-bg-primary text-medium-gray border-t border-d-bg-secondary flex-col ">
          <div id="mobile1" class="flex w-full h-full cursor-pointer">
            <AceEditor ref="editor1" v-model="contentHTML" lang="html" theme="twilight" @init="editorInit" @input="pushHTML"></AceEditor>
          </div>
          <div id="mobile2" class="hidden w-full h-full cursor-pointer">
            <AceEditor ref="editor2" v-model="contentCSS" lang="css" theme="twilight" @init="editorInit" @input="pushCSS"></AceEditor>
          </div>
          <div id="mobile3" class="hidden w-full h-full cursor-pointer">
            <AceEditor ref="editor3" v-model="contentJS" lang="javascript" theme="twilight" @init="editorInit" @input="pushJS"></AceEditor>
          </div>
        </div>
        <div id="mobileContainer" class="h-40/1 w-full sm:flex bg-d-bg-primary text-medium-gray border-t border-d-bg-secondary flex-row ">
          <div>
            <AceEditor ref="editor1" v-model="contentHTML" lang="html" theme="twilight" @init="editorInit" @input="pushHTML"></AceEditor>
          </div>
          <div>
            <AceEditor ref="editor2" v-model="contentCSS" lang="css" theme="twilight" @init="editorInit" @input="pushCSS"></AceEditor>
          </div>
          <div>
            <AceEditor ref="editor3" v-model="contentJS" lang="javascript" theme="twilight" @init="editorInit" @input="pushJS"></AceEditor>
          </div>
        </div> -->
      </div>
    <iframe id='iframe' class="h-50 w-full"></iframe>
    </div>
    <div id="settingdiv" class="w-full h-full justify-center items-center absolute bg-transparent z-20 hidden" @click="saveSetting">
      <div id="settings" class="h-1/2 w-1/3 flex flex-col justify-evenly items-center border-2 bg-gray-400 rounded">
        <!-- <div class="h-1/10 w-full flex flex-row">
          <button class="h-full w-1/2 bg-white text-gray-700 rounded p-2" @click="lightMode">Light</button>
          <button class="h-full w-1/2 bg-gray-700 text-white rounded p-2" @click="darkMode">Dark</button>
        </div> -->
        <h2 class="text-2xl hidden md:flex bolded">Orientation:</h2>
        <div class="h-1/5 w-5/6 hidden md:flex flex-row">
          <button id="left" class="h-full w-1/3" @click="editorOrientation">
            <font-awesome-icon icon="fa-solid fa-caret-left" class="fa-4x" id="orientation1"/>
          </button>
          <button id="middle" class="h-full w-1/3" @click="editorOrientation">
            <font-awesome-icon icon="fa-solid fa-caret-up" class="fa-4x" id="orientation2"/>
          </button>
          <button id="right" class="h-full w-1/3" @click="editorOrientation">
            <font-awesome-icon icon="fa-solid fa-caret-right" class="fa-4x" id="orientation3"/>
          </button>
          <!-- <font-awesome-icon icon="fa-solid fa-caret-up" id="middle" class="h-full w-1/3 fa-3x" @click="editorOrientation"/>
          <font-awesome-icon icon="fa-solid fa-caret-right" id="right" class="h-full w-1/3 fa-3x" @click="editorOrientation"/> -->
        </div>
        <div class="h-1/10 w-full flex flex-row ">
          <span class="h-full w-3/4 m-auto flex items-center justify-center text-xl border-2 bg-white">Font Size</span>
          <input v-model.number="fontsize" type="number" step=".1" min="0" class="h-full w-3/4 flex text-center justify-center text-xl border-2 bg-white">
        </div>
        <div class="flex flex-row justify-evenly">
          <a class="inline-block text-xl select-none text-gray-600" @click="projectSettings" v-if="this.$store.state.otherUserProject === false"><font-awesome-icon icon="fa-solid fa-pen" /></a>
          <a class="inline-block text-xl text-red-500 select-none" @click="remove" v-if="this.$store.state.otherUserProject === false"><font-awesome-icon icon="fa-solid fa-trash-can" /></a>
        </div>     
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
import DBFunctions from "~/DBFunctions";
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
      userProfile: { data : ''}, 
    }
  },
  async mounted(){
    try {
      let editor1 = this.$refs.editor1.editor
      let editor2 = this.$refs.editor2.editor
      let editor3 = this.$refs.editor3.editor
      editor1.setValue(this.$store.state.codeHTML)
      editor2.setValue(this.$store.state.codeCSS)
      editor3.setValue(this.$store.state.codeJS)
      if (this.$store.state.otherIDInfo.mongo_id === undefined || this.$store.state.otherIDInfo.email === undefined){
        await DBFunctions.getProfile(this.$auth.user.email,this.userProfile)  ;
        const parsedProfile = JSON.parse(JSON.stringify(this.userProfile))
        this.$store.commit("updateOtherIDInfo", {mongo_id:parsedProfile.data._id,email:parsedProfile.data.user_id})
      }
    } catch (error) {
      console.log(error);
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
            iframe.srcdoc = 
            `<html lang="en">
              <head>
                  <meta charset="UTF-8">
                  <meta http-equiv="X-UA-Compatible" content="IE=edge">
                  <meta name="viewport" content="width=device-width, initial-scale=1.0">
                  <title>I See You Inspecting</title>
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
        require('brace/snippets/text')   
        require('brace/snippets/html')                
        require('brace/mode/javascript') 
        require('brace/snippets/javascript')   
        require('brace/mode/css') 
        require('brace/snippets/css')   
        require('brace/theme/twilight')
        require('brace/ext/language_tools')
        editor.setOptions({
          fontSize: "1rem",
          showGutter: true,
          enableBasicAutocompletion: true,
          enableLiveAutocompletion: true,
          enableSnippets: true,
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
      darkMode() {
            this.$store.commit('toggleMode');
        },
        lightMode() {
            this.$store.commit('toggleMode')
        },
      // Editor orientation 
      editorOrientation(e){
        const editorOne = document.getElementById("one")
        const editorTwo = document.getElementById("two")
        const editorThree = document.getElementById("three")
        const oneLabel = document.getElementById("oneLabel")
        const twoLabel = document.getElementById("twoLabel")
        const threeLabel = document.getElementById("threeLabel")
        const projectDiv = document.getElementById("projectdiv")
        const editorContainer = document.getElementById("editcontainer")
        const iframe = document.getElementById("iframe")
        if (e.srcElement.id === "left" || e.srcElement.id === "orientation1"){
          projectDiv.style.flexDirection = "row"
          editorContainer.style.width = "35%"
          editorContainer.style.height = "100%"
          editorContainer.style.flexDirection = "column"
          editorOne.style.width = "100%"
          editorTwo.style.width = "100%"
          editorThree.style.width = "100%"
          oneLabel.style.marginLeft = "0%"
          twoLabel.style.marginLeft = "0%"
          threeLabel.style.marginLeft = "0%"
          oneLabel.style.height = "15%"
          twoLabel.style.height = "15%"
          threeLabel.style.height = "15%"
          editorOne.style.flexDirection = "row"
          editorTwo.style.flexDirection = "row"
          editorThree.style.flexDirection = "row"
          iframe.style.width = "65%"
          iframe.style.height = "100%"
        } else if (e.srcElement.id === "middle" || e.srcElement.id === "orientation2") {
          editorOne.style.width = "33.333%"
          editorTwo.style.width = "33.333%"
          editorThree.style.width = "33.333%"
          projectDiv.style.flexDirection = "column"
          editorContainer.style.width = "100%"
          editorContainer.style.height = "40vh"
          editorContainer.style.flexDirection = "row"
          editorOne.style.flexDirection = "column"
          editorTwo.style.flexDirection = "column"
          editorThree.style.flexDirection = "column"
          iframe.style.width = "100%"
          iframe.style.height = "50vh"
          oneLabel.style.marginLeft = "2.5rem"
          twoLabel.style.marginLeft = "2.5rem"
          threeLabel.style.marginLeft = "2.5rem"
            oneLabel.style.height = "9%"
          twoLabel.style.height = "9%"
          threeLabel.style.height = "9%"
        } else if (e.srcElement.id === "right" || e.srcElement.id === "orientation3") {
          editorOne.style.width = "100%"
          editorTwo.style.width = "100%"
          editorThree.style.width = "100%"
          projectDiv.style.flexDirection = "row-reverse"
          editorContainer.style.width = "35%"
          editorContainer.style.height = "100%"
          editorContainer.style.flexDirection = "column"
          editorOne.style.flexDirection = "row"
          editorTwo.style.flexDirection = "row"
          editorThree.style.flexDirection = "row"
          iframe.style.width = "65%"
          iframe.style.height = "100%"
          oneLabel.style.marginLeft = "0%"
          twoLabel.style.marginLeft = "0%"
          threeLabel.style.marginLeft = "0%"
          oneLabel.style.height = "15%"
          twoLabel.style.height = "15%"
          threeLabel.style.height = "15%"
        }
      },
      changeLanguage(e){
        const html = document.getElementById("mobile1")
        const css = document.getElementById("mobile2")
        const js = document.getElementById("mobile3")
        if (e.srcElement.id === "tab1" || e.srcElement.id === "html" || e.srcElement.id === "logo1") {
          html.style.display = "flex"
          css.style.display = "none"
          js.style.display = "none" 
        } else if (e.srcElement.id === "tab2" || e.srcElement.id === "css" || e.srcElement.id === "logo2") {
          html.style.display = "none"
          css.style.display = "flex"
          js.style.display = "none"
        } else if (e.srcElement.id === "tab3" || e.srcElement.id === "js" || e.srcElement.id === "logo3") {
          html.style.display = "none"
          css.style.display = "none"
          js.style.display = "flex"
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
      async remove(){
        try {
          console.log("hello");
          await DBFunctions.deleteProject({
            "email": this.$store.state.otherIDInfo.email,
            "project_id": this.$store.state.project_id
          })
          this.$router.push("Home")
        } catch (error) {
          console.log(error);
        }
      }
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
