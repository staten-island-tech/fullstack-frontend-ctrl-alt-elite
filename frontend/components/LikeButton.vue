<template>
<div class="like-button">
    <button 
    
    @click= "toggleLike">❤️</button>
    <div class="likes"> </div>
<!-- 
    v-attr="disabled: submitted" -->
</div>
</template>
<script>
export default {
   data() {
       return {
        //    number : 0,
        liked : false,
       };
   },
    methods: {
        toggleLike() {
            // if like button is pressed, initiate dislike button phase
            if (this.liked) {
                this.unlikePhoto();

            // else if pressed, initiate like button phase
            } else {
                this.likePhoto();
            }



            // number goes up by one

            // 

            this.liked = ! this.liked;


            // this.number ++;

            // document.querySelector(".likes").innerHTML = this.number;
        },
        likePhoto() {
            this.submitted = true;
        },
        unlikePhoto() {

        }
    }
}
    </script>
