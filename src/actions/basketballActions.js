"use strict"
//Get A Basketball Posts
export function getBasketballPosts() {
    return {
        type:"GET_BASKETBALLPOSTS",
    }
}

export function getCBBPosts() {
    return {
        type:"GET_CBBPOSTS",
    }
}

export function getGleaguePosts() {
    return {
        type:"GET_GLEAGUEPOSTS",
    }
}

export function getNBAPosts() {
    return {
        type:"GET_NBAPOSTS",
    }
}

//Post Basketball
export function postBasketball(basketball) {
    return {
        type:"POST_Basketball",
        payload: basketball
    }
}

export function postCBB(cbb) {
    return {
        type:"POST_CBB",
        payload: cbb
    }
}

export function postGleague(gleague) {
    return {
        type:"POST_GLEAGUE",
        payload: gleague
    }
}

export function postNBA(nba) {
    return {
        type:"POST_NBA",
        payload: nba
    }
}




//Delete Basketball Posts
export function deleteBasketball(id){
    return {
        type:"DELETE_BASKETBALL",
        payload: id
    }
}

export function deleteCbb(id){
    return {
        type:"DELETE_CBB",
        payload: id
    }
}

export function deleteGleague(id){
    return {
        type:"DELETE_GLEAGUE",
        payload: id
    }
}

export function deleteNba(id){
    return {
        type:"DELETE_NBA",
        payload: id
    }
}




//update basketball
export function updateBasketball(basketball) {
    return {
        type: "UPDATE_BASKETBALL",
        payload: basketball
    }
}

export function updateCbb(cbb) {
    return {
        type: "UPDATE_CBB",
        payload: cbb
    }
}

export function updateGleague(gleague) {
    return {
        type: "UPDATE_GLEAGUE",
        payload: gleague
    }
}

export function updateNba(nba) {
    return {
        type: "UPDATE_NBA",
        payload: nba
    }
}