<template>
  <nav id="projectnav" class="w-full h-1/10 p-4 flex flex-row justify-between items-center bg-gray-500">
    <input v-model="title" placeholder="Title" type="text" class="h-1/10 w-1/10 p-4 flex justify-center items-center text-lg bg-transparent" @keyup="pushtitle">
    <img src="" class="h-2/3 w-1/10 right-1/2 bg-black">
    <div class="h-2/3 w-1/4 flex justify-between items-center">
      <button class="p-4 text-lg" @click="run">Run</button>
      <button class="p-4 text-lg" @click="settings">Settings</button>
      <button class="p-4 text-lg">Save</button>
      <button class="p-4 text-lg">Publish</button>
    </div>
  </nav>
</template>

<script>
export default {
  data(){
    return{
      title: ""
    }
  },
  computed:{
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
    pushtitle(){
      this.$store.commit("PUSH_TITLE", this.title)
    }
  }
}
</script>