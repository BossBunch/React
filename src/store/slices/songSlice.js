import { createSlice } from '@reduxjs/toolkit';



export const songSlice = createSlice({
    name: 'song',
    initialState: ['Fist Song'],
    reducers: {
        addSong(state, action) {
            state.push(action.payload);
        },
        removeSong(state, action) {
            const index = state.indexOf(action.payload);
            state.splice(index, 1);
        },
        clearSongs(state, action) {
            return [];
        }
    }
});