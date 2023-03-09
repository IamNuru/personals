import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    personals: [
        {
            id:'11dd-66s-45',
            title:'Fb Pwd',
            content:'1fac444dghh'
        }
    ],
    selectedPersonal: null,
}


const personalSlice = createSlice({
    name:'personal',
    initialState,
    reducers: {
        getPersonals(state, action){
            state.personals = action.payload
        },

        addPersonal(state, action){
            state.personals = [action.payload, ...state.personals]
        },

        deletePersonal (state, action){
            state.personals = state.personals.filter((personal) => {
                return personal.id !== action.payload
            })
        },


        getPersonal (state, action) {
            const itemIndex = state.personals.findIndex(item => item.id === action.payload)
            state.selectedPersonal = state.personals[itemIndex]
        },

        updatePersonal (state, action){
            //find the index
            const itemIndex = state.personals.findIndex(item => item.id === action.payload.id)
            state.personals[itemIndex] = action.payload;
            state.personals = [...state.personals]
        },

        
    }
})

export const personalActions = personalSlice.actions;
export default personalSlice.reducer;