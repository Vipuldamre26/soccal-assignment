import { configureStore } from "@reduxjs/toolkit";
import dataSlice from './slices/dataSlice';

const store = configureStore({
    reducer: {
        movieData: dataSlice,
    }
});


export default store;