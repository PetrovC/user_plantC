import { createSlice } from "@reduxjs/toolkit";

export const missionsSlice = createSlice({
    name: 'missions',
    initialState: {
        selectedMission : null,
        list: [],
    },
    reducers:{
        loadMissions: (state, {payload} ) => {
            state.list = payload;

        },
        selectMission: (state, {payload}) => {
            state.selectedMission = payload
        }
    },
})

export const {loadMissions, selectMission} = missionsSlice.actions

export default missionsSlice.reducer