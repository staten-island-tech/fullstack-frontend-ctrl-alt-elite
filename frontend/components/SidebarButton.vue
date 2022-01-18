<template>
<div class="container">

    <div id="mySidebar" class="bg-indigo-800 hidden">
        <button @click="closeSide()">Close</button>
    </div>

    <div class="text-neutral-50">
        <button  @click="openSide()">Open</button>
    </div>
</div>
     
</template>

<script>
export default {

       methods: {
         openSide:  function () {
               document.getElementById("mySideBar").style.display = "block";
       },
        closeSide: function () {
            document.getElementById("mySideBar").style.display = "none";
        },
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