<template>
<body onload = "snackBar()">
<div class="flex justify-center content-center">
    <div id="snackBar">
    <p class="text-white">Welcome, {{ this.$auth.user.name }} </p>
  
    </div>
</div></body>
</template>
<script>
export default {
    data() {
        return {
            
        }
    },
    mounted() {
      
            document.getElementById("snackBar").className = "show";
            setInterval( function() {
                document.getElementById("snackBar").className = document.getElementById("snackBar").className.replace("show","");
            }, 3000);
   
    }

}
</script>
<style scoped>

#snackBar {
    visibility: hidden;
    text-align: center;
    width: 30%;
    left: 50%;
    bottom: 1rem;
    padding: 1.5rem;
    font-size: 1.2rem;
    border-radius: 0.5rem;
    background-color: black;
    color: white;
  
}

#snackBar.show {
    visibility: visible;
    animation: fadeIn 1.5s, fadeOut 1.5s 2.5s;
}
@keyframes fadeIn {
    from { bottom:0; opacity: 0;} 
    to { bottom: 30px; opacity:1;}
}

@keyframes fadeOut {
    from { bottom: 30px; opacity: 1;  }
    to { bottom: 0px; opacity: 0;}
}
</style>
