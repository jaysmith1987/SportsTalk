"use strict"

export function userReducers(state={
    user:[]
}, action){
    switch(action.type){
        case "GET_USER":
        return {...state, user:[...action.payload]}
        case "POST_USER":
        return {...state, user:[...state.user, ...action.payload], msg: 'Saved', style:'success', validation:'success'}
        break;
        case "POST_USER_REJECTED":
        return {...state, msg: 'There was an error', style: 'danger', validation: 'error'}
        break;
        case "RESET_BUTTON":
        return {...state, msg: null, style: 'info', validation: null}
        break;
        case "DELETE_USER":
        const currentUserToDelete = [...state.user]
        const indexToDelete = currentUserToDelete.findIndex(
            (user) => {
                return user._id.toString() === action.payload;
            }
        )
        return {users: [...currentUserToDelete.slice(0, indexToDelete), ...currentBookToDelete.slice(indexToDelete + 1)]}
        break;
        case "UPDATE_USER":
        const currentUserToUpdate = [...state.user]
        const indexToUpdate = currentUserToUpdate.findIndex(
            (user) => {
                return user._id === action.payload._id;
            }
        )
    }
    return state
}