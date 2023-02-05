import axios from "axios";
import { alertSuccess } from "../../utils/feedback";
import {
  ADD_PAGE,
  REMOVE_PAGE,
  SELECT_PAGE,
  SET_ALL_PAGES,
  UPDATE_PAGE,
} from "../types/pageType";
import {
  requestFailed,
  requestStarted,
  requestSucceeded,
} from "./feedbackActions";

export const setAlPages = (pages) => ({
  type: SET_ALL_PAGES,
  payload: pages,
});
export const selectPage = (page) => ({
  type: SELECT_PAGE,
  payload: page,
});

export const addNewPage = (page) => ({
  type: ADD_PAGE,
  payload: page,
});
export const removePage = (pageID) => ({
  type: REMOVE_PAGE,
  payload: pageID,
});
export const updatePage = (pageID, data) => ({
  type: UPDATE_PAGE,
  payload: {
    id: pageID,
    data,
  },
});
export const fetchAllPages = () => {
  return async (dispatch) => {
    dispatch(requestStarted());
    try {
      const res = await axios.get(`${process.env.REACT_APP_API_URL}/pages`);
      dispatch(requestSucceeded());
      dispatch(setAlPages(res.data));
    } catch (error) {
      dispatch(requestFailed(error));
    }
  };
};
export const getPageById = (id) => {
  return async (dispatch) => {
    dispatch(requestStarted());
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/pages/${id}`
      );
      dispatch(requestSucceeded());
      const page = res.data;
      dispatch(selectPage(page));
    } catch (error) {
      dispatch(requestFailed(error));
    }
  };
};
export const requestCreatingNewPage = (data) => {
  return async (dispatch, getState) => {
    const state = getState();
    const token = state.user.token;
    dispatch(requestStarted());
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_URL}/pages/create-page`,
        data,
        { headers: { authorization: token } }
      );
      if (res.data && res.data.message) {
        alertSuccess(res.data.message);
      }
      dispatch(requestSucceeded());
      if (res.data && res.data.page && res.data.page._id) {
        dispatch(addNewPage({ ...data, _id: res.data.page._id }));

      }
    } catch (error) {
      dispatch(requestFailed(error));
    }
  };
};
export const requestUpdatePage = (id, data, history) => {
  return async (dispatch, getState) => {
    const state = getState();
    const token = state.user.token;
    try {
      const res = await axios.put(
        `${process.env.REACT_APP_API_URL}/pages/${id}`,
        data,
        { headers: { authorization: token } }
      );
      dispatch(requestSucceeded());
      if (res.data && res.data.message) {
        alertSuccess(res.data.message);
        history.push("/pages");
      }
      dispatch(updatePage(id, data));
    } catch (error) {
      dispatch(requestFailed(error));
    }
  };
};
export const requestRemovePage = (pageID)=>{
    return async (dispatch, getState) => {
        const state = getState();
        const token = state.user.token;
        try {
            const res = await axios.delete(`${process.env.REACT_APP_API_URL}/pages/${pageID}`,{headers:{authorization:token}})
            dispatch(requestSucceeded())
            if(res.data && res.data.message){
                alertSuccess(res.data.message)
            }
            dispatch(removePage(pageID))
        } catch (error) {
            dispatch(requestFailed(error))
        }
    }
}