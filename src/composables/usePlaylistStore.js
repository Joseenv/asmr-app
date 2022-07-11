import { usePlaylistStore } from '../stores/playlist.js';

export const usePlaylist = () => {
    const playlistStore = usePlaylistStore();
    const globalPlaylist = playlistStore.playlist;

    const getList = (category)  => { 
        return globalPlaylist.filter( item => item.category === category)  
    };
    
    return {
        getList,
    }
}
