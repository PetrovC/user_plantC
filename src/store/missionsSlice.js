
import { createSlice } from "@reduxjs/toolkit";

const missionsKey = 'missions';


export const missionsSlice = createSlice({
    name: 'missions',
    initialState: {
        selectedMission : null,
        list: JSON.parse(localStorage.getItem(missionsKey)) || [],
    },
    reducers:{
        loadMissions: (state, {payload} ) => {
            localStorage.setItem(missionsKey, JSON.stringify(payload))
            state.list = payload;

        },
        selectMission: (state, {payload}) => {
            state.selectedMission = payload
        }
    },
})

export const {loadMissions, selectMission} = missionsSlice.actions

export default missionsSlice.reducer