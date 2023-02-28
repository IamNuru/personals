import { authActions } from "../slices/authSlice";
import { personalActions } from "../slices/personalSlice";


export const addPersonal = (payload) => {
    return async dispatch => {
        dispatch(personalActions.addPersonal(payload))
    }
}

export const deletePersonal = (payload) => {
    return async dispatch => {
        dispatch(personalActions.deletePersonal(payload))
    }
}

export const getPersonal = (id) => {
    return async dispatch => {
        dispatch(personalActions.getPersonal(id))
    }
}

export const updatePersonal = (payload) => {
    return async dispatch => {
        dispatch(personalActions.updatePersonal(payload))
    }
}