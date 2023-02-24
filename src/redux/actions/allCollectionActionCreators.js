import axios from "axios";
import { alertSuccess } from "../../utils/feedback";
import { GET_ALL_COLLECTIONS } from "../types/allCollectionTypes";
import { requestFailed, requestStarted, requestSucceeded } from "./feedbackActionCreators";

export const getAllCollections = (collections) => ({
  type: GET_ALL_COLLECTIONS,
  payload: collections,
});

export const fetchAllCollection = () => {
  return async (dispatch) => {
    dispatch(requestStarted())
    try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/all-items`)
        dispatch(requestSucceeded())
        const collections = res.data
        dispatch(getAllCollections(collections))       
    } catch (error) {
        dispatch(requestFailed(error));
    }
  };
};
