"use strict"

export function footballReducers(state={
    football:[]
}, action) {
    switch(action.type) {
        case "GET_FOOTBALL":
        return  {...state, football:[...action.payload]}
        case "POST_FOOTBALL":
        return {...state, football: [...state.football, ...action.payload], msg:'Saved! Click to continue', style: 'success',  validation:'success'}
        break;
        case "POST_FOOTBALL_REJECTED":
        return {...state, msg: 'Please, try again', style: 'danger', validation:'error'}
        break;
        break;
        case "RESET_FOOTBALL":
        return {...state, msg: null , style: 'primary', validation: 'null'}
        break;
        case "DELETE_FOOTBALL":
        const currentfootballToDelete = [...state.football]
        const indexToDelete = currentfootballToDelete.findIndex(
            (book) => {
                return football._id.toString() === action.payload;
            }
        )
        return {football: [...currentfootballToDelete.slice(0, indexToDelete), ...currentfootballToDelete.slice(indexToDelete + 1)]}
        break;
        case "UPDATE_FOOTBALL":
        const currentfootballToUpdate = [...state.football]
        const indexToUpdate = currentfootballToUpdate.findIndex(
            (football) => {
                return football._id === action.payload._id;
            }
        )
        const newfootballToUpdate = {
            ...currentfootballToUpdate[indexToUpdate],
            title: action.payload.title
        }
        console.log("what is it newBaseballToUPdate", newfootballToUpdate);

        return {baseball: [...currentfootballToUpdate.slice(0, indexToUpdate), newfootballToUpdate, ...currentfootballToUpdate.slice(indexToUpdate + 1)]}
        break;
    }
    return state
}
