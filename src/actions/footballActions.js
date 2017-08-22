"use strict"
//Get A Basketball Posts
export function getFootballPosts() {
    return {
        type:"GET_FOOTBALLPOSTS",
    }
}

export function getCfbPosts() {
    return {
        type:"GET_CFBPOSTS",
    }
}

export function getNflPosts() {
    return {
        type:"GET_NFLPOSTS",
    }
}


//Post Basketball
export function postFootball(football) {
    return {
        type:"POST_FOOTBALL",
        payload: football
    }
}

export function postCfb(cfb) {
    return {
        type:"POST_CFB",
        payload: cfb
    }
}

export function postNfl(nfl) {
    return {
        type:"POST_NFL",
        payload: nfl
    }
}



//Delete Football Posts
export function deleteFootball(id){
    return {
        type:"DELETE_FOOTBALL",
        payload: id
    }
}

export function deleteCfb(id){
    return {
        type:"DELETE_CFB",
        payload: id
    }
}

export function deleteNfl(id){
    return {
        type:"DELETE_NFL",
        payload: id
    }
}


//update basketball
export function updateFootball(football) {
    return {
        type: "UPDATE_FOOTBALL",
        payload: football
    }
}

export function updateCfb(cfb) {
    return {
        type: "UPDATE_CFB",
        payload: cfb
    }
}

export function updateNfl(nfl) {
    return {
        type: "UPDATE_NFL",
        payload: nfl
    }
}

