<script setup>
import { ref } from 'vue';

const textField = ref('');
</script>

<template>
    <section class="searching">
        <input type="text" name="search" id="search" placeholder="Buscar título" class="searching__field">
        <img src="../assets/search_icon.png" alt="" class="searching__img">
    </section>
</template>

<style scoped>
.searching {
    position: relative;
    width: 100%;    
    height: 3.8rem;  
    margin-top: 2.4rem;  
    display: flex;
    align-items: center;
}
.searching__field {
    background-color: var(--color-background-mute);
    border: none;
    border-radius: 8px;
    font-size: 1.4rem;
    width: 100%;
    height: 100%;
    padding-left: 34px;
    font-weight: 400;

}
.searching__field:focus{
    outline: 1px solid #00BD7E;
}
.searching__img {
    position: absolute;
    left: 8px;
    width: 18px;
}

</style>