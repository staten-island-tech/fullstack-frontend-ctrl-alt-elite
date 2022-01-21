<template>
  <nav class="w-full h-1/10 p-4 bg-gray-500">
    <button class="float-right" @click="updateFrame">Run</button>
  </nav>
</template>

<script>
export default {
  methods:{
    updateFrame(){
      const htmlCode = document.getElementById('html').value
      // const cssCode = document.getElementById('css').value
      const iframe = document.getElementById('frame').contentWindow.document
      iframe.src = "data:text/html;charset=utf-8," + encodeURI(htmlCode)
    }
  }
}
</script>
