import cakes from "../stores/cakeStore";
import { ADD_CAKE, REMOVE_CAKE } from "../actions/types/cakeActionTypes";

export default function cakeReducer(state = cakes, action) {
  switch (action.type) {
    case ADD_CAKE:
      return {
        ...state,
        quantity: state.quantity + parseInt(action.payload.quantity),
      };
    case REMOVE_CAKE:
      return {
        ...state,
        quantity: state.quantity - parseInt(action.payload.quantity),
      };
    default:
      return state;
  }
}
