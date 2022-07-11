<script setup>
import UserWelcome from '../components/UserWelcome.vue'
import SearchTextField from '../components/SearchTextField.vue'
import CategoriesNavbar from '../components/CategoriesNavbar.vue'


</script>

<template>
    <UserWelcome/>
    <SearchTextField/>
    <CategoriesNavbar/>
    <router-view></router-view>
</template>