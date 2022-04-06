<template>
 
    <div id="buttons" class="relative">
    
    <div class="option1" @click = "toggleVisible"> ☰ </div>
    <div v-if = "display" class="option2" > Settings </div>
    <!-- <NuxtLink v-if = "display" class="option3" to="/EditProfile">Profile</NuxtLink> -->
    <NuxtLink v-if = "display" class="option3" to="/Profile"  > Profile</NuxtLink> 
     <!-- <div v-if = "display" class="option3" @click ="$router.push({name:'Profile', params:{email:$auth.user.email}})" > profile </div> -->
     
    <div v-if = "display" class="option4" >  <LogoutButton/> </div>

    <font-awesome-icon v-if="!display" class="text-black dark:text-gray-100" :icon="['fas', 'bars']"  @click="toggleVisible"/>
    <Sidebar v-if="display" class="relative"/>
    </div>
 

</template>

<script>
export default {
   
    data() {
        return {
            display: false,
        };
    },
    mounted()
    { 
        window.alert("side bar ")
         this.$store.commit('updateOtherIDInfo',{email:this.$auth.user.email,mongo_id:''});
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
    /* padding: 1rem; */
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