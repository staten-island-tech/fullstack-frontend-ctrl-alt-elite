<template>
 
    <div id="buttons">
    
    <div class="option1" @click = "toggleVisible"> ☰ </div>
    <div v-if = "display" class="option2" > Settings </div>
    <div v-if = "display" class="option3" > Profile </div>

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
    height: 3rem;  
    width: 100%;
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