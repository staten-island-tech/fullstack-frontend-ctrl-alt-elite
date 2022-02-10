<template>
<div id="snackBar">
<p class="text-white">Welcome, {{ this.$auth.user.name }}</p>
</div>
</template>
<script>
</script>
<style scoped>
#snackBar {
    /* visibility: hidden; */
    min-width: 25px;
    text-align: center;
    left: 50%;
    bottom: 1rem;
    padding: 2rem;
    background-color: black;
    color: white;
}
</style>
