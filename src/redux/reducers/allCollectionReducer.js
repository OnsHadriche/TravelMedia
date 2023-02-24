import { GET_ALL_COLLECTIONS } from "../types/allCollectionTypes"

const initialState ={
    all:[]
}

export const allCollectionsReducer = (state = initialState, action)=>{
    switch(action.type){
        case GET_ALL_COLLECTIONS:
            return {...state, all: action.payload}
        default:
            return state
    }
}