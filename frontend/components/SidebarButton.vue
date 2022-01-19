<template>
<div class="container">

    <div id="mySidebar" class="bg-indigo-800 hidden" ref="sidebar">
        <button v-on:click="closeSide()">Close</button>
    </div>

    <div class="text-neutral-50 text-lg">
        <button v-on:click="openSide()" v-if="display" >Open</button>
    </div>
</div>
     
</template>

<script>
export default {
    data() {
        return {
            display: false,
        }
    },
       methods: {

           openSide: function() {
               this.display = !this.display;
           }
    //      openSide:  function () {
    //         this.$refs.sidebar.style.display = "block";
    //    },
    //     closeSide: function () {
    //        this.$refs.sidebar.style.display = "none";
    //     },

},
};

</script>

<style scoped> 
#mySideBar {
    position: relative;
    animation: animateleft 0.4s;
}

@keyframes animateleft {
    from {
        left: -300px;
        opacity: 0;
    }
    to {
        left: 0;
        opacity: 1;
    }
}
</style>