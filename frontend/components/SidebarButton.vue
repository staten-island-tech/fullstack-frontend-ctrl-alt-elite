<template>
 
    <div id="buttons" class="relative">
    
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