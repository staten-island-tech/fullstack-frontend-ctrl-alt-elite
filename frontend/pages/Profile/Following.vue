<template>
  <div >
     <!-- <DefaultNavBar /> -->

     <p v-if="list == 'undefined' || list.length == 0"> 
       Oh no list is empty 😢
     </p>
     <template v-else>
      <table class="container mx-auto justify-center">

       <caption class="text-2xl font-bold">follow : {{list.length}} users </caption>
       <tr v-for="item in list" :key="item.user_id" class="container mx-auto justify-center">
        <td class="container mx-auto justify-center"> 
    
         <p > <span class="font-bold text-2xl hover:text-5xl"> {{ item.name }} </span> </p>
         <p class="hover:text-2xl"> email: {{item.user_id}} </P>
         <p><input v-model="checkedValues" :value="item.user_id"  type='checkbox'  > <label> Unfollow</label>
         </p>
        </td>
        <td class="container justify-center">
          <img class="p-1 bg-white border rounded max-w-sm" alt="no image" :src="item.profile_pic"> 
        
        </td>
        
       </tr>
      </table>
      <div class="flex content-center justify-center flex-wrap">
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" @click="updateFollowing"> Unfollow Selected Users</button> 
      </div>
     </template>
     <p> {{checkedValues}}</p>
   </div>
</template>

<script>

 
export default {
    
   data(){
       return{ 
         list: [],
         checkedValues:[],
         uniqueID:"",
         abc:""
         }
      },

   
   mounted ()
   { this.getlist()} ,   
    
    

  methods: {
async getlist() {
      try {
        const response = await fetch(`http://localhost:5000/getFollowing`, {
          method: 'POST',
          // Adding body or contents to send
          body: JSON.stringify(this.$auth.user), // Adding headers to the request headers:
          headers: { 'Content-type': 'application/json; charset=UTF-8' },
        })
        // console.log ("I am here");
        const data = await response.json();
        this.uniqueID = data.uniqueID;
        this.list= data.list;
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
async updateFollowing() {
      try {
        const newdata=[]; 
        this.list.forEach(element => {
          if (!this.checkedValues.includes(element.user_id) )
          {
          newdata.push(element.user_id)
          }
        });
        this.list = this.list.filter(item => !(this.checkedValues.includes(item.user_id)));
        
        const newList = {uniqueID:this.uniqueID, list: newdata};
        const response = await fetch(`http://localhost:5000/updateFollowing`, {
          method: 'POST',
          // Adding body or contents to send
          body: JSON.stringify(newList), // Adding headers to the request headers:
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