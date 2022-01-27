<template>
  <section class="h-screen w-screen">
    <projectsNavBar/>
    <div id="edit-container" class="h-2/5 w-full flex row">
        <div class="h-full w-1/3">
          <AceEditor v-model="contentHTML" lang="html" theme="twilight" @init="editorInit"></AceEditor>
        </div>
        <div class="h-full w-1/3">
          <AceEditor v-model="contentCSS" lang="css" theme="twilight" @init="editorInit"></AceEditor>
        </div>
        <div class="h-full w-1/3">
          <AceEditor v-model="contentJS" lang="javascript" theme="twilight" @init="editorInit"></AceEditor>
        </div>
    </div>
    <iframe id='frame' class="h-1/2 w-full bg-green-500"></iframe>
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
        editor.renderer.setShowGutter(true)
        editor.setOptions({
          fontSize: '1.5rem',
        })
      },
    }
}
</script>
