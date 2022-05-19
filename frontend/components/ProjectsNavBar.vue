<template>
  <nav class="w-full h-1/10 flex flex-row justify-between items-center bg-d-bg-primary text-white">
  <div class="w-1/2 flex flex-row py-2 items-center  border-1">
    <NuxtLink to="/Home"><img class="h-20 pl-2 items-center" src="../assets/codeverse-logo-shortened.png"></NuxtLink>
    <div class="flex flex-col items-center ">
      <div class="flex flex-row items-center">
        <input v-model="title" placeholder="Title" type="text" class="h-1/12 w-32 ml-5 flex justify-center items-center text-md bg-transparent rounded"> 
        <font-awesome-icon icon="fa-solid fa-pen" class="px-3" />
      </div>
      <NuxtLink to="/Profile"><input v-model="userProfile.data.name" placeholder="Username" type="text" :readonly="!ownProfile" class="h-1/12 w-full flex justify-center items-center text-sm bg-transparent hover:text-gray-400 text-black cursor-pointer" :class="{'focus:outline-none':!ownProfile}"  ></NuxtLink>
    </div>
  </div>
 
    <div class="h-2/3 w-1/4 flex justify-around items-center" v-if="this.$store.state.otherUserProject === false">
      <button class="bg-gray-500 hover:bg-gray-400 text-white  py-2 px-4 rounded  text-base" @click="run">Run</button>
      <button class="bg-gray-500 hover:bg-gry-400 text-white py-2 px-4 rounded  text-base" @click="save"><font-awesome-icon icon="fa-solid fa-floppy-disk" /> Save</button>
      <button class="bg-gray-500 hover:bg-gray-400 text-white  py-2 px-4 rounded text-base" @click="settings"><font-awesome-icon icon="fa-solid fa-gear" /> Settings</button>
      <button class="bg-gray-500 hover:bg-gray-400 text-white  py-2 px-4 rounded text-base">Publish</button>
      <img class="basis-5 rounded-full h-10 justify-self-center self-center m-1 " :src="userProfile.data.profile_pic">
    </div>
    <div v-else-if="this.$store.state.otherUserProject === true">   
      <button class="p-4 text-lg" @click="run">Run</button>
      <button class="p-4 text-lg" @click="settings">Settings</button>
      <button class="p-4 text-lg" @click="copy">Copy</button>
    </div>

</nav>
</template>

<script>
import DBFunctions from "~/DBFunctions";
import LikeButton from './LikeButton.vue';
export default {
  components: { LikeButton },
  data(){
    return{
      savedAlready: false,
      info: {
      profilePic: '',
      name:'',
      },
      userProfile: { data : ""},
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
  },
  async mounted(){
      this.getProfile();
  },
  methods:{
    async getProfile() {
      try {
        await DBFunctions.getProfile(this.$store.state.otherIDInfo.email,this.userProfile)
      } catch {
        window.alert("error")
      }
    },
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
              <style>${this.$store.state.codeCSS}</style>
          </head>
          <body>
              ${this.$store.state.codeHTML}
              <script>${this.$store.state.codeJS}<\/script>
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
    async save(){
      try {
        this.run()
        if (this.$store.state.newProject === true){
          await DBFunctions.createProject(
            {
              "_id": this.$store.state.otherIDInfo.mongo_id,
              "project_title": this.$store.state.projectTitle,
              "description": this.$store.state.projectDescription,
              "html": this.$store.state.codeHTML,
              "css": this.$store.state.codeCSS,
              "js": this.$store.state.codeJS,
            }
          )
        }
        if (this.$store.state.newProject === false){
          await DBFunctions.updateProject({
            "_id": this.$store.state.otherIDInfo.mongo_id,
            "project_id": this.$store.state.project_id,
            "new_title": this.$store.state.projectTitle,
            "new_description": this.$store.state.projectDescription,
            "new_html": this.$store.state.codeHTML,
            "new_css": this.$store.state.codeCSS,
            "new_js": this.$store.state.codeJS,
          })
        }
        this.savedAlready = true
      } catch (error) {
        window.alert(error)
      }
    },
    async publish(){
      try {
        if (this.savedAlready === false){
          if (this.$store.state.newProject === true){
          await DBFunctions.createProject(
            {
              "_id": this.$store.state.otherIDInfo.mongo_id,
              "project_title": this.$store.state.projectTitle,
              "description": this.$store.state.projectDescription,
              "html": this.$store.state.codeHTML,
              "css": this.$store.state.codeCSS,
              "js": this.$store.state.codeJS,
              "private_boolean": false
            }
          )
          }
          if (this.$store.state.newProject === false){
            await DBFunctions.updateProject({
              "_id": this.$store.state.otherIDInfo.mongo_id,
              "project_id": this.$store.state.project_id,
              "new_title": this.$store.state.projectTitle,
              "new_description": this.$store.state.projectDescription,
              "new_html": this.$store.state.codeHTML,
              "new_css": this.$store.state.codeCSS,
              "new_js": this.$store.state.codeJS,
              "private_boolean": false
            })
          }
        }
        this.$router.push("Home")
      } catch (error) {
        console.log(error);
      }
    },
    async copy(){
      try {
        this.$store.commit("newProject", true)
        this.$store.commit("isNotYourProject", false)
        this.$store.commit("PUSH_TITLE", "")
        this.$store.commit("PUSH_DESCR", "")
      } catch (error) {
        console.log(error);
      }
    }
  }
}
</script>
