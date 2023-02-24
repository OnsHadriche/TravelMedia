import { ADD_TO_LIST, REMOVE_ALL } from "../types/listType"

const myList = localStorage.getItem("mylist")

const initialState = {
    list: []
}

export const listReducer = (state = initialState, action) =>{
    switch(action.type)
    {
        case ADD_TO_LIST:
            return {...state, list: [...state.list, action.payload]}
        case REMOVE_ALL:
            return []
        default:
            return state
    }
}