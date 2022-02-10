<template>
  <nav class="w-full h-1/10 p-4">
    <title></title>
    <img>
    <button class="float-right" @click="run">Run</button>
  </nav>
</template>

<script>
export default {
  computed:{
    html(){
      return this.$store.state.codeHTML
    },
    css(){
      return this.$store.state.codeCSS
    },
    js(){
      return this.$store.state.codeJS
    }
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
              <title>Document</title>
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
    }
  }
}
</script>