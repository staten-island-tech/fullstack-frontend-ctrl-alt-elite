<template>
  <nav class="w-full h-1/10 flex flex-row justify-between items-center bg-d-bg-primary text-white">
  <div class="w-1/2 flex flex-row py-2 items-center  border-1">
    <NuxtLink to="/Home"><img class=" mx-4 h-8 sm:h-12 pl-1 sm:pl-2 items-center" src="../assets/codeverse-logo-shortened.png"></NuxtLink>
    <div class="flex flex-col items-center ">
      <div class="flex flex-row items-center">
        <input v-model="title" placeholder="Title" type="text" class="h-1/12 w-32 ml-5 flex justify-center items-center test-sm sm:text-md bg-transparent rounded"> 
        
      </div>
      <NuxtLink to="/Profile"><input v-model="userProfile.data.name" placeholder="Username" type="text" :readonly="!ownProfile" class="h-1/12 w-5/6 sm:w-full flex justify-center items-center text-xs sm:text-sm bg-transparent hover:text-gray-400 text-black cursor-pointer" :class="{'focus:outline-none':!ownProfile}"  ></NuxtLink>
    </div>
  </div>
 
    <div v-if="$store.state.otherUserProject === false" class="h-2/3 w-1/2 sm:1/3 md:w-2/5 xl:w-1/4 flex justify-around items-center">
      <button class="hidden md:flex w-auto bg-gray-500 hover:bg-gray-400 text-white  py-2 px-4 rounded text-sm md:text-md" @click="run">Run</button>
      <button class="md:hidden flex w-auto bg-gray-500 hover:bg-gray-400 text-white  py-2 px-4 rounded text-sm md:text-md" @click="run"><font-awesome-icon :icon="['fas', 'play']"/></button>
      <button class="hidden md:flex bg-gray-500 hover:bg-gry-400 text-white py-2 px-4 rounded w-auto text-sm md:text-md" @click="save"> Save</button>
       <button class="md:hidden flex w-auto bg-gray-500 hover:bg-gray-400 text-white  py-2 px-4 rounded text-sm md:text-md" @click="save"><font-awesome-icon :icon="['fas', 'floppy-disk']"/></button>
      <button class="hidden md:flex w-auto bg-gray-500 hover:bg-gray-400 text-white  py-2 px-4 rounded text-sm md:text-md" @click="settings"> Settings</button>
       <button class="md:hidden flex w-auto bg-gray-500 hover:bg-gray-400 text-white  py-2 px-4 rounded text-sm md:text-md" @click="settings"><font-awesome-icon :icon="['fas', 'gear']"/></button>
      <button class="hidden md:flex w-auto bg-gray-500 hover:bg-gray-400 text-white  py-2 px-4 rounded text-sm md:text-md">Publish</button>
      <img class="hidden md:flex basis-5 rounded-full h-10 justify-self-center self-center m-1 " :src="userProfile.data.profile_pic">
    </div>
    <div v-else-if="$store.state.otherUserProject === true">   
      <button class="w-auto bg-gray-500 hover:bg-gray-400 text-white  py-2 px-4 rounded text-sm md:text-base" @click="run">Run</button>
      <button class="w-auto bg-gray-500 hover:bg-gray-400 text-white  py-2 px-4 rounded text-sm md:text-base" @click="settings">Settings</button>
      <button class="w-auto bg-gray-500 hover:bg-gray-400 text-white  py-2 px-4 rounded text-sm md:text-base" @click="copy">Copy</button>
    </div>

</nav>
</template>

<script>
import LikeButton from './LikeButton.vue';
import DBFunctions from "~/DBFunctions";
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
