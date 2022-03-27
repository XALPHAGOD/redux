import {
  FETCH_DATA,
  FETCH_SUCCESS,
  FETCH_FAILURE,
} from "../types/asyncFetchActionTypes";

import axios from "axios";

export function fetchData() {
  return { type: FETCH_DATA };
}

export function fetchSuccess(data) {
  return { type: FETCH_SUCCESS, data };
}

export function fetchFailure(error) {
  return { type: FETCH_FAILURE, error };
}

export function startFetch(url) {
  //action creator
  return async function (dispatch) {
    dispatch(fetchData());
    try {
      const response = await axios.get(url);
      // console.log(response);
      dispatch(fetchSuccess(response.data));
    } catch (error) {
      // console.log(error);
      dispatch(fetchFailure(error.message));
    }
  };
}
