<template>
  <div class="h-36 w-56 m-6 sm:h-40 sm:w-72 md:h-60 md:w-96 bg-gray-300 dark:bg-black rounded border dark:border-slate border-light-gray" :class="{ light : !this.$store.state.darkMode }">
    <div class="h-4/5 w-full relative z-50 " @click="viewProject">
      <iframe id="iframe" class="h-full w-full absolute bg-white pointer-events-none" :srcdoc="src"></iframe>
    </div>
    <div class="h-1/4 w-full flex flex-row justify-center bg-black">
      <button class="text-white dark:text-white w-full z-10 flex justify-center px-3 font-bold" @click="viewProject">{{item.project_title}} </button>
      <h2 class="text-white dark:text-white mx-1"> {{item.project_likes.length}} </h2> 
          <!-- <i class="fa-regular fa-user w-1/7"></i> -->
    </div>
  </div>
</template>

<script>
export default {
props: {
  item : {      // user id 
    type:Object,
    required:true,
  },
  userInfo:{
    type: Object,
    required: true
  }
},
data(){
    return{
      src: `
              <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>I See You Inspecting</title>
                <style>${this.item.published_code.css}</style>
              </head>
              ${this.item.published_code.html}
            `,
    }
  },
methods:{
  viewProject(){
    this.$store.commit('PUSH_HTML', this.item.published_code.html)
    this.$store.commit('PUSH_CSS', this.item.published_code.css)
    this.$store.commit('PUSH_JS', this.item.published_code.js)
    this.$store.commit('PUSH_PROJECT_ID', this.item._id)
    this.$store.commit('PUSH_TITLE', this.item.project_title)
    this.$store.commit('PUSH_DESCR', this.item.description)
    this.$store.commit("otherUsername", this.userInfo.name)
    this.$store.commit("otherEmail", this.userInfo.userID)
    this.$store.commit("otherMongo_id", this.userInfo.mongoID)
    this.$store.commit("newProject", false)
    this.$router.push("/")
    this.$router.push("/Project")
  },
}
}
</script>

<style>

</style>