<template>
  <div  id="imageList" class="w-1/2 h-1/2 col object-center text-white justify-center items-center absolute  z-20 bg-white dark:bg-black overflow-auto">
    <div  class="w-full h-full flex col gap-5 flex-wrap">  
    
    
     <div  v-for="image in imageList" :key="image.url"  >

           
             
           <img 
           :src='image'  class="basis-5 rounded-full w-40 h-40 justify-self-center self-center m-1"
             @click="setImage(image)"/>
            
        
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

         "https://images.freeimages.com/images/large-previews/023/geek-avatar-1632962.jpg",
        //  "https://3.files.edl.io/aeb1/20/12/02/154937-46cc468f-b7f4-4bb3-945e-3265bdb605d4.jpg",
           "https://images.freeimages.com/images/large-previews/37e/slow-shutter-speed-1182017.jpg",
           "https://images.freeimages.com/images/large-previews/a31/colorful-umbrella-1176220.jpg",
           "https://images.freeimages.com/images/large-previews/107/green-leaves-1410259.jpg",
           "https://images.freeimages.com/images/large-previews/655/colorful-architecture-1-1216925.jpg",
          "https://images.freeimages.com/images/small-previews/91a/abstract-2-1564490.jpg", 
          
          
          
            
          
         ],
         
       } 
    
    },

  methods: {
 
    setImage(image){
     this.hide();
     this.$parent.userProfile.data.profile_pic =image;
      

   } ,
   hide()
   {
    
    this.$parent.showImageList=true
   }

     }
    
}
</script>

<style scoped>
 

</style>