import { ADD_PAGE, REMOVE_PAGE, SELECT_PAGE, SET_ALL_PAGES, UPDATE_PAGE } from "../types/pageType";

const initialState ={
    all:[],
    selected : null,
    isCreated: false
}
 export const pageReducer = (state = initialState, action)=>{
     switch(action.type){
         case SET_ALL_PAGES :
             return {...state, all: action.payload};
        case SELECT_PAGE:
            return{...state, selected: action.payload};
        case REMOVE_PAGE:
            return {...state, all: state.all.filter((page) =>page._id !== action.payload.id)}
        case UPDATE_PAGE:
            return{...state, all: state.all.map((page)=> page._id === action.payload.id ? {...page,...action.payload.data}: page)}
        case ADD_PAGE: 
            return {...state, all:[...state.all, action.payload], isCreated:true };
        default:
            return state;
        
     }
 }
