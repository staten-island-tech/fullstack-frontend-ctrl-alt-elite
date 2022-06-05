<template>
  <div class="h-60 w-96 flex flex-col justify-center bg-l-bg-secondary dark:bg-d-bg-primary rounded border dark:border-slate border-light-gray cursor-pointer" :class="{ light : !this.$store.state.darkMode }">
    <div class="h-3/4 w-full relative z-50 " @click="viewProject">
      <iframe id="iframe" class="h-full w-full absolute bg-l-bg-secondary pointer-events-none dark:bg-d-bg-primary flex justify-center items-center rounded-t" :srcdoc="src"></iframe>
    </div>
    <div class="h-1/4 w-full flex flex-col justify-center">
      <h3 class="text-black dark:text-white w-full z-10 flex justify-center px-3 font-bold overflow-hidden cursor-pointer hover:underline duration-500" @click="viewProject" :id="project.projects._id">{{ project.projects.project_title }}</h3>
      <div class="flex flex-row justify-between pl-2 pr-3">
        <div class="flex flex-row justify-center items-center">
          <h4 class="text-black dark:text-gray-100 pr-2">{{totalLikes}}</h4>
          <LikeButton :project="project" @getLikes="emitChild" @updateLikes="changeLikes"/>
        </div>
        <h4 class="text-black dark:text-gray-100 cursor-pointer hover:underline duration-500" :id="project._id" @click="viewProfile">{{ project.name }}</h4>
        <FollowButton :following="following" :user="project.user_id"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    project: Object,
    following: Array
  },
  data(){
    return{
      src: `
              <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>I See You Inspecting</title>
                <style>${this.project.projects.published_code.css}</style>
              </head>
              ${this.project.projects.published_code.html}
            `,
      totalLikes: Number
    }
  },
  methods:{
    viewProject(){
      const data = {
        projects: this.project.projects,
        projectName: this.project.projects.project_title
      }
      this.$store.dispatch("viewOtherProject", data)
      this.$store.commit("newProject", false)
      if (this.project.user_id !== this.$auth.user.email){
        this.$store.commit("isNotYourProject", true)
      } else if (this.project.user_id === this.$auth.user.email){
        this.$store.commit("isNotYourProject", false)
      }
      this.$store.commit("otherUsername", this.project.name)
      this.$store.commit("otherEmail", this.project.user_id)
      this.$store.commit("otherMongo_id", this.project._id)
      this.$router.push("/Project")
    },
    viewProfile(){
      this.$store.commit('updateOtherIDInfo', {mongo_id:this.project._id,email:this.project.user_id});
      this.$store.commit('updateReload')
      if (this.project.user_id !== this.$auth.user.email){
        this.$store.commit("isNotYourProject", true)
      } else if (this.project.user_id === this.$auth.user.email){
        this.$store.commit("isNotYourProject", false)
      }
      this.$router.push({name: "Profile"})
    },
    emitChild(value){
      this.totalLikes = value
    },
    changeLikes(value){
      this.totalLikes += value
    }
  }
}
</script>

<style scoped>
.light {
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}

#iframe {
  background-color: white;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
