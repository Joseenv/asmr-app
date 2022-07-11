<script setup>
import { usePlaylist } from '../composables/usePlaylistStore.js'
import MusicPlaylist from '../components/MusicPlaylist.vue';

const { getList } = usePlaylist();
const playlist = getList('meditation');

</script>

<template>
  <MusicPlaylist namePlaylist="Populares" :playlist="playlist"></MusicPlaylist>
</template>