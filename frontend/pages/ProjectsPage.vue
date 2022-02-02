<template>
<div>
<div class="temp1">
    <p class="menu"> Menu </p>
    <p class="logo"> Logo </p>
<p class="New-Project"> New Project </p>
</div>
<div class="Your-projects">
    <div class="search">
        Your Projects
    </div>
<div class="search-bar"> 
    <input type ="text" :v-model="search" placeholder="Find a Project">
 


</div>



</div>
<div v-for="project in projects" :key="project" class="view-projects">
<p class="more-projects"> Projects Go Here</p>
<p class="more-projects"> Projects Go Here</p>
<p class="more-projects"> Projects Go Here</p>
</div>


</div>
</template>

<script>
export default{
    data(){
        return{
            projects: [], 
            search: [],


        }

    }, 
    created(){
        this.$http.get(`https://jsonplaceholder.typicode.com/todos/1`)
        .then (function(data){
            this.projects = data.body.slice(0,10)
        })
    },

    computed:{
        filteredProjects() {
            return this.projects.filter((project)=> {
                return Boolean;
            });
        }, 

    },
    methods: {

    }, 
}




</script>

<style>
body{
   background: linear-gradient(#5830AA,#A410FF);
   height: 100vh;
}

.temp1{
    background-color:#190061;
    opacity: 85%;
    font-family: 'Courier New', Courier, monospace;
    color: white;
    font-size: 3rem;
    text-align: left;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    font-weight: bold;
    
};
menu:hover{
    transform: scale(1.1);
    cursor: pointer;
}
.view-projects{
    height: 20vh;
    margin-top: 2rem;
    justify-content: center;
    text-align: center;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    opacity: .7;
}
.more-projects{
    font-family: 'Courier New', Courier, monospace;
    font-size: 2rem;
    font-weight: bold;
    width: 20vw; 
    margin: 1rem;
    border: solid black .3rem;
    background-color: blanchedalmond;
}
.your-projects{
    display: flex;
    flex-direction: row;
    width: 100vh;
    align-items: center;
    text-align: center;
     font-size: 1.2rem;
    font-weight: bold;   
}
.search-bar{
    background-color: honeydew;
    align-items: center;
    font-family: 'Courier New', Courier, monospace;
    font-size: 1.2rem;
}  

</style>
