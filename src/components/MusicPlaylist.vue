<script setup>
import PlaylistItem from './PlaylistItem.vue';

const props = defineProps({
    namePlaylist: {
        type: String,
        required: true,
    },
    playlist: {
        type: Array,
        required: true,
    },
})
</script>

<template>
    <section class="playlist">
        <h2 class="playlist__name">
            {{ props.namePlaylist}}
        </h2>
        <ul class="playlist__list">
            <li
                v-for="item in props.playlist"
                :key="item.id"
            >
                <PlaylistItem>
                    <img :src="item.cover" :alt="item.title" class="song__cover">
                    <template #title> {{ item.title }} </template>  
                    <template #artist> {{ item.artist }} </template>  
                </PlaylistItem>
            </li>
        </ul>
    </section>
</template>

<style scoped>
.playlist__name {
    color: var(--color-heading);
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 2.4rem;
}
.playlist__list {
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
    list-style: none;
}
.song__cover {
    width: 120px;
    height: 64px;
    border-radius: 4px;
    object-fit: cover;
}

</style>