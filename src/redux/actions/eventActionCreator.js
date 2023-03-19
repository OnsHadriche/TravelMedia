import axios from "axios";
import { alertSuccess } from "../../utils/feedback";
import {
  ADD_EVENT,
  REMOVE_EVENT,
  SELECT_ALL_EVENT_CREATED_PAGE,
  SELECT_ALL_EVENT_CREATED_USER,
  SELECT_EVENT,
  SET_ALL_EVENTS,
  UPDATE_EVENT,
} from "../types/eventType";
import {
  requestFailed,
  requestStarted,
  requestSucceeded,
} from "./feedbackActionCreators";

export const setAllEvents = (events) => ({
  type: SET_ALL_EVENTS,
  payload: events,
});
export const selectEvent = (event) => ({
  type: SELECT_EVENT,
  payload: event,
});
export const selectEventByPage = (eventDataPage) => ({
  type: SELECT_ALL_EVENT_CREATED_PAGE,
  payload: eventDataPage,
});
export const selectEventByUser = (eventDataUser) => ({
  type: SELECT_ALL_EVENT_CREATED_USER,
  payload: eventDataUser,
});
export const addNewEvent = (event) => ({
  type: ADD_EVENT,
  payload: event,
});
export const removeEvent = (eventID) => ({
  type: REMOVE_EVENT,
  payload: eventID,
});
export const updateEvent = (eventID, data) => ({
  type: UPDATE_EVENT,
  payload: {
    id: eventID,
    data,
  },
});

export const getAllEvents = () => {
  return async (dispatch) => {
    dispatch(requestStarted());
    try {
      const res = await axios.get(`${process.env.REACT_APP_API_URL}/events`);
      dispatch(requestSucceeded());
      const events = res.data;
      dispatch(setAllEvents(events));
    } catch (error) {
      dispatch(requestFailed(error));
    }
  };
};
export const getEventById = (id) => {
  return async (dispatch, getState) => {
    const state = getState();
    const token = state.user.token;
    dispatch(requestStarted());
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/events/${id}`,
        { headers: { authorization: token } }
      );
      dispatch(requestSucceeded());
      dispatch(selectEvent(res.data));
    } catch (error) {
      dispatch(requestFailed(error));
    }
  };
};
export const fetchEventByPage = (id) => {
  return async (dispatch, getState) => {
    const state = getState();
    const token = state.user.token;
    dispatch(requestStarted());
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/events/events-created/${id}`,
        { headers: { authorization: token } }
      );
      dispatch(requestSucceeded());
      dispatch(selectEventByPage(res.data));
    } catch (error) {
      dispatch(requestFailed(error));
    }
  };
};
export const requestCreatingNewEvent = (data, id, history) => {
  return async (dispatch, getState) => {
    const state = getState();
    const token = state.user.token;
    dispatch(requestStarted());
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_URL}/events/create-event/${id}`,
        data,
        { headers: { authorization: token } }
      );
      if (res.data && res.data.message) {
        alertSuccess(res.data.message);
      }
      dispatch(requestSucceeded());
      console.log(res.data);
      if (res.data && res.data.event && res.data.event._id) {
        dispatch(addNewEvent({ ...data, _id: res.data.event._id }));
        history.push("/events");
      }
    } catch (error) {
      dispatch(requestFailed(error));
    }
  };
};
export const requestUpdateEvent = (id, data, history) => {
  return async (dispatch, getState) => {
    const state = getState();
    const token = state.user.token;
    try {
      const res = await axios.put(
        `${process.env.REACT_APP_API_URL}/events/${id}`,
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
        history.push("/events");
      }
      dispatch(updateEvent(id, data));
    } catch (error) {
      dispatch(requestFailed(error));
    }
  };
};
export const requestRemoveEvent = (eventID, closeModal, history) => {
  return async (dispatch, getState) => {
    const state = getState();
    const token = state.user.token;
    try {
      const res = await axios.delete(
        `${process.env.REACT_APP_API_URL}/events/${eventID}`,
        { headers: { authorization: token } }
      );
      dispatch(requestSucceeded());
      if (res.data && res.data.message) {
        alertSuccess(res.data.message);
      }
      dispatch(removeEvent(eventID));
      closeModal();
    } catch (error) {
      dispatch(requestFailed(error));
    }
  };
};
