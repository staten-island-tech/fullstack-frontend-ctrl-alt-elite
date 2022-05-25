<template>
    <div class="flex items-center justify-center">
        <button class="bg-d-primary text-white font-bold mx-4 cursor-pointer h-6 w-6 text-center flex items-center justify-center" @click="newProject" ><font-awesome-icon :icon="['fas', 'plus']" class="text-base rounded text-white"></font-awesome-icon></button>
    </div>
</template>
<script>
export default {
    methods: {
        newProject(){
         this.$store.commit("PUSH_HTML", "")
            this.$store.commit("PUSH_CSS", "")
            this.$store.commit("PUSH_JS", "")
            this.$store.commit("PUSH_TITLE", "")
            this.$store.commit("PUSH_DESCR", "")
            this.$store.commit("newProject", true)
            this.$store.commit("isNotYourProject", false)
            this.$router.push("Project")
        }
    }
}
</script>
<style>
#NewProjectBtn:hover {
    transform: scale(1.2);
    transition: all .2s ease-in-out;
}
</style>