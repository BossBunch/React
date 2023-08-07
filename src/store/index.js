import { configureStore, createSlice } from '@reduxjs/toolkit';

export const songSlice = createSlice({
    name: 'song',
    initialState:['Fist Song'],
    reducers: {
        addSong(state, action) {
            state.push(action.payload);
        },
        removeSong(state, action) {
            const index = state.indexOf(action.payload);
            state.splice(index, 1);
        },
        clearSongs(state,action) {
            return [];
        }
    }
});

export const movieSlice = createSlice({
    name: 'movie',
    initialState: ['Fist Movie'],
    reducers: {
        addMovie(state, action) {
            state.push(action.payload);
        },
        removeMovie(state, action) {
            const index = state.indexOf(action.payload);
            state.splice(index, 1);
        },
        clearMovies(state, action) {
            return [];
        }
    }
});

const store = configureStore({
    reducer: {
        songs: songSlice.reducer,
        movies: movieSlice.reducer
    }
});
 

//const currentState = store.getState();
//console.log(currentState);

//store.dispatch({
//    type: 'song/addSong',
//    payload: 'New Song'
//})

//const finalState = store.getState();
//console.log(finalState);

export { store };

export const { addSong, removeSong, clearSongs } = songSlice.actions; 
export const { addMovie, removeMovie, clearMovies } = movieSlice.actions; 