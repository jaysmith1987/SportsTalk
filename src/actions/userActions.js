"use strict"
import axios from 'axios';

export function getUser(){
    return function(dispatch){
        axios.get("/api/users")
        .then(function(response){
            dispatch({type:"GET_USER", payload: response.data})
        })
        .catch(function(err){
            dispatch({type:"GET_USER_REJECTED", payload: err})
        })
    }
}


export function postUser(user){
    return function(dispatch){
        axios.post("/api/users", user)
        .then(function(response){
            dispatch({type:"POST_USER", payload: response.data})
        })
        .catch(function(err){
            dispatch({type:"POST_USER_REJECTED", payload:"There was an error creating User."})
        })
    }
}

export function deleteUser(id){
    return function(dispatch){
        axios.delete("/api/users" + id)
        .then(function(response){
            dispatch({type: "DELETE_USER", payload:id})
        })
        .catch(function(err){
            dispatch({type: "DELETE_USER_REJECTED", payload: err})
        })
    }
}

export function updateUser (user){
    return function(dispatch){
        axios.put("/api/users" + id)
        .then(function(response){
            dispatch({type:"UPDATE_USER", payload: response.data})
        })
        .catch(function(err){
            dispatch({type:"UPDATE_USER_REJECTED", payload: response.data})
        })
    }
}

export function resetButton (){
    return {
        type: 'RESET_BUTTON'
    }
}