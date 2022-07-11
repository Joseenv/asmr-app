<script setup>
import { ref } from 'vue';
const categories = ref([
    { name: 'ASMR', route: { name: 'asmr' } },
    { name: 'Meditación', route: { name: 'meditation' } },
    { name: 'Favoritos', route: { name: 'favorites' } },
]);
</script>

<template>
    <nav class="navbar">
        <ul class="navbar__menu">
            <li class="menu__item" 
                v-for="(category, index) in categories"
                :key="index"
            >
                <router-link 
                    :to="category.route"
                    class="item__link"
                >
                {{ category.name }}
                <div class="indicator"></div>
                </router-link>
            </li>
        </ul>
    </nav>
</template>

<style scoped>
.navbar {
    margin: 3.2rem auto;
    font-size: 1.6rem;
}
.navbar__menu {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2.4rem;
    list-style: none;
} 
.item__link{
    text-decoration: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    font-weight: 500;
}
.router-link-active {
    color: var(--color-heading);
    transition: color 1s;
}
.router-link-active .indicator {
    background-color: #00BD7E;
    transition: background-color 1s;
}

.indicator {
    width: 24px;
    height: 5px;
    background-color: transparent;
    border-radius: 8px;
}
</style>