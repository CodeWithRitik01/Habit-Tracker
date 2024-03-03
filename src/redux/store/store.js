import { configureStore } from "@reduxjs/toolkit";
import { habitReducer } from "../reducers/habitTrackerReducer";


export const store = configureStore({
    reducer:{
        habitReducer
    }
})