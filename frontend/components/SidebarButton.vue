<template>
<div class="container">

    <div id="mySidebar" class="bg-indigo-800 hidden">
        <button onclick="closeSide()">Close</button>
    </div>
    <div>
        <button class="text-neutral-50" onclick="openSide()">Open</button>
    </div>
</div>
     
</template>

<script>
export default {

       methods: {
         openSide:  function openSide() {
               document.getElementById("mySideBar").style.display = "block";
       },
        closeSide: function closeSide() {
            document.getElementById("mySideBar").style.display = "none";
        },
},
};

</script>

<style scoped> 
</style>