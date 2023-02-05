import { ADD_HOTEL, REMOVE_HOTEL, SELECT_HOTEL, SELECT_HOTEL_PAGE, SET_ALL_HOTELS, UPDATE_HOTEL } from "../types/hotelType"


const intialState = {
    all: [],
    selected: null,
    hostedByPage: []

}
export const hotelReducer = (state = intialState, action)=>{
    switch(action.type){
      case SET_ALL_HOTELS :
          return {...state , all: action.payload}
        case SELECT_HOTEL :
            return {...state, selected: action.payload}
        case SELECT_HOTEL_PAGE:
            return {...state, hostedByPage: [...action.payload]}
        case ADD_HOTEL :
            return {...state, all:[...state.all, action.payload]}
        case UPDATE_HOTEL :
            return {...state, all: state.all.map(hotel => hotel._id === action.payload.id? {...hotel,...action.payload.data} : hotel)}
        case REMOVE_HOTEL :
            return {...state, all : state.all.filter(hotel => hotel._id !== action.payload ), hostedByPage: state.hostedByPage.filter(hotel => hotel._id !== action.payload)}
        default:
            return state 
    }
}