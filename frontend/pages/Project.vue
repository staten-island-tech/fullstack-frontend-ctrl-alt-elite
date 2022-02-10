<template>
  <section class="h-screen w-screen">
    <projectsNavBar/>
    <div id="edit-container" class="h-2/5 w-full flex row">
        <div class="h-full w-1/3">
          <AceEditor v-model="contentHTML" lang="html" theme="twilight" @init="editorInit" @input="pushHTML"></AceEditor>
        </div>
        <div class="h-full w-1/3">
          <AceEditor v-model="contentCSS" lang="css" theme="twilight" @init="editorInit" @input="pushCSS"></AceEditor>
        </div>
        <div class="h-full w-1/3">
          <AceEditor v-model="contentJS" lang="javascript" theme="twilight" @init="editorInit" @input="pushJS"></AceEditor>
        </div>
    </div>
    <iframe id='iframe' class="h-1/2 w-full"></iframe>
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
        contentHTML:"",
        contentCSS:"",
        contentJS:""
      }
    },
    methods:{
      editorInit(editor){
        require('brace/mode/html')                
        require('brace/mode/javascript') 
        require('brace/mode/css') 
        require('brace/theme/twilight')
        require('brace/ext/language_tools')
        editor.setOptions({
          fontSize: '1rem',
          showGutter: true,
          enableBasicAutocompletion: true,
          enableLiveAutocompletion: true,
        })
        
      },
      pushHTML(code){
        this.$store.commit("PUSH_HTML", code)
      },
      pushCSS(code){
        console.log(code);
        this.$store.commit("PUSH_CSS", code)
      },
      pushJS(code){
        this.$store.commit("PUSH_JS", code)
      }
    }
}
</script>
