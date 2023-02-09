
import {
    ADD_PACKAGE,
    REMOVE_PACKAGE,
    SELECT_PACKAGE,
    SELECT_PACKAGE_AGENCY,
    SET_ALL_PACKAGES,
    UPDATE_PACKAGE,
  } from "../types/packageType";
  
  const initialState = {
    all: [],
    selected: null,
    createdByPage: [],
  };
  export const packageReducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_ALL_PACKAGES:
        return { ...state, all: action.payload };
      case SELECT_PACKAGE:
        return { ...state, selected: action.payload };
      case SELECT_PACKAGE_AGENCY:
        return { ...state, createdByPage: action.payload};
      case REMOVE_PACKAGE:
        return {
          ...state,
          all: state.all.filter((pack) => pack._id !== action.payload),
          createdByPage : state.createdByPage.filter((pack)=> pack._id !== action.payload)
        };
      case UPDATE_PACKAGE:
        return {
          ...state,
          all: state.all.map((pack) =>
            pack._id === action.payload.id
              ? { ...pack, ...action.payload.data }
              : pack
          ),
        };
      case ADD_PACKAGE:
        return { ...state, all: [...state.all, action.payload] };
      default:
        return state;
    }
  };
  