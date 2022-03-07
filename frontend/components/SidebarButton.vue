<template>
 
    <div id="buttons">
    
    <div class="option1" @click = "toggleVisible"> ☰ </div>
    <div v-if = "display" class="option2" > Settings </div>
    <!-- <NuxtLink v-if = "display" class="option3" to="/EditProfile">Profile</NuxtLink> -->
    <NuxtLink v-if = "display" class="option3" to="/Profile">Profile</NuxtLink> 
     
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
           }
},
};
</script>

<style scoped> 
#buttons {
    color: gray;
    position: relative;
    cursor: pointer;
    float: left;
    flex-direction: column;
    height: 4rem;  
    padding: 1rem;
    display: flex;
    justify-content: flex-start;
    font-size: 1.25rem;
 
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