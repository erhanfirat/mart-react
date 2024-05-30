const initialState = {
  title: "MyReact App",
  user: null,
  products: [],
};

export const globalReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_TITLE":
      return { ...state, title: action.payload };
      break;

    case "SET_PRODUCTS":
      return { ...state, products: action.payload };
      break;

    default:
      return state;
      break;
  }
};
