import { createSlice } from "@reduxjs/toolkit";

export const alertesSlice = createSlice({
    name: 'alertes',
    initialState:{
        severity : null,
        message : null,
        open: false,
    },
    reducers:{
        showAlerte: (state, {payload}) => {
            state.severity = payload.severity;
            state.message = payload.message;
            state.open = true;
        },
        hideAlerte: (state, {payload}) => {
            state.message = '';
            state.open = false;
        }
    }

})

export const {showAlerte, hideAlerte} = alertesSlice.actions;

export default alertesSlice.reducer