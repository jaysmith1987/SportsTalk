"use strict"

export function baseballReducers(state={
    baseball:[]
}, action) {
    switch(action.type) {
        case "GET_BASKETBALL":
        return  {...state, baseball:[...action.payload]}
        case "POST_BASEBALL":
        return {...state, baseball: [...state.baseball, ...action.payload], msg:'Saved! Click to continue', style: 'success',  validation:'success'}
        break;
        case "POST_BASEBALL_REJECTED":
        return {...state, msg: 'Please, try again', style: 'danger', validation:'error'}
        break;
        break;
        case "RESET_BASEBALL":
        return {...state, msg: null , style: 'primary', validation: 'null'}
        break;
        case "DELETE_BASEBALL":
        const currentBaseballToDelete = [...state.baseball]
        const indexToDelete = currentBookToDelete.findIndex(
            (book) => {
                return baseball._id.toString() === action.payload;
            }
        )
        return {baseball: [...currentBaseballToDelete.slice(0, indexToDelete), ...currentBaseballToDelete.slice(indexToDelete + 1)]}
        break;
        case "UPDATE_BASEBALL":
        const currentBaseballToUpdate = [...state.baseball]
        const indexToUpdate = currentBaseballToUpdate.findIndex(
            (baseball) => {
                return baseball._id === action.payload._id;
            }
        )
        const newBaseballToUpdate = {
            ...currentBaseballToUpdate[indexToUpdate],
            title: action.payload.title
        }
        console.log("what is it newBaseballToUPdate", newBaseballToUpdate);

        return {baseball: [...currentBaseballToUpdate.slice(0, indexToUpdate), newBaseballToUpdate, ...currentBaseballToUpdate.slice(indexToUpdate + 1)]}
        break;
    }
    return state
}
