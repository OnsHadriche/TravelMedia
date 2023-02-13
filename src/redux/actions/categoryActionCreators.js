import axios from "axios";
import { alertSuccess } from "../../utils/feedback";
import {
  ADD_NEW_CATEGORY,
  GET_ALL_CATEGORIES,
  SELECT_CATEGORY,
} from "../types/categoryType";
import {
  requestFailed,
  requestStarted,
  requestSucceeded,
} from "./feedbackActionCreators";

export const getAllCategories = (categories) => ({
  type: GET_ALL_CATEGORIES,
  payload: categories,
});

export const addNewCategory = (category) => ({
  type: ADD_NEW_CATEGORY,
  payload: category,
});
export const selectCategory = (category) => ({
  type: SELECT_CATEGORY,
  payload: category,
});
export const fetchAllCategorys = () => {
  return async (dispatch, getState) => {
    const state = getState();
    const token = state.user.token;
    dispatch(requestStarted());
    try {
      const res = await axios.get(`${process.env.REACT_APP_API_URL}/category`, {
        headers: { authorization: token },
      });
      dispatch(requestSucceeded());
      const categories = res.data;
      dispatch(getAllCategories(categories));
    } catch (error) {
      dispatch(requestFailed(error));
    }
  };
};

export const rquestCreateCategory = (data) => {
  return async (dispatch, getState) => {
    const state = getState();
    const token = state.token;
    dispatch(requestStarted());
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_URL}/category/add-new-category`,
        data,
        { header: { authorization: token } }
      );
      dispatch(requestSucceeded());
      if (res.data && res.data.message) {
        alertSuccess(res.data.message);
      }
      console.log(res.data);
      if (res.data && res.data.category && res.data.category._id) {
        dispatch(addNewCategory({ ...data, _id: res.data.category._id }));
      }
    } catch (error) {
      dispatch(requestFailed());
    }
  };
};
export const getCategoryById = (id) => {
  return async (dispatch, getState) => {
    const state = getState();
    const token = state.user.token;
    dispatch(requestStarted());
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/category/${id}`,
        { headers: { authorization: token } }
      );
      dispatch(requestSucceeded());
      dispatch(selectCategory(res.data));
    } catch (error) {
      dispatch(requestFailed(error));
    }
  };
};
