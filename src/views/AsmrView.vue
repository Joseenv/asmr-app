<script setup>
import { usePlaylist } from '../composables/usePlaylistStore.js'
import MusicPlaylist from '../components/MusicPlaylist.vue';

const { getList } = usePlaylist();
const playlist = getList('asmr');

</script>

<template>
  <MusicPlaylist namePlaylist="Recientes" :playlist="playlist"></MusicPlaylist>
</template>
