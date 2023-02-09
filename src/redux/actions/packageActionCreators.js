import axios from "axios";
import { alertSuccess } from "../../utils/feedback";
import {
  ADD_PACKAGE,
  REMOVE_PACKAGE,
  SELECT_PACKAGE,
  SELECT_PACKAGE_AGENCY,
  SET_ALL_PACKAGES,
  UPDATE_PACKAGE,
} from "../types/packageType";
import {
  requestFailed,
  requestStarted,
  requestSucceeded,
} from "./feedbackActionCreators";

export const setAllPackages = (packages) => ({
  type: SET_ALL_PACKAGES,
  payload: packages,
});
export const selectPackege = (pack) => ({
  type: SELECT_PACKAGE,
  payload: pack,
});
export const selectPackageByAgency = (packData) => ({
  type: SELECT_PACKAGE_AGENCY,
  payload: packData,

});
export const removePack = (packId) => ({
  type: REMOVE_PACKAGE,
  payload: packId,
});
export const updatePack = (packId, data) => ({
  type: UPDATE_PACKAGE,
  payload: {
    id: packId,
    data,
  },
});
export const addPack = (pack) => ({
  type: ADD_PACKAGE,
  payload: pack,
});

export const getAllPack = () => {
  return async (dispatch) => {
    dispatch(requestStarted());
    try {
      const res = await axios.get(`${process.env.REACT_APP_API_URL}/packs`);
      dispatch(requestSucceeded());
      const packages = res.data
      console.log(res.data)
      dispatch(setAllPackages(packages));
    } catch (error) {
      dispatch(requestFailed(error));
    }
  };
};
export const getPackById = (id) => {
  return async (dispatch) => {
    dispatch(requestStarted());
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/packs/${id}`
      );
      dispatch(requestSucceeded());
      const pack = res.data;
      dispatch(selectPackege(pack));
    } catch (error) {
      dispatch(requestFailed(error));
    }
  };
};
export const fetchPackByAgency = (id) => {
  return async (dispatch, getState) => {
    const state = getState()
    const token = state.user.token
    dispatch(requestStarted());
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/packs/pack-created-page/${id}`, {headers:{authorization: token}}
      );      
      dispatch(requestSucceeded())
      dispatch(selectPackageByAgency(res.data))
    } catch (error) {
      dispatch(requestFailed(error));
    }
  };
};
export const requestCreatePackage = (data, navigate,id) => {
  return async (dispatch, getState) => {
    const state = getState();
    const token = state.user.token;
    dispatch(requestStarted());
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_URL}/packs/create-package/${id}`,
        data,
        { headers: { authorization: token } }
      );
      dispatch(requestSucceeded());
      if (res.data && res.data.message) {
        alertSuccess(res.data.message);
      }
      console.log(res.data)
      if (res.data && res.data.pack && res.data.pack._id) {
        dispatch(addPack({ ...data, _id: res.data.pack._id }));
        navigate("/packages");
      }
    } catch (error) {
      dispatch(requestFailed(error));
    }
  };
};
export const requestUpdatePack = (id, data, history) => {
  return async (dispatch, getState) => {
    const state = getState();
    const token = state.user.token;
    try {
      const res = await axios.put(
        `${process.env.REACT_APP_API_URL}/packs/${id}`,
        data,
        { headers: { authorization: token } }
      );
      dispatch(requestSucceeded());
      if (res.data && res.data.message) {
        alertSuccess(res.data.message);
        history.push("/packages");
      }
      dispatch(updatePack(id, data));
    } catch (error) {
      dispatch(requestFailed(error));
    }
  };
};
export const requestDeletePack = (packId, closeModal) => {
  return async (dispatch, getState) => {
    const state = getState();
    const token = state.user.token;
    try {
      const res = await axios.delete(
        `${process.env.REACT_APP_API_URL}/packs/${packId}`,
        { headers: { authorization: token } }
      );
      dispatch(requestSucceeded());
      if (res.data && res.data.message) {
        alertSuccess(res.data.message);
      }
      dispatch(removePack(packId));
      closeModal()
    } catch (error) {
      dispatch(requestFailed(error));
    }
  };
};
