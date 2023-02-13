import axios from "axios";
import { alertSuccess } from "../../utils/feedback";
import {
  ADD_HOTEL,
  ADD_RATING,
  REMOVE_HOTEL,
  SELECT_HOTEL,
  SELECT_HOTEL_PAGE,
  SET_ALL_HOTELS,
  UPDATE_HOTEL,
} from "../types/hotelType";
import {
  requestFailed,
  requestStarted,
  requestSucceeded,
} from "./feedbackActionCreators";
// import { getReviewByUser } from "./reviewRatingActions";

export const setAllHotels = (hotels) => ({
  type: SET_ALL_HOTELS,
  payload: hotels,
});
export const selectHotel = (data) => ({
  type: SELECT_HOTEL,
  payload: data,
});
export const selectHotelPage = (hotels) => ({
  type: SELECT_HOTEL_PAGE,
  payload: hotels,
});
export const createHotel = (hotel) => ({
  type: ADD_HOTEL,
  payload: hotel,
});
export const updateHotel = (hotelId, data) => ({
  type: UPDATE_HOTEL,
  payload: {
    id: hotelId,
    data,
  },
});
export const removeHotel = (hotelId) => ({
  type: REMOVE_HOTEL,
  payload: hotelId,
});

export const fetchAllHotels = () => {
  return async (dispatch) => {
    try {
      dispatch(requestStarted());
      const res = await axios.get(`${process.env.REACT_APP_API_URL}/hotels`);
      dispatch(requestSucceeded());
      const hotels = res.data;
      // console.log(hotels)
      dispatch(setAllHotels(hotels));
    } catch (error) {
      dispatch(requestFailed(error));
    }
  };
};
export const fetchHotelById = (id) => {
  return async (dispatch, getState) => {
    const state = getState();
    const token = state.user.token;
    try {
      dispatch(requestStarted());
      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/hotels/${id}`,
        { headers: { authorization: token } }
      );
      dispatch(requestSucceeded());
      console.log(res.data);
      const dataHotel = res.data;
      dispatch(selectHotel(dataHotel));
    } catch (error) {
      dispatch(requestFailed(error));
    }
  };
};
export const fetchHotelByIdPage = (id) => {
  return async (dispatch, getState) => {
    const state = getState();
    const token = state.user.token;
    try {
      dispatch(requestStarted());
      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/hotels/hotel-by-page/${id}`,
        { headers: { authorization: token } }
      );

      dispatch(requestSucceeded());

      const hotel = res.data;
      dispatch(selectHotelPage(hotel));
    } catch (error) {
      dispatch(requestFailed(error));
    }
  };
};
export const requestCreatingHotel = (PageId, data, navigate) => {
  return async (dispatch, getState) => {
    const state = getState();
    const token = state.user.token;

    try {
      dispatch(requestStarted());
      const res = await axios.post(
        `${process.env.REACT_APP_API_URL}/hotels/create-hotel/${PageId}`,
        data,
        { headers: { authorization: token } }
      );
      dispatch(requestSucceeded());
      if (res.data && res.data.message) {
        alertSuccess(res.data.message);
      }
      console.log("res.data");
      console.log(res.data);
      if (res.data && res.data.hotel && res.data.hotel._id) {
        dispatch(createHotel({ ...data, _id: res.data.hotel._id }));
        navigate("/");
      }
    } catch (error) {
      dispatch(requestFailed(error));
    }
  };
};
export const requestUpdateHotel = (id, data) => {
  return async (dispatch, getState) => {
    const state = getState();
    const token = state.user.token;
    try {
      dispatch(requestStarted());
      const res = await axios.put(
        `${process.env.REACT_APP_API_URL}/hotels/${id}`,
        data,
        {
          headers: {
            authorization: token,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      dispatch(requestSucceeded());
      if (res.data && res.data.message) {
        alertSuccess(res.data.message);
      }
      dispatch(updateHotel(id, data));
    } catch (error) {
      dispatch(requestFailed(error));
    }
  };
};
export const requestDeleteHotel = (hotelId, closeModal) => {
  return async (dispatch, getState) => {
    const state = getState();
    const token = state.user.token;
    try {
      dispatch(requestStarted());
      const res = await axios.delete(
        `${process.env.REACT_APP_API_URL}/hotels/${hotelId}`,
        { headers: { authorization: token } }
      );
      dispatch(requestSucceeded());
      if (res.data && res.data.message) {
        alertSuccess(res.data.message);
      }
      dispatch(removeHotel(hotelId));
      closeModal();
    } catch (error) {
      dispatch(requestFailed(error));
    }
  };
};

export const addRatingToHotel = (id, data) => {
  return async (dispatch, getState) => {
    const state = getState();
    const token = state.user.token;
    try {
      dispatch(requestStarted());
      const res = await axios.post(
        `${process.env.REACT_APP_API_URL}/hotels/add-rating-hotel/${id}`,
        data,
        { headers: { authorization: token } }
      );
      dispatch(requestSucceeded());
      console.log(data);
      dispatch(updateHotel(id, res.data));
    } catch (error) {
      dispatch(requestFailed(error));
    }
  };
};
