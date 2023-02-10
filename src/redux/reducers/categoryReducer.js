import {
  ADD_NEW_CATEGORY,
  GET_ALL_CATEGORIES,
  SELECT_CATEGORY,
} from "../types/categoryType";

const initialState = {
  all: [],
  selected: [],
  createdByPage: [],
};
export const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_CATEGORIES:
      return { ...state, all: action.payload };
    case SELECT_CATEGORY:
      return { ...state, selected: action.payload || null };
    case ADD_NEW_CATEGORY:
      return { ...state, all: [...state.all, action.payload] };
    default:
      return state;
  }
};
