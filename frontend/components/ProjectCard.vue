<template>
  <div class="h-60 w-96 bg-l-bg-secondary dark:bg-d-bg-primary rounded border dark:border-slate border-light-gray" :class="{ light : !this.$store.state.darkMode }">
    <iframe id="iframe" class="h-3/4 w-full bg-l-bg-secondary dark:bg-d-bg-primary flex justify-center items-center rounded-t" :srcdoc="test"></iframe>
    <div class="h-1/4 w-full flex flex-col justify-center">
      <h3 class="text-black dark:text-white w-full z-10 flex justify-center px-3 font-bold" @click="otherProject" :id="project.projects._id">{{ project.projects.project_title }}</h3>
      <div class="flex flex-row justify-between px-3">
        <LikeButton :project="project"/>
        <h4 class=" text-black dark:text-gray-100" :id="project._id">{{ project.name }}</h4>
        <FollowButton/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    project: Object
  },
  data(){
    return{
      test: `
              <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>I See You Inspecting</title>
                <style>${this.project.projects.published_code.css}</style>
              </head>
              ${this.project.projects.published_code.html}
              <script>${this.project.projects.published_code.js}<\/script>
            `
    }
  },
  methods:{
    otherProject(){
      const data = {
        projects: this.project.projects,
        projectName: this.project.projects.project_title
      }
      this.$store.dispatch("viewOtherProject", data)
      this.$store.commit("newProject", false)
      this.$store.commit("isNotYourProject", true)
      this.$store.commit("otherUsername", this.project.name)
      this.$router.push("/Project")
    }
  }
}
</script>

<style scoped>
.light {
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}

#iframe {
  background-image:linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url("./assets/welcoming-placeholder-bg.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}

</style>
