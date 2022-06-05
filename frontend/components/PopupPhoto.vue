<template>
    <div class="popup">
        <div class="popup-inner">
           <slot/>
           <button class=" mr-2 mt-5 bg-gray-700 hover:bg-gray-500 text-white py-2 px-4 rounded popup-close">Close Popup</button>
        </div>
    </div>
</template>

<script>
</script>

<style scoped>
.popup{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 99;
    background-color: rgba(0, 0, 0, 0.2);
    display: flex;
    align-items: center; 
    justify-content: center; 
}

.popup-inner {
    display: flex;
    align-items: center; 
    justify-content: center; 
    background: #fff; 
    padding: 30px;
}
</style>