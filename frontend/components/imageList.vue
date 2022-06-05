<template>
  <div  id="imageList" class="w-1/2 h-1/2 col text-white justify-center items-center absolute z-20 bg-white dark:bg-black rounded-5 overflow-auto">
    <div  class="w-full h-full flex col gap-5 flex-wrap">  
      <div  v-for="image in imageList" :key="image.url"  >
        <img :src='image'  class="basis-5 rounded-full w-40 h-40 justify-self-center self-center m-1" @click="setImage(image)"/>
      </div> 
      <button class=" h-10 w-32 mt-5 bg-gray-700 hover:bg-gray-500 text-white py-2 px-4 rounded" @click="hide"> Cancel </button>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{  
      imageList:[
        "https://3.files.edl.io/aeb1/20/12/02/154937-46cc468f-b7f4-4bb3-945e-3265bdb605d4.jpg",
        "https://images.freeimages.com/images/large-previews/023/geek-avatar-1632962.jpg",
        "https://images.freeimages.com/images/large-previews/d1f/lady-avatar-1632967.jpg",
        "https://images.freeimages.com/images/large-previews/7e8/man-avatar-1632965.jpg",
        "https://images.freeimages.com/images/large-previews/cd5/lady-avatar-1632969.jpg",
        "https://images.freeimages.com/images/large-previews/d66/woman-avatar-1632963.jpg",
        "https://images.freeimages.com/images/large-previews/971/basic-shape-avatar-1632968.jpg",
        "https://images.freeimages.com/images/small-previews/962/avatar-man-with-mustages-1632966.jpg",
        "https://images.freeimages.com/images/small-previews/fdd/man-avatar-1632964.jpg",
        "https://i.pinimg.com/originals/02/83/04/0283041631b3ca2a0a6991733b19fa31.png",
        "https://streamsentials.com/wp-content/uploads/2021/01/OMEGALUL-transparent.png",
        "https://streamsentials.com/wp-content/uploads/2020/12/pepega-png.png",
        "https://images.gamebanana.com/img/ico/sprays/617466274d5c8.png",
        "https://toppng.com/uploads/preview/138kib-724x543-1474488198-autre19-happy-face-over-angry-face-meme-11562883310wynv1gw9cz.png"
      ],  
    } 
  },
  methods: {
    setImage(image){
      this.hide();
      this.$parent.userProfile.data.profile_pic =image;
    },
    hide(){
      this.$parent.showImageList=true
    }
  }  
}
</script>
