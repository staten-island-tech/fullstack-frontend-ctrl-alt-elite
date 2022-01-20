<template>
<div class="container">
    <div id="buttons">
    <div class="option1" @click = "toggleVisible"> X </div>
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
    width: 60%;
    float: left;
    height: 20%;
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