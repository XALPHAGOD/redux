import { combineReducers } from "redux";

import cakeReducer from "./cakeReducer";
import iceCreamReducer from "./iceCreamReducer";
import asyncFetchReducer from "./asyncFetchReducer";

const rootReducer = combineReducers({
  cakes: cakeReducer,
  ice_creams: iceCreamReducer,
  async_fetch: asyncFetchReducer,
});

export default rootReducer;
