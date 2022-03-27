import { ADD_ICE_CREAM, REMOVE_ICE_CREAM } from "../types/iceCreamActionTypes";

export function addIceCream() {
  return { type: ADD_ICE_CREAM };
}

export function removeIceCream() {
  return { type: REMOVE_ICE_CREAM };
}
