import axios from "axios";
import { GET_RATING } from "../types/reviewType";
import {
  requestFailed,
  requestStarted,
  requestSucceeded,
} from "./feedbackActionCreators";

export const getReviewByUser = (data) => ({
  type: GET_RATING,
  payload: data,
});


export const fetchReviewByUser = (id) => {
  return async (dispatch, getState) => {
    const state = getState();
    const token = state.user.token;
    console.log(state)
    try {
      dispatch(requestStarted());
      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/review-by-user/${id}`,
        { headers: { authorization: token } }
      );
      dispatch(requestSucceeded());
      const review = res.data;
      dispatch(getReviewByUser(review));
    } catch (error) {
      dispatch(requestFailed(error));
    }
  };
};
