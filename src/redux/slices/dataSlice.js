import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
    name: 'fetchData',
    initialState: {
        movies: ''
    },
    reducers: {
        setData: (state, action) => {
            console.log(action.payload);
            state.movies = action.payload;
        },
        getData: (state) => {
            return state;
        }
    }
})

export const { setData, getData } = dataSlice.actions;

export default dataSlice.reducer;