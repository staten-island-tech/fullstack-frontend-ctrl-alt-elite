<template>
 
    <div id="buttons">
    
        <div class="option" @click = "toggleVisible"> <font-awesome-icon icon="fa-solid fa-bars" /></div>
        <div v-if = "display" class="option" > Settings </div>
    <!-- <NuxtLink v-if = "display" class="option3" to="/EditProfile">Profile</NuxtLink> -->
        <NuxtLink v-if = "display" class="option" to="/Profile">Profile</NuxtLink> 
        <div v-if = "display" class="option4" >  <LogoutButton/> </div>

    </div>
 

</template>

<script>
export default {
    data() {
        return {
            display: false,
        };
    },
       methods: {
           toggleVisible() {
               this.display = !this.display;
               if (display = false) {
                   document.getElementById("buttons").style.width = 0;
               } else {
                   document.getElementById("buttons").style.width = 250px;
               }
           }
},
};
</script>

<style scoped> 
#buttons {
    color: gray;
    position: relative;
    cursor: pointer;
    left: 0;
    flex-direction: column;
    height: 100%;  
    width: 0;
    z-index: 1;
    padding: 1rem;
    display: flex;
    justify-content: flex-start;
    font-size: 1.25rem;
    transition: 0.5s;
}
.option {
    background-color: white;
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