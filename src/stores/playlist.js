import { defineStore } from 'pinia'

export const usePlaylistStore = defineStore({
  id: 'playlist',
  state: () => ({
    playlist: [
      {
        id: 1,
        title: 'Sensitive Mouth Sounds',
        artist: 'Arbmeis',
        cover: 'https://i.ytimg.com/vi_webp/GPIxNdjOnXY/mqdefault.webp',
        category: 'asmr',
        music: '@/assets/music/1.mp3'
      },
      {
        id: 2,
        title: 'Atención personal para dormir',
        artist: 'Arbmeis',
        cover: 'https://i.ytimg.com/vi_webp/RF1qzY-6txo/mqdefault.webp',
        category: 'asmr',
        music: '@/assets/music/2.mp3'
      },
      {
        id: 3,
        title: 'Para estudiar, trabajar o dormir',
        artist: 'Arbmeis',
        cover: 'https://i.ytimg.com/vi/r-Ofq7fljxg/mqdefault.jpg',
        category: 'asmr',
        music: '@/assets/music/3.mp3'
      },
      {
        id: 4,
        title: 'Acupuntura cerebral',
        artist: 'Arbmeis',
        cover: 'https://i.ytimg.com/vi_webp/FXRv2ACNdCI/mqdefault.webp',
        category: 'asmr',
        music: '@/assets/music/4.mp3'
      },
      {
        id: 5,
        title: 'Sonidos intensos',
        artist: 'Arbmeis',
        cover: 'https://i.ytimg.com/vi_webp/9pN-PrdtFEk/mqdefault.webp',
        category: 'asmr',
        music: '@/assets/music/5.mp3'
      },
      {
        id: 6,
        title: 'Meditación guiada',
        artist: 'Arbmeis',
        cover: 'https://i.ytimg.com/vi/C_iaOUo0Td8/mqdefault.jpg',
        category: 'meditation',
        music: '@/assets/music/6.mp3'
      }
    ]
  })
})
