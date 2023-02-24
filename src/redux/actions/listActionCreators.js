import { ADD_TO_LIST, REMOVE_ALL } from "../types/listType";

export const addToList = (product) =>({
    type: ADD_TO_LIST,
    payload:product
})
export const removeAllList = ()=>({
    type : REMOVE_ALL
})


export const addItemToList = (product)=>{
    return (dispatch) =>{

        dispatch(addToList(product))
    }
}


export const removeAllFromList = ()=>{
    return (dispatch)=>{

        dispatch(removeAllList())
    }
}