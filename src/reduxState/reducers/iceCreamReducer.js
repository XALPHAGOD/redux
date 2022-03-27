import ice_creams from "../stores/iceCreamStore";
import {
  ADD_ICE_CREAM,
  REMOVE_ICE_CREAM,
} from "../actions/types/iceCreamActionTypes";

export default function iceCreamReducer(state = ice_creams, action) {
  switch (action.type) {
    case ADD_ICE_CREAM:
      return { ...state, quantity: state.quantity + 1 };
    case REMOVE_ICE_CREAM:
      return { ...state, quantity: state.quantity - 1 };
    default:
      return state;
  }
}
