<template>
    <div class="flex items-center justify-center">
        <button class="bg-d-primary text-white font-bold mx-4 cursor-pointer h-6 w-6 text-center flex items-center justify-center" @click="newProject" ><font-awesome-icon :icon="['fas', 'plus']" class="text-base rounded text-white"></font-awesome-icon></button>
    </div>
</template>
<script>
export default {
    methods: {
        newProject(e){
            console.log("helo");
            this.$store.commit("newProject", true)
            this.$router.push("Project")
        }
    }
}
</script>