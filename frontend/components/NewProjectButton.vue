<template>
    <div>
        <button class="border-t border-mid-gray dark:text-white text-black flex items-center pl-6 absolute bottom-3" @click="newProject">+</button>
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