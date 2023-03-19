import { GET_RATING } from "../types/reviewType"

const initialState ={
    selected: null
}

export const ratingReviewReducer = (state = initialState, action)=>{
    switch(action.type){
        case GET_RATING:
            return {...state, selected: action.payload}
        default:
            return state
    }
}