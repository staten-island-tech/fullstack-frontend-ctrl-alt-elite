<template>
  <div >
     <!-- <DefaultNavBar /> -->

     <p v-if="list == 'undefined' || list.length == 0"> 
       Oh no list is empty 😢
     </p>
     <template v-else>
       <table class="container mx-auto justify-center">

        <caption class="text-2xl font-bold">followed by  : {{list.length}} users </caption>
    
        <tr v-for="(item,index) in list" :key="item.user_id" class="container mx-auto justify-center">
            <td class="container mx-auto justify-center"> 
    
              <p > <span class="font-bold text-2xl hover:text-5xl"> {{ item.name }} </span>  index is {{index}}</p>
              <p class="hover:text-2xl"> email: {{item.user_id}}> </p>
              <div v-if ="item.following[0] ==='0'"> 
              <button class="bg-blue-500 hover:bg-blue-200 text-white font-bold py-2 px-4 rounded" @click="followUser(index)"> Follow</button>
              </div> 
              <div v-else><button class="bg-blue-500 text-white font-bold py-2 px-4 rounded opacity-50 cursor-not-allowed" >Following</button></div>

              here is the value {{item.following[0]}} 
            </td>
            <td class="container justify-center">
                 <img class="p-1 bg-white border rounded max-w-sm" alt="no image" :src="item.profile_pic"> 
        
            </td>
        
         </tr>
        </table>
    </template>
 
  
        <p> unqie value {{uniqueID}}</p>
      
  </div>
</template>

<script>

 
export default {
    
   data(){
       return{ 
         list: [],
         uniqueID:"",
         abc:"",
         
         }
      },

   
   mounted ()
   { this.getFollowers()} ,   
    
  

  methods: {
async getFollowers() {
      try {
        const response = await fetch(`http://localhost:5000/getFollowers`, {
          method: 'POST',
          // Adding body or contents to send
          body: JSON.stringify(this.$auth.user), // Adding headers to the request headers:
          headers: { 'Content-type': 'application/json; charset=UTF-8' },
        })
        // console.log ("I am here");
        const data = await response.json();
       // this.uniqueID = data.uniqueID;
        this.list= data.list;
        this.uniqueID = data.uniqueID;
        
      } catch (error) {
        // console.log("I dont care");
      }
    },
async followUser(index) {
      try {
        const newData={};
        newData.uniqueID = this.uniqueID;
        newData.userID = this.list[index].user_id;
        this.list[index].following= '1';
        const response = await fetch(`http://localhost:5000/followUser`, {
          method: 'POST',
          // Adding body or contents to send
          body: JSON.stringify(newData), // Adding headers to the request headers:
          headers: { 'Content-type': 'application/json; charset=UTF-8' },
        })
        // console.log ("I am here");
        const data = await response.json()
        
        this.abc= data
       // this.user_id = data.user_id
        // this.followers = (data.followers === "undefined" ? 0: data.followers );
        // this.recentProjects = data.recentProjects;
        // // JSON.stringify(data)
        // this.$store.commit('updateUserProfile',JSON.stringify(data));
        // if (this.userProfile.data.following === "undefined")
        // {
        
        //   this.following = 0; 
        // } else {
        //   this.following = this.userProfile.data.following.length;
        // }
        // return data;
      } catch (error) {
        // console.log("I dont care");
      }
    },
   
   

     }
    
}
</script>

<style>
table, th, td {
  border: 1px solid black;
  border-collapse: collapse;
}

</style>