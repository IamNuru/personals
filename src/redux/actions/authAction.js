import { authActions } from "../slices/authSlice";


export const login = (payload) =>{
    return async dispatch =>{
        dispatch(authActions.login(payload))
    }
} 
export const register = (payload) =>{
    return async dispatch =>{
        dispatch(authActions.register(payload))
    }
} 
export const logout = (payload) =>{
    return async dispatch =>{
        dispatch(authActions.logout())
    }
} 