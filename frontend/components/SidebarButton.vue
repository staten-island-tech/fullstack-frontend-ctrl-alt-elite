<template>
<div class="container">
    <div id="buttons">
    
    <div class="option1" @click = "toggleVisible"> ☰ </div>
    <div v-if = "display" class="option2" > Settings </div>
    <div v-if = "display" class="option3" > Profile </div>

    </div>
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
    color: blue;
    width: 10px;
    height: 10px;
    position: relative;
    cursor: pointer;
    display: flex;
    float: left;
    flex-direction: column;
    justify-content: flex-start;
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