import { ADD_CAKE, REMOVE_CAKE } from "../types/cakeActionTypes";

export function addCake(quantity = 1) {
  return { type: ADD_CAKE, payload: { quantity } };
}

export function removeCake(quantity = 1) {
  return { type: REMOVE_CAKE, payload: { quantity } };
}
