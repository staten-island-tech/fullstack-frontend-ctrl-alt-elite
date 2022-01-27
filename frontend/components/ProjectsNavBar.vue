<template>
  <nav class="w-full h-1/10 p-4 bg-gray-500">
    <button class="float-right" @click="run">Run</button>
  </nav>
</template>

<script>
import AceEditor from "vue2-ace-editor";
export default {
  components:{
    AceEditor
  },
  methods:{
    run(){
      console.log(AceEditor);
    }
  }
}
</script>
