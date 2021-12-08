import { createSlice } from "@reduxjs/toolkit";

export const missionsSlice = createSlice({
    name: 'missions',
    initialState: {
        selectedMission : null,
        list: [],
    },
    reducers:{
        loadMissions: (state, {playload} ) => {
            state.list = playload;
        },
        selectMission: (state, {playload}) => {
            state.selectedMission = {...playload}
        }
    },
})

export const {loadMissions, selectMission} = missionsSlice.actions

export default missionsSlice.reducer