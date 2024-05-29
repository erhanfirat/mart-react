import { legacy_createStore } from "redux";

const initialState = {
  title: "MyReact App",
  user: null,
};

const globalReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_TITLE":
      return { ...state, title: action.payload };
      break;

    default:
      return state;
      break;
  }
};

export const myStore = legacy_createStore(globalReducer);
