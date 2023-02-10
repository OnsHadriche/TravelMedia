import { ADD_EVENT, REMOVE_EVENT, SELECT_ALL_EVENT_CREATED_PAGE, SELECT_EVENT, SET_ALL_EVENTS, UPDATE_EVENT } from "../types/eventType";

const initialState ={
    all:[],
    selected :[],
    createdByPage: []
}
 export const eventReducer = (state = initialState, action)=>{
     switch(action.type){
         case SET_ALL_EVENTS :
             return {...state, all: action.payload};
        case SELECT_EVENT:
            return{...state, selected: action.payload || null};
        case SELECT_ALL_EVENT_CREATED_PAGE: 
            return {...state, createdByPage : action.payload}
        case REMOVE_EVENT:
            return {...state, all: state.all.filter((event) =>event._id !== action.payload), createdByPage: state.createdByPage.filter(event=> event._id !== action.payload)}
        case UPDATE_EVENT:
            return{...state, all: state.all.map((event)=> event._id === action.payload.id ? {...event,...action.payload.data}: event)}
        case ADD_EVENT: 
            return {...state, all:[...state.all, action.payload] };
        default:
            return state;
        
     }
 }
