import asyncStore from "../stores/asyncFetchStore";
import {
  FETCH_DATA,
  FETCH_SUCCESS,
  FETCH_FAILURE,
} from "../actions/types/asyncFetchActionTypes";

export default function asyncReducer(state = asyncStore, action) {
  switch (action.type) {
    case FETCH_DATA:
      return { ...state, loading: true };
    case FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        data: [...state.data, ...action.data],
        error: null,
      };
    case FETCH_FAILURE:
      return { ...state, data: [], loading: false, error: action.error };
    default:
      return state;
  }
}
