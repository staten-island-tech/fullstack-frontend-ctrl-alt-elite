<template>
<div class="bruh">
    <button @click="snackBar" > click </button>
    <div id="snackBar">
    <p class="text-white">Welcome, {{ this.$auth.user.name }} {{this.$auth.user.picture }}</p>
    </div>
</div>
</template>
<script>
export default {
    methods: {
        snackBar () {
            document.getElementById("snackBar").className = "show";
            setTimeout();
        }
    }
}
</script>
<style scoped>
#snackBar {
    visibility: hidden;
    /* min-width: 25px; */
    text-align: center;
    left: 50%;
    bottom: 1rem;
    padding: 2rem;
    background-color: black;
    color: white;
}

#snackBar.show {
    visibility: visible;
    animation: fadeIn 0.5s, fadeOut 0.5s 2.5s;
}
@keyframes fadeIn {
    from { bottom:0; opacity: 0;} 
    to { bottom: 30px; opacity:1;}
}

@keyframes fadeOut {
    from { bottom: 30px; opacity: 0;  }
    to { bottom: 0px; opacity: 0;}
}
</style>
