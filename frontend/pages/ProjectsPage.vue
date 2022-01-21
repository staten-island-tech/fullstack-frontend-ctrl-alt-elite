<template>
<div>
<div class="temp1">
    <p class="menu"> Menu </p>
    <p class="logo"> Logo </p>
<p class="New-Project"> New Project </p>
</div>
<div class="Your-projects">



</div>
<div class="view-projects">
<p class="more-projects"> Html</p>
<p class="more-projects"> Java</p>
</div>


</div>
</template>

<script>
export default{
    methods: {
        
    }


}

</script>

<style>
body{
   background: linear-gradient(#190061,#8570c5);
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
    height: 30vh;
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

</style>
