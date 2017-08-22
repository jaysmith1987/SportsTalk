"use strict"
//Get A Basketball Posts
export function getBasetballPosts() {
    return {
        type:"GET_BASEBALLPOSTS",
    }
}

export function getCbbaPosts() {
    return {
        type:"GET_CBBAPOSTS",
    }
}

export function getMinorsPosts() {
    return {
        type:"GET_MINORSPOSTS",
    }
}

export function getMlbPosts() {
    return {
        type:"GET_MLBPOSTS",
    }
}

//Post Basketball
export function postBaseball(baseball) {
    return {
        type:"POST_Baseball",
        payload: baseball
    }
}

export function postCbba(cbba) {
    return {
        type:"POST_CBBA",
        payload: cbba
    }
}

export function postMinors(minors) {
    return {
        type:"POST_MINORS",
        payload: minors
    }
}

export function postMlb(mlb) {
    return {
        type:"POST_MLB",
        payload: mlb
    }
}




//Delete Basketball Posts
export function deleteBaseball(id){
    return {
        type:"DELETE_BASEBALL",
        payload: id
    }
}

export function deleteCbba(id){
    return {
        type:"DELETE_CBBA",
        payload: id
    }
}

export function deleteMinors(id){
    return {
        type:"DELETE_MINORS",
        payload: id
    }
}

export function deleteMlb(id){
    return {
        type:"DELETE_MLB",
        payload: id
    }
}




//update basketball
export function updateBaseball(baseball) {
    return {
        type: "UPDATE_BASEBALL",
        payload: baseball
    }
}

export function updateCbba(cbba) {
    return {
        type: "UPDATE_CBBA",
        payload: cbba
    }
}

export function updateMinors(minors) {
    return {
        type: "UPDATE_MINORS",
        payload: minors
    }
}

export function updateMlb(mlb) {
    return {
        type: "UPDATE_MLB",
        payload: mlb
    }
}