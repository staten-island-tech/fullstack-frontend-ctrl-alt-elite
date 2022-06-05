<template>
  <ProjectsList :key="$parent.projects.list"  :projectsList="$parent.projects.list" :userInfo="$parent.info"></ProjectsList>
</template>

<script>
export default {
  mounted() {
    this.$parent.Link1=false
    this.$parent.Link2=false
    this.$parent.Link3=true        
    this.$store.commit('updateProfileChild', 0)
  },
}
</script>

