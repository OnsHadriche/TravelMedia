import { REMOVE_HOTEL } from "../Types/hotelType";
import { ADD_FAV_HOTEL, LOGIN, LOGOUT,UPDATE_USER_INFO } from "../Types/userTypes"


const initialState ={
    isAuth : false,
    info : null,
    token: null,
    loading : false
}
export const userReducer = (state = initialState, action) =>{
    switch(action.type){
        case LOGIN : 
            return {...state, isAuth:true, info: action.payload.user, token: action.payload.token}
        case LOGOUT :
            return {...state, isAuth: false, info: null, token: null};
        case UPDATE_USER_INFO:
           return {...state, loading: true, isAuth:true, info:{ ...state.info, ...action.payload } };
        case ADD_FAV_HOTEL:
            return {...state, loading: true, isAuth:true, info:{ ...state.info, listFavoriteHotel: [...state.info.listFavoriteHotel, action.payload]} }
        case REMOVE_HOTEL:
            return {...state, info : {...state.info, listFavoriteHotel: state.info.listFavoriteHotel.filter(favoriteHotel => favoriteHotel !== action.payload)}}
        default : 
            return state
    }
}
