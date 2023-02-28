import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    loggedIn: false,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers:{
        register(state, action){
            state.user = action.payload;
            state.loggedIn = true;
        },
        login(state, action){
            state.user = action.payload;
            state.loggedIn = true;
        },
        logout(state, action){
            state.user = null;
            state.loggedIn = false;
        },
    }

})

export const authActions = authSlice.actions;
export default authSlice.reducer;