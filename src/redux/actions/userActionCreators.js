import axios from "axios";
import {
  ADD_FAV_HOTEL,
  LOGIN,
  LOGOUT,
  UPDATE_USER_INFO,
} from "../types/userTypes";
import {
  requestFailed,
  requestStarted,
  requestSucceeded,
} from "./feedbackActionCreators";
import { alertSuccess } from "../../utils/feedback";
import { toast } from "react-toastify";
// import { REMOVE_HOTEL } from "../Types/hotelType";

export const login = (user, token) => ({
  type: LOGIN,
  payload: {
    user,
    token,
  },
});
export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  return { type: LOGOUT };
};
export const updateUserInfo = (user) => ({
  type: UPDATE_USER_INFO,
  payload: user,
});
// export const addFavoriteHotel = (id) => ({
//   type: ADD_FAV_HOTEL,
//   payload: id,
// });
// export const removeFavoriteHotel = (id) => ({
//   type: REMOVE_HOTEL,
//   payload: id,
// });
export const requestLogin = (email, password) => {
  return async (dispatch) => {
    dispatch(requestStarted());
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_URL}/auth/login`,
        { email, password }
      );
      dispatch(requestSucceeded());
      const { message, token, user } = res.data;
      // alertSuccess(message)
      toast.success(message);
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
      dispatch(login(user, token));
    } catch (error) {
      dispatch(requestFailed(error));
    }
  };
};

export const requestRegister = (data, history) => {
  return async (dispatch) => {
    dispatch(requestStarted());
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_URL}/auth/register`,
        data
      );
      dispatch(requestSucceeded());
      if (res.data.message) {
        alertSuccess(res.data.message);
      }
      history.push("/");
    } catch (error) {
      dispatch(requestFailed(error));
    }
  };
};
export const requestUpdateUserInfo = (formData, history) => {
  return async (dispatch, getState) => {
    const state = getState();
    const token = state.user.token;
    dispatch(requestStarted());
    try {
      const res = await axios.put(
        `${process.env.REACT_APP_API_URL}/auth/user-profile`,
        formData,
        {
          headers: {
            authorization: token,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      dispatch(requestSucceeded());
      if (res.data.message) {
        alertSuccess(res.data.message);
      }
      localStorage.setItem("user", JSON.stringify(res.data.user));
      dispatch(updateUserInfo(res.data.user));
    } catch (error) {
      dispatch(requestFailed(error));
    }
  };
};
// export const addToListFavoritHotel = (id) => {
//   return async (dispatch, getState) => {
//     const state = getState();
//     const token = state.user.token;
//     console.log({ id });
//     dispatch(requestStarted());
//     try {
//       const res = await axios.put(
//         `${process.env.REACT_APP_API_URL}/auth/add-fav-hotel`,
//         { id },
//         { headers: { authorization: token } }
//       );
//       dispatch(requestSucceeded());
//       if (res.data.message) {
//         alertSuccess(res.data.message);
//       }
//       // localStorage.setItem("favoriteHotels", JSON.stringify(res.data.userToUpdate.listFavoriteHotel));
//       dispatch(addFavoriteHotel(id));
//     } catch (error) {
//       dispatch(requestFailed(error));
//     }
//   };
// };
// export const removeFromFavoriteHotel = (id) => {
//   return async (dispatch, getState) => {
//     const state = getState();
//     const token = state.user.token;
//     console.log({ id });
//     dispatch(requestStarted());
//     try {
//       const res = await axios.put(
//         `${process.env.REACT_APP_API_URL}/auth/remove-fav-hotel`,
//         { id },
//         { headers: { authorization: token } }
//       );
//       dispatch(requestSucceeded());
//       if (res.data.message) {
//         alertSuccess(res.data.message);
//       }
//       dispatch(removeFavoriteHotel(id));
//     } catch (error) {
//       dispatch(requestFailed(error));
//     }
//   };
// };

export const requestForgetPassword = (email) => {
  return async (dispatch) => {
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_URL}/auth/forget_password`,
        { email }
      );
      dispatch(requestSucceeded());
      alertSuccess(res.data.message);
    } catch (error) {
      dispatch(requestFailed(error));
    }
  };
};
