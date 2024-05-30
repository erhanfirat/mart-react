import { applyMiddleware, legacy_createStore } from "redux";
import logger from "redux-logger";
import { globalReducer } from "./reducers/globalReducer";
import { thunk } from "redux-thunk";

export const myStore = legacy_createStore(
  globalReducer,
  applyMiddleware(logger, thunk)
);
