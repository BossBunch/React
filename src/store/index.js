import { configureStore } from '@reduxjs/toolkit';
import { movieSlice } from './slices/movieSlice';
import { songSlice } from './slices/songSlice';


const store = configureStore({
    reducer: {
        songs: songSlice.reducer,
        movies: movieSlice.reducer
    }
});
 
export { store };

export const { addSong, removeSong, clearSongs } = songSlice.actions; 
export const { addMovie, removeMovie, clearMovies } = movieSlice.actions; 