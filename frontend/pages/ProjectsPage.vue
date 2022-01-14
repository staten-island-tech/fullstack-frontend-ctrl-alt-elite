<template>
<div>
<div class="temp1">
    <p class="menu"> Menu </p>
    <p class="logo"> Logo </p>
<p v-for="game in games" :key=game.title class="New-Project"> New Project </p>
</div>
<div class="work-space">
    <div id="textbox-html" class="textbox">
        html

    </div>
    <div id="textbox-css" class="textbox">
        css

    </div>
    <div id="textbox-js" class="textbox">
        js

    </div>


</div>
</div>
</template>

<script>
export default{


}

</script>

<style>
body{
    background-color: #240090;
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
.work-space{
    display: flex;
    flex-direction: row;
    justify-content: center;
    height: 40%;
}
.textbox{
    margin-top: 1.5rem;
    display: flex;
    width: 30%;
    height: 50vh;
    background-color: #282828;

}

</style>
