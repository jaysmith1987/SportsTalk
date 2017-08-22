"use strict"

export function basketballReducers(state={
    basketball:[]
}, action) {
    switch(action.type) {
        case "GET_BASKETBALL":
        return  {...state, basketball:[...action.payload]}
        case "POST_BASKETBALL":
        return {...state, basketball: [...state.basketball, ...action.payload], msg:'Saved! Click to continue', style: 'success',  validation:'success'}
        break;
        case "POST_BASKETBALL_REJECTED":
        return {...state, msg: 'Please, try again', style: 'danger', validation:'error'}
        break;
        break;
        case "RESET_BASKETBALL":
        return {...state, msg: null , style: 'primary', validation: 'null'}
        break;
        case "DELETE_BASKETBALL":
        const currentBasketballToDelete = [...state.basketball]
        const indexToDelete = currentBasketballToDelete.findIndex(
            (book) => {
                return basketball._id.toString() === action.payload;
            }
        )
        return {basketball: [...currentBasketballToDelete.slice(0, indexToDelete), ...currentBasketballToDelete.slice(indexToDelete + 1)]}
        break;
        case "UPDATE_BASKETBALL":
        const currentBasketballToUpdate = [...state.basketball]
        const indexToUpdate = currentBasketballToUpdate.findIndex(
            (basketball) => {
                return basketball._id === action.payload._id;
            }
        )
        const newBasketballToUpdate = {
            ...currentBasketballToUpdate[indexToUpdate],
            title: action.payload.title
        }
        console.log("what is it newBaseballToUPdate", newBasketballToUpdate);

        return {baseball: [...currentBasketballToUpdate.slice(0, indexToUpdate), newBasketballToUpdate, ...currentBasketballToUpdate.slice(indexToUpdate + 1)]}
        break;
    }
    return state
}
